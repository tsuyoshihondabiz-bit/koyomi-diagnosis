'use client';

import { useEffect, useState } from 'react';
import type { QuizScores } from '@/lib/quiz-scoring';

interface RadarChartProps {
  scores: QuizScores;
  size?: number;
}

const AXES: { key: keyof QuizScores; label: string; emoji: string }[] = [
  { key: 'passion',      label: '情熱力', emoji: '🔥' },
  { key: 'intuition',    label: '直感力', emoji: '🌙' },
  { key: 'empathy',      label: '共感力', emoji: '🌊' },
  { key: 'independence', label: '独立心', emoji: '⭐' },
  { key: 'embrace',      label: '包容力', emoji: '💎' },
];

function polarToCartesian(cx: number, cy: number, r: number, angleIndex: number, total: number) {
  const angle = (Math.PI * 2 * angleIndex) / total - Math.PI / 2;
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

export default function RadarChart({ scores, size = 280 }: RadarChartProps) {
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1200;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setAnimProgress(p);
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.35;
  const n = AXES.length;

  // Grid rings
  const rings = [0.25, 0.5, 0.75, 1.0];
  const gridPaths = rings.map((frac) => {
    const pts = Array.from({ length: n }, (_, i) => polarToCartesian(cx, cy, maxR * frac, i, n));
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + ' Z';
  });

  // Data polygon
  const dataPts = AXES.map((axis, i) => {
    const val = (scores[axis.key] / 100) * maxR * animProgress;
    return polarToCartesian(cx, cy, val, i, n);
  });
  const dataPath = dataPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + ' Z';

  // Axis lines
  const axisEnds = Array.from({ length: n }, (_, i) => polarToCartesian(cx, cy, maxR, i, n));

  // Label positions
  const labelPts = Array.from({ length: n }, (_, i) => polarToCartesian(cx, cy, maxR + 30, i, n));

  return (
    <div className="flex justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid rings */}
        {gridPaths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity={0.15 + i * 0.05} />
        ))}

        {/* Axis lines */}
        {axisEnds.map((p, i) => (
          <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#c9a84c" strokeWidth="0.5" opacity="0.2" />
        ))}

        {/* Data polygon fill */}
        <defs>
          <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7b6baf" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d={dataPath} fill="url(#radarGrad)" stroke="#e8cc6a" strokeWidth="2" />

        {/* Data points */}
        {dataPts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#e8cc6a" stroke="#0a0e2a" strokeWidth="2" />
        ))}

        {/* Labels */}
        {labelPts.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#e8e4f0"
            fontSize="11"
            fontFamily="var(--font-zen)"
          >
            {AXES[i].emoji} {AXES[i].label}
          </text>
        ))}
      </svg>
    </div>
  );
}
