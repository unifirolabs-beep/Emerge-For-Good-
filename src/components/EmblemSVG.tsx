import React from 'react';

export function EmblemSVG({ className = "" }: { className?: string }) {
  const colors = [
    '#EF4444', // 12-1
    '#F97316', // 1-2
    '#F59E0B', // 2-3
    '#84CC16', // 3-4
    '#22C55E', // 4-5
    '#14B8A6', // 5-6
    '#0EA5E9', // 6-7
    '#3B82F6', // 7-8
    '#4338CA', // 8-9
    '#6D28D9', // 9-10
    '#A21CAF', // 10-11
    '#E11D48', // 11-12
  ];

  const radius = 40;
  const strokeWidth = 14;
  const center = 50;

  // Generate 12 segments with a small gap (2 degrees)
  const segments = colors.map((color, i) => {
    const startAngle = (i * 30 + 1) * (Math.PI / 180);
    const endAngle = ((i + 1) * 30 - 1) * (Math.PI / 180);

    // SVG arc coordinates (starting from 12 o'clock, meaning -90 degrees offset in standard math)
    const x1 = (center + radius * Math.cos(startAngle - Math.PI / 2)).toFixed(4);
    const y1 = (center + radius * Math.sin(startAngle - Math.PI / 2)).toFixed(4);
    const x2 = (center + radius * Math.cos(endAngle - Math.PI / 2)).toFixed(4);
    const y2 = (center + radius * Math.sin(endAngle - Math.PI / 2)).toFixed(4);

    return (
      <path
        key={i}
        d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    );
  });

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* 12 Colored Segments */}
      {segments}

      {/* Orbit 1 (Orange, top-left to bottom-right) */}
      <g transform="rotate(-30 50 50)">
        <ellipse cx="50" cy="50" rx="34" ry="10" fill="none" stroke="#F97316" strokeWidth="2.5" />
        {/* Dot on the left side of this orbit */}
        <circle cx="16" cy="50" r="4.5" fill="#F97316" />
      </g>

      {/* Orbit 2 (Blue, bottom-left to top-right) */}
      <g transform="rotate(30 50 50)">
        <ellipse cx="50" cy="50" rx="34" ry="10" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
        {/* Dot on the right side of this orbit */}
        <circle cx="84" cy="50" r="4.5" fill="#3B82F6" />
      </g>

      {/* Center 4-Pointed Star (Yellow) */}
      <path
        d="M 50 32 Q 50 50 68 50 Q 50 50 50 68 Q 50 50 32 50 Q 50 50 50 32 Z"
        fill="#F59E0B"
      />
    </svg>
  );
}
