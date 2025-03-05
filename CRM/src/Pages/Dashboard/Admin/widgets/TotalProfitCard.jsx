import React from 'react';

function TotalProfitCard() {
  return (
    <div className="bg-[#1A2647] rounded-lg p-4 text-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm text-gray-400 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Total Profit
        </h3>
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <div className="text-3xl font-bold mr-4">23.6K</div>
        <div className="flex space-x-2">
          <span className="text-green-500 text-xs bg-green-500/20 px-2 py-1 rounded">
            +28.4%
          </span>
          <span className="text-red-500 text-xs bg-red-500/20 px-2 py-1 rounded">
            -12.6%
          </span>
        </div>
      </div>
    </div>
  );
}

export default TotalProfitCard;