// src/components/sections/Overview/Overview.jsx
import React from 'react';
import dashboardImage from '../assets/images/dashboard.png'; // Add your dashboard image

const Overview = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Repeated Text with Gradient */}
          <div className="space-y-2">
            <h2 className="text-5xl font-bold">
              Revoluzioned
              <br />
              Customer
              <br />
              Relationship
            </h2>
            <h2 className="text-5xl font-bold opacity-20">
              Revoluzioned
              <br />
              Customer
              <br />
              Relationship
            </h2>
          </div>

          <p className="text-blue-500">
            Streamline Operations, Boost Efficiency, and Drive Growth
          </p>

          <div className="flex gap-4">
            <button className="bg-black border border-gray-700 hover:border-gray-500 text-white px-6 py-2 rounded-md transition-all">
              Get Started
            </button>
            <button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-md transition-all">
              Learn More
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            Used and helping over more
          </p>

          {/* Trusted By Section */}
          <div className="mt-20 space-y-6">
            <div>
              <h3 className="text-3xl font-bold">Trusted by Many</h3>
              <h4 className="text-xl text-gray-500">Established Companies</h4>
            </div>
            
            <p className="text-gray-500 text-sm">
              20+ Businesses and Companies uses Converge
              <br />
              for theirs CRM Platform
            </p>

            {/* Company Logos */}
            <div className="flex flex-wrap gap-8 items-center mt-8">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-purple-500 rounded-md"></span>
                <span>Layers</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-green-500 rounded-md"></span>
                <span>Sisyphus</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-blue-500 rounded-md"></span>
                <span>Circooles</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-indigo-500 rounded-md"></span>
                <span>Catalog</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-violet-500 rounded-md"></span>
                <span>Quotient</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={dashboardImage} 
              alt="CRM Dashboard" 
              className="w-full h-auto"
            />
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-2xl">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

