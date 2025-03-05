import React from 'react';

export const Landing = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wider">
  Smart CRM, <span className="text-blue-400">Stronger Connection</span>
</h1>

          
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            EFFORTLESSLY MANAGE RELATIONSHIPS, AUTOMATE TASKS, AND BOOST SALES—ALL IN ONE SMART CRM. STAY ORGANIZED AND BUILD STRONGER CONNECTIONS WITH EASE.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};