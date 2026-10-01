import React, { createContext, useContext, useState, useEffect } from 'react';

interface AssetContextType {
  assetOverrides: Record<string, string>;
  registerAsset: (filename: string, dataUrl: string) => Promise<void>;
  getAssetSrc: (filename: string) => string | null;
  clearAssets: () => void;
  isAssetManagerOpen: boolean;
  setIsAssetManagerOpen: (open: boolean) => void;
}

const AssetContext = createContext<AssetContextType | null>(null);

const STORAGE_KEY = 'aura_hn_scents_assets_v1';

export const AssetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [assetOverrides, setAssetOverrides] = useState<Record<string, string>>({});
  const [isAssetManagerOpen, setIsAssetManagerOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setAssetOverrides(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load asset overrides from storage:', e);
    }
  }, []);

  const registerAsset = async (filename: string, dataUrl: string) => {
    // 1. Update state & localStorage
    setAssetOverrides(prev => {
      const next = { ...prev, [filename]: dataUrl };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('Storage quota exceeded, keeping in-memory:', e);
      }
      return next;
    });

    // 2. Also try to persist to server public directory via API
    try {
      await fetch('/api/upload-asset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, base64Data: dataUrl }),
      });
    } catch (err) {
      console.warn('Server persist skipped (offline or static):', err);
    }
  };

  const clearAssets = () => {
    setAssetOverrides({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  const getAssetSrc = (filename: string): string | null => {
    if (assetOverrides[filename]) {
      return assetOverrides[filename];
    }
    return null;
  };

  return (
    <AssetContext.Provider
      value={{
        assetOverrides,
        registerAsset,
        getAssetSrc,
        clearAssets,
        isAssetManagerOpen,
        setIsAssetManagerOpen,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

export const useAsset = () => {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAsset must be used within an AssetProvider');
  }
  return context;
};
