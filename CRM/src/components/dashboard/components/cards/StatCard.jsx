import React from 'react';

export default function StatCard({ icon, title, value, change }) {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-white text-2xl font-bold">{value}</h3>
        <span className={`text-${change.startsWith('+') ? 'green' : 'red'}-500`}>
          {change}
        </span>
      </div>
    </div>
  );
}
