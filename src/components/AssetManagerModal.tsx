import React, { useRef, useState } from 'react';
import { useAsset } from '../context/AssetContext';
import { BRAND_ASSETS, PRODUCTS } from '../data/products';

export const AssetManagerModal: React.FC = () => {
  const { isAssetManagerOpen, setIsAssetManagerOpen, registerAsset, assetOverrides, clearAssets } = useAsset();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedTarget, setSelectedTarget] = useState<string>('');
  const [feedbackMsg, setFeedbackMsg] = useState<string>('');

  if (!isAssetManagerOpen) return null;

  const targetList = [
    { id: 'logo', name: 'Official Brand Logo (Image 1)', filename: BRAND_ASSETS.logo.filename },
    { id: 'lifestyle', name: 'Customer / Lifestyle Image (Image 2)', filename: BRAND_ASSETS.lifestyle.filename },
    { id: 'p1', name: 'Blossom Aura (Image 3)', filename: PRODUCTS[0].imageFilename },
    { id: 'p2', name: 'The Divine Aura (Image 4)', filename: PRODUCTS[1].imageFilename },
    { id: 'p3', name: 'The Alpha Aura (Image 5)', filename: PRODUCTS[2].imageFilename },
    { id: 'p4', name: 'The Imperial Aura (Image 6)', filename: PRODUCTS[3].imageFilename },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = async (evt) => {
        const dataUrl = evt.target?.result as string;
        if (!dataUrl) return;

        // Auto-match if target not explicitly picked
        let targetFilename = selectedTarget;
        if (!targetFilename) {
          const lower = file.name.toLowerCase();
          if (lower.includes('1.27.56') || lower.includes('logo')) {
            targetFilename = BRAND_ASSETS.logo.filename;
          } else if (lower.includes('1.31.23') || lower.includes('lifestyle')) {
            targetFilename = BRAND_ASSETS.lifestyle.filename;
          } else if (lower.includes('2.51.33') && !lower.includes('(1)')) {
            targetFilename = PRODUCTS[0].imageFilename;
          } else if (lower.includes('2.51.33') && lower.includes('(1)')) {
            targetFilename = PRODUCTS[1].imageFilename;
          } else if (lower.includes('2.51.34') && !lower.includes('(1)')) {
            targetFilename = PRODUCTS[2].imageFilename;
          } else if (lower.includes('2.51.34') && lower.includes('(1)')) {
            targetFilename = PRODUCTS[3].imageFilename;
          } else {
            // Default to actual uploaded file name
            targetFilename = file.name;
          }
        }

        await registerAsset(targetFilename, dataUrl);
        setFeedbackMsg(`Successfully attached: ${file.name} to ${targetFilename}`);
        setTimeout(() => setFeedbackMsg(''), 4000);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="fixed inset-0" onClick={() => setIsAssetManagerOpen(false)} />

      <div className="relative w-full max-w-2xl bg-[#111111] border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div>
            <h3 className="font-serif-luxury text-2xl text-[#FDFCF7]">
              Official Brand Assets (Client Images 1-6)
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Exact mapping of the 6 official client images. Upload or drag & drop files here to immediately display on the website.
            </p>
          </div>
          <button
            onClick={() => setIsAssetManagerOpen(false)}
            className="p-2 text-stone-400 hover:text-white rounded-full bg-stone-900 border border-stone-800"
          >
            ✕
          </button>
        </div>

        {feedbackMsg && (
          <div className="mt-4 p-3 bg-[#C5A059]/10 border border-[#C5A059]/30 rounded-xl text-xs text-[#F3E7C4]">
            {feedbackMsg}
          </div>
        )}

        {/* Target Assets List */}
        <div className="my-6 overflow-y-auto space-y-3 flex-grow pr-1">
          {targetList.map((target, idx) => {
            const hasUploaded = Boolean(assetOverrides[target.filename]);
            return (
              <div
                key={target.id}
                className="p-3.5 rounded-xl bg-[#161616] border border-stone-800 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-800 text-[11px] font-mono text-[#C5A059] flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-stone-200">{target.name}</p>
                    <p className="text-[10px] text-stone-500 font-mono truncate max-w-xs">{target.filename}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-mono ${
                    hasUploaded ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40' : 'bg-stone-900 text-stone-500'
                  }`}>
                    {hasUploaded ? 'Active Image' : 'Default Asset'}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedTarget(target.filename);
                      fileInputRef.current?.click();
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs bg-stone-800 hover:bg-[#C5A059] hover:text-black text-stone-300 font-medium transition-colors"
                  >
                    Select File
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Bulk Uploader */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              setSelectedTarget('');
              fileInputRef.current?.click();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-black bg-gradient-to-r from-[#F3E7C4] via-[#C5A059] to-[#9D7B32] hover:brightness-110 shadow-md"
          >
            Upload Any or All 6 WhatsApp Files
          </button>

          {Object.keys(assetOverrides).length > 0 && (
            <button
              onClick={clearAssets}
              className="text-xs text-stone-500 hover:text-red-400 transition-colors"
            >
              Reset Overrides
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
