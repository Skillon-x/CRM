import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background with gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#E6E9F3] to-[#EAE5F5]">
        {/* Dark space overlay */}
        <div className="absolute inset-0 bg-space">
          <div className="stars-small" />
          <div className="stars-medium" />
          <div className="stars-large" />
          <div className="galaxy-overlay" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="relative">
              <button className="text-gray-800 px-3 py-1">Product ▾</button>
            </div>
            <div className="relative">
              <button className="text-gray-800 px-3 py-1">Community ▾</button>
            </div>
            <div className="relative">
              <button className="text-gray-800 px-3 py-1">Resources ▾</button>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-800 px-3 py-1">SIGN IN</button>
            <button className="text-gray-800 px-3 py-1">LOG IN</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-8 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Smart Crm Stronger Co
        </h1>
      </div>
    </section>
  );
};

export default Hero;