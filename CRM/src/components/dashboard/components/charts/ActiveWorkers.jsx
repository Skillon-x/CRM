import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function ActiveWorkersChart({ data }) {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-800 rounded-lg p-4">
      <h3 className="text-white text-lg mb-6">Active workers</h3>
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              width={30}
            />
            <Bar 
              dataKey="value" 
              fill="#60A5FA"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-white text-lg font-semibold">Active workers</span>
        <span className="ml-4 text-green-500">(+23) than last week</span>
      </div>
    </div>
  );
}
