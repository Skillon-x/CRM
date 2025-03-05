import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const navItems = [
    { icon: "grid", label: "Dashboard", hasDropdown: true, active: true },
    { icon: "dollar-sign", label: "Sales" },
    { icon: "users", label: "Tech team" },
    { icon: "trending-up", label: "Marketing" },
    { icon: "star", label: "Projects" },
  ];
  
  const accountItems = [
    { icon: "user", label: "Profile" },
    { icon: "file", label: "Logout" },
    { icon: "calendar", label: "Calendar" },
  ];
  
  const renderNavItem = (item, index) => {
    return (
      <div 
        key={index}
        className={`flex items-center px-4 py-2 cursor-pointer hover:bg-[#CB3CFF]/10 group transition-colors duration-200 ${
          item.active ? 'bg-[#343B4F]/20 border-l-2 border-[#CB3CFF]' : ''
        }`}
      >
        <span className={`w-6 ${item.active ? 'text-[#CB3CFF]' : 'text-gray-400 group-hover:text-[#CB3CFF]'}`}>
          <i className={`icon-${item.icon}`}></i>
        </span>
        <span className={`ml-3 ${item.active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
          {item.label}
        </span>
        {item.hasDropdown && (
          <span className="ml-auto text-gray-400">
            <i className={`icon-chevron-${isOpen ? 'down' : 'right'}`}></i>
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-[#081028] h-screen border-r border-[#343B4F]/30 flex flex-col">
      {/* User Profile */}
      <div className="p-4 flex items-center justify-between border-b border-[#343B4F]/30">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
            JC
          </div>
          <div>
            <h3 className="text-white font-medium">John Carter</h3>
            <p className="text-gray-400 text-xs">Account settings</p>
          </div>
        </div>
        <span className="text-gray-400 cursor-pointer">
          <i className="icon-chevron-right"></i>
        </span>
      </div>
      
      {/* Navigation Items */}
      <div className="py-4 flex-grow">
        {navItems.map(renderNavItem)}
      </div>
      
      {/* Account Pages */}
      <div className="pt-4 mt-auto border-t border-[#343B4F]/30">
        <p className="px-4 py-2 text-xs font-semibold text-gray-400">ACCOUNT PAGES</p>
        {accountItems.map(renderNavItem)}
      </div>
    </div>
  );
};

export default Sidebar;