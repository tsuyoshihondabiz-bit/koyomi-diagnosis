'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center py-20 gap-6"
      role="status"
      aria-label="診断中"
    >
      <div className="flex gap-3">
        <span className="dot-pulse" />
        <span className="dot-pulse" />
        <span className="dot-pulse" />
      </div>
      <p
        className={`text-gold-dim text-sm transition-opacity duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        星の配置を読み解いています...
      </p>
    </div>
  );
}
