'use client';

import { useEffect, useState } from 'react';

interface Star {
  w: number;
  x: string;
  y: string;
  opacity: number;
  dur: string;
  delay: string;
}

export default function CelestialBackground({ count = 60 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => {
        const seed = (i * 137 + 7) % 100;
        return {
          w: seed % 3 + 1,
          x: `${(seed * 61 + i * 13) % 100}%`,
          y: `${(seed * 37 + i * 7) % 100}%`,
          opacity: (seed % 40 + 20) / 100,
          dur: `${seed % 5 + 2}s`,
          delay: `${(i * 0.3) % 4}s`,
        };
      })
    );
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${s.w}px`,
            height: `${s.w}px`,
            left: s.x,
            top: s.y,
            background: i % 5 === 0 ? '#e8cc6a' : '#ffffff',
            opacity: s.opacity,
            animation: `twinkle ${s.dur} ease-in-out infinite`,
            animationDelay: s.delay,
            boxShadow: s.w > 2 ? '0 0 4px rgba(255,255,255,0.3)' : 'none',
          }}
        />
      ))}

      {/* Constellation SVG lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <line x1="8%" y1="25%" x2="22%" y2="45%" stroke="#c9a84c" strokeWidth="0.5" />
        <line x1="22%" y1="45%" x2="38%" y2="20%" stroke="#c9a84c" strokeWidth="0.5" />
        <line x1="38%" y1="20%" x2="55%" y2="50%" stroke="#c9a84c" strokeWidth="0.5" />
        <line x1="55%" y1="50%" x2="68%" y2="30%" stroke="#c9a84c" strokeWidth="0.5" />
        <line x1="68%" y1="30%" x2="82%" y2="55%" stroke="#c9a84c" strokeWidth="0.5" />
        <line x1="82%" y1="55%" x2="92%" y2="35%" stroke="#c9a84c" strokeWidth="0.5" />
        {/* Star nodes */}
        <circle cx="22%" cy="45%" r="2.5" fill="#c9a84c" opacity="0.3" />
        <circle cx="55%" cy="50%" r="2" fill="#c9a84c" opacity="0.25" />
        <circle cx="82%" cy="55%" r="2.5" fill="#c9a84c" opacity="0.3" />
      </svg>
    </div>
  );
}
