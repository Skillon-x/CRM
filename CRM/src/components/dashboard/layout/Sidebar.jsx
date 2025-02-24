import React from 'react';
import { Home, LineChart, FileText, User, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;