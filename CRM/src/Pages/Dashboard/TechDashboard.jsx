import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Settings, User, Home, FileText, Menu,DollarSign, Users, UserPlus, ShoppingBag } from 'lucide-react';
const mockData = {
  monthlyData: [
    { month: 'Jan', value1: 45, value2: 20 },
    { month: 'Feb', value1: 20, value2: 15 },
    { month: 'Mar', value1: 25, value2: 20 },
    { month: 'Apr', value1: 30, value2: 25 },
    { month: 'May', value1: 45, value2: 30 },
    { month: 'Jun', value1: 40, value2: 25 },
    { month: 'Jul', value1: 35, value2: 20 },
    { month: 'Aug', value1: 30, value2: 15 },
    { month: 'Sep', value1: 35, value2: 20 },
    { month: 'Oct', value1: 25, value2: 15 },
    { month: 'Nov', value1: 40, value2: 20 },
    { month: 'Dec', value1: 45, value2: 25 },
  ],
  projects: [
    { name: 'Chakra Soft UI Version', budget: 14000, completion: 60, members: 5 },
    { name: 'Add Progress Track', budget: 3000, completion: 10, members: 2 },
    { name: 'Fix Platform Errors', budget: 0, completion: 100, members: 2 },
    { name: 'Launch our Mobile App', budget: 32000, completion: 100, members: 4 },
    { name: 'Add the New Pricing Page', budget: 400, completion: 25, members: 5 },
    { name: 'Redesign New Online Shop', budget: 7600, completion: 40, members: 2 },
  ]
};

export default function TechDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-blue-950 p-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-900">
            <Home className="w-5 h-5 text-blue-400" />
            <span className="text-white">Dashboard</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3">
            <LineChart className="w-5 h-5 text-blue-400" />
            <span className="text-white">Techteam</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="text-white">Proposal</span>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-500 text-sm mb-4">ACCOUNT PAGES</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3">
                <User className="w-5 h-5 text-blue-400" />
                <span className="text-white">Profile</span>
              </div>
              <div className="flex items-center space-x-3 p-3">
                <Settings className="w-5 h-5 text-blue-400" />
                <span className="text-white">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
     {/* Header Stats */}
<div className="grid grid-cols-4 gap-6 mb-8">
  <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
      <p className="text-gray-400 text-sm">Today's Money</p>
    </div>
    <div className="flex items-center justify-between">
      <h3 className="text-white text-2xl font-bold">$53,000</h3>
      <span className="text-green-500">+55%</span>
    </div>
  </div>
  
  <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
      <p className="text-gray-400 text-sm">Workers</p>
    </div>
    <div className="flex items-center justify-between">
      <h3 className="text-white text-2xl font-bold">2,300</h3>
      <span className="text-green-500">+5%</span>
    </div>
  </div>
  
  <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
      </svg>
      <p className="text-gray-400 text-sm">New Clients</p>
    </div>
    <div className="flex items-center justify-between">
      <h3 className="text-white text-2xl font-bold">+3,052</h3>
      <span className="text-red-500">-14%</span>
    </div>
  </div>
  
  <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
      </svg>
      <p className="text-gray-400 text-sm">Total Sales</p>
    </div>
    <div className="flex items-center justify-between">
      <h3 className="text-white text-2xl font-bold">$173,000</h3>
      <span className="text-green-500">+8%</span>
    </div>
  </div>
</div>

      {/* Welcome Section */}
{/* Main Grid Layout */}
<div className="grid grid-cols-12 gap-6">
  {/* Welcome Section + Progress Indicators (first row) */}
  <div className="col-span-4">
    <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4 mb-12">
      <p className="text-gray-400">Welcome back,</p>
      <h2 className="text-white text-2xl font-bold mb-8">Tech</h2>
      <p className="text-gray-400">Glad to see you again!</p>
      <p className="text-gray-400">Ask me anything.</p>
    </div>
  </div>

  {/* Work Progress Circle */}
  <div className="col-span-4">
    <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4 h-full">
      <h3 className="text-white text-lg mb-4">Work progress</h3>
      <div className="text-xs text-gray-400 mb-1">From all projects</div>
      <div className="flex flex-col items-center mt-4">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">95%</span>
          </div>
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <defs>
              <linearGradient id="workProgressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#38bdf8" />
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
              stroke="url(#workProgressGradient)"
              strokeWidth="3"
              strokeDasharray="95, 100"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex justify-between w-full mt-2">
          <span className="text-xs text-gray-400">0%</span>
          <span className="text-xs text-gray-400">100%</span>
        </div>
        <p className="text-gray-100 mt-4 text-sm">Based on likes</p>
      </div>
    </div>
  </div>

  {/* Safety Score Circle */}
  <div className="col-span-4">
    <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4 h-full">
      <h3 className="text-white text-lg mb-4">Referral Tracking</h3>
      <div className="mb-4">
        <div className="text-white font-semibold">Invited</div>
        <div className="text-white text-xl font-bold">145 people</div>
      </div>
      <div className="mb-4">
        <div className="text-white font-semibold">Bonus</div>
        <div className="text-white text-xl font-bold">1,485</div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="text-xs text-gray-200">Safety</div>
            <span className="text-white text-3xl font-bold">9.3</span>
            <div className="text-xs text-gray-300">Total Score</div>
          </div>
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <defs>
              <linearGradient id="safetyScoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
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
              stroke="url(#safetyScoreGradient)"
              strokeWidth="3"
              strokeDasharray="93, 100"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>

  {/* Charts Row (second row) */}
  <div className="col-span-6">
    {/* Work Overview Chart */}
    <div className="bg-gradient-to-b from-blue-950 to-blue-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-white text-lg">Work overview</h3>
        <span className="text-green-500">(+5) more in 2021</span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData.monthlyData}>
            <XAxis dataKey="month" stroke="#4B5563" />
            <YAxis stroke="#4B5563" />
            <Line type="monotone" dataKey="value1" stroke="#3B82F6" strokeWidth={2} />
            <Line type="monotone" dataKey="value2" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>

  {/* Active Workers Section (from Image 2) */}
  <div className="col-span-6">
    <div className="bg-gradient-to-b from-blue-950 to-blue-800 rounded-lg p-4">
      <h3 className="text-white text-lg mb-6">Active workers</h3>
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={[
              {month: 'Jan', value: 300},
              {month: 'Feb', value: 200},
              {month: 'Mar', value: 120},
              {month: 'Apr', value: 280},
              {month: 'May', value: 500},
              {month: 'Jun', value: 400},
              {month: 'Jul', value: 480},
              {month: 'Aug', value: 280},
              {month: 'Sep', value: 150}
            ]}
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
          
      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="bg-blue-600 p-2 rounded mr-2">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-gray-400">Workers</span>
          </div>
          <span className="text-white text-xl font-bold">32,984</span>
          <div className="mt-1 h-1 w-full bg-blue-600"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="bg-blue-600 p-2 rounded mr-2">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <span className="text-gray-400">Clicks</span>
          </div>
          <span className="text-white text-xl font-bold">2.42m</span>
          <div className="mt-1 h-1 w-full bg-blue-600"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="bg-blue-600 p-2 rounded mr-2">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-gray-400">Sales</span>
          </div>
          <span className="text-white text-xl font-bold">2,400$</span>
          <div className="mt-1 h-1 w-full bg-blue-600"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <div className="bg-blue-600 p-2 rounded mr-2">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="text-gray-400">Items</span>
          </div>
          <span className="text-white text-xl font-bold">320</span>
          <div className="mt-1 h-1 w-full bg-blue-600"></div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Projects Table */}
        <div className="bg-blue-950 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-lg">Projects</h3>
            <span className="text-green-500">30 done this month</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm">
                  <th className="text-left pb-4">COMPANIES</th>
                  <th className="text-left pb-4">MEMBERS</th>
                  <th className="text-left pb-4">BUDGET</th>
                  <th className="text-left pb-4">COMPLETION</th>
                </tr>
              </thead>
              <tbody>
                {mockData.projects.map((project, index) => (
                  <tr key={index} className="border-t border-blue-900">
                    <td className="py-4 text-white">{project.name}</td>
                    <td className="py-4">
                      <div className="flex -space-x-2">
                        {[...Array(project.members)].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-blue-400" />
                        ))}
                      </div>
                    </td>
                    <td className="py-4 text-white">
                      {project.budget ? `$${project.budget.toLocaleString()}` : 'Not set'}
                    </td>
                    <td className="py-4">
                      <div className="w-full bg-blue-900 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
