import React from 'react';
import image1 from "../assets/images/dashboard.png"
export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content section */}
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revoluzioned Customer Relationship
            </h1>
            <p className="text-blue-200 text-xl mb-8">
              Streamline Operations, Boost Efficiency, and Drive Growth
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
                Learn More
              </button>
            </div>
            <p className="text-gray-400 mt-6 text-sm">Used and helping over more</p>

            {/* Trusted by section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-white mb-2">
                Trusted by Many
              </h2>
              <h3 className="text-2xl text-gray-300 mb-4">
                Established Companies
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                20+ Businesses and Companies uses Converge for theirs CRM Platform
              </p>
              
              {/* Company logos */}
              <div className="flex flex-wrap gap-8 items-center">
                <img src="/api/placeholder/100/40" alt="Layers" className="h-8" />
                <img src="/api/placeholder/100/40" alt="Sisyphus" className="h-8" />
                <img src="/api/placeholder/100/40" alt="Circooles" className="h-8" />
                <img src="/api/placeholder/100/40" alt="Catalog" className="h-8" />
                <img src="/api/placeholder/100/40" alt="Quotient" className="h-8" />
              </div>
            </div>
          </div>

          {/* Right dashboard image section */}
          <div className="relative">
            <div className="relative">
              <img 
                src={image1}
                alt="Dashboard" 
                className="rounded-lg"
              />
              {/* Gradient glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10" />
              <div className="absolute -inset-4 bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-2xl -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};