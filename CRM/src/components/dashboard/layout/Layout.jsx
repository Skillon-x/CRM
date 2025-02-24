// src/components/layout/Layout.jsx

import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900">
      <Sidebar />
      <div className="ml-64 p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;