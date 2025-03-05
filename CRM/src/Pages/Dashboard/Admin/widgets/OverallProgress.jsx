import React from 'react';

function OverallProgress() {
  return (
    <div className="bg-[#0A1534] rounded-2xl p-6 text-white relative" style={{ height: '400px' }}>
      <div className="relative w-full h-64 flex items-center justify-center">
        <svg viewBox="0 0 200 100" className="absolute top-0 left-0 w-full h-full">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="75%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#00C2FF" />
            </linearGradient>
          </defs>
          <path 
            d="M20 100 Q100 0 180 100" 
            fill="none" 
            stroke="#112040" 
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path 
            d="M20 100 Q100 0 180 100" 
            fill="none" 
            stroke="url(#progressGradient)" 
            strokeWidth="15"
            strokeDasharray="200"
            strokeDashoffset="50"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center top-">
          <span className="text-5xl font-bold">23,648</span>
          <span className="text-sm text-gray-400 mt-2">Overall Progress</span>
          <div className="absolute w-3 h-3 bg-white rounded-full border-2 border-[#A855F7] bottom-[-10px]"></div>
        </div>
      </div>
      
      <div className="mt-16 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Ongoing Projects</span>
          </div>
          <span className="font-semibold">6,624</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
            <span>Ongoing Workshops</span>
          </div>
          <span className="font-semibold">5,546</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Completed Workshops/Projects</span>
          </div>
          <span className="font-semibold">2,478</span>
        </div>
      </div>
    </div>
  );
}

export default OverallProgress;