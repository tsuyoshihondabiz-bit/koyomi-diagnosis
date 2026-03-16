'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  maxOpacity: number;
  delay: string;
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: `${Math.random() * 4 + 2}s`,
      maxOpacity: Math.random() * 0.6 + 0.2,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
            '--max-opacity': star.maxOpacity,
            animationDelay: star.delay,
          } as React.CSSProperties}
        />
      ))}
      <div
        className="orb"
        style={{
          width: 300,
          height: 300,
          background: 'rgba(107, 91, 149, 0.15)',
          top: '20%',
          left: '60%',
        }}
      />
      <div
        className="orb"
        style={{
          width: 200,
          height: 200,
          background: 'rgba(192, 108, 132, 0.1)',
          top: '60%',
          left: '20%',
          animationDelay: '4s',
        }}
      />
    </div>
  );
}
