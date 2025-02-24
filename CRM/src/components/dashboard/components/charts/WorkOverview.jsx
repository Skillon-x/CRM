import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function WorkOverviewChart({ data }) {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-white text-lg">Work overview</h3>
        <span className="text-green-500">(+5) more in 2021</span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#4B5563" />
            <YAxis stroke="#4B5563" />
            <Line type="monotone" dataKey="value1" stroke="#3B82F6" strokeWidth={2} />
            <Line type="monotone" dataKey="value2" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
