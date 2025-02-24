import React from 'react';

export default function ProgressCircle({ title, subtitle, percentage, gradientColors }) {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4 h-full">
      <h3 className="text-white text-lg mb-4">{title}</h3>
      <div className="text-xs text-gray-400 mb-1">{subtitle}</div>
      <div className="flex flex-col items-center mt-4">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">{percentage}%</span>
          </div>
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <defs>
              <linearGradient id={`gradient-${title}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={gradientColors[0]} />
                <stop offset="100%" stopColor={gradientColors[1]} />
              </linearGradient>
            </defs>
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={`url(#gradient-${title})`}
              strokeWidth="3"
              strokeDasharray={`${percentage}, 100`}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}