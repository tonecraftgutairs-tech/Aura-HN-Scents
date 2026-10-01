import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function assetManagerPlugin(): Plugin {
  return {
    name: 'asset-manager',
    configureServer(server) {
      // 1. Static file server middleware for public directory
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        try {
          const decodedUrl = decodeURIComponent(req.url.split('?')[0]);
          const publicDir = path.resolve(__dirname, 'public');
          
          // Check root public and images folder
          let filePath = path.join(publicDir, decodedUrl);
          if (!fs.existsSync(filePath) && decodedUrl.startsWith('/images/')) {
            filePath = path.join(publicDir, decodedUrl.replace(/^\/images\//, ''));
          } else if (!fs.existsSync(filePath)) {
            filePath = path.join(publicDir, 'images', decodedUrl.replace(/^\//, ''));
          }

          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes: Record<string, string> = {
              '.jpeg': 'image/jpeg',
              '.jpg': 'image/jpeg',
              '.png': 'image/png',
              '.webp': 'image/webp',
              '.svg': 'image/svg+xml',
            };
            if (mimeTypes[ext]) {
              res.setHeader('Content-Type', mimeTypes[ext]);
              res.setHeader('Cache-Control', 'public, max-age=3600');
              const stream = fs.createReadStream(filePath);
              stream.pipe(res);
              return;
            }
          }
        } catch (e) {
          console.error('Error serving static asset:', e);
        }
        next();
      });

      // 2. Upload endpoint
      server.middlewares.use('/api/upload-asset', (req, res) => {

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { filename, base64Data } = JSON.parse(body);
              if (!filename || !base64Data) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing filename or base64Data' }));
                return;
              }
              const buffer = Buffer.from(base64Data.replace(/^data:image\/\w+;base64,/, ''), 'base64');
              const publicDir = path.resolve(__dirname, 'public');
              const imagesDir = path.resolve(publicDir, 'images');
              if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
              if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

              // Save to public root and public/images
              fs.writeFileSync(path.resolve(publicDir, filename), buffer);
              fs.writeFileSync(path.resolve(imagesDir, filename), buffer);

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, filename }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: String(err) }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), assetManagerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

