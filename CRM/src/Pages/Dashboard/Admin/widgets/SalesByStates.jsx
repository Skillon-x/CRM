import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SalesByStates = () => {
  const data = [
    { state: 'Mysore', sales: 30, color: '#9C27B0' },
    { state: 'Mandya', sales: 20, color: '#607D8B' },
    { state: 'Banglore', sales: 20, color: '#FF9800' },
    { state: 'Chikkamanglur', sales: 15, color: '#00BCD4' },
    { state: 'Davanagere', sales: 15, color: '#F44336' }
  ];

  return (
    <div className="flex w-full h-[500px] bg-gray-100 p-4 rounded-lg">
      <div className="w-2/3 pr-4">
        <div className="text-xl font-bold mb-4">Sales by States</div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data}>
            <XAxis dataKey="state" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="sales" 
              fill="#8884d8" 
              label={{ position: 'top' }}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="text-lg mt-2">
          Total Sales: 12.4K ({data.reduce((a, b) => a + b.sales, 0)}%)
        </div>
      </div>
      
      <div className="w-1/3 bg-white rounded-lg p-4 shadow-md">
        <div className="text-xl font-bold mb-4">Karnataka Sales Map</div>
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {/* Simplified map of Karnataka states */}
          {data.map((item, index) => (
            <g key={item.state}>
              <rect 
                x={50 + index * 50} 
                y={100} 
                width={40} 
                height={item.sales * 3} 
                fill={item.color}
                stroke="black"
                strokeWidth="2"
              />
              <text 
                x={60 + index * 50} 
                y={90} 
                fontSize="10"
                textAnchor="middle"
              >
                {item.state}
              </text>
              <text 
                x={60 + index * 50} 
                y={100 + item.sales * 3 + 15} 
                fontSize="10"
                textAnchor="middle"
              >
                {item.sales}%
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default SalesByStates;