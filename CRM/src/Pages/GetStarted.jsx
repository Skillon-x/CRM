import React from 'react';

const GetStarted = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="container relative mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-200 mb-8 tracking-wide">
            Start Amplifying Your Growth Today
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Powerful, intuitive, and scalable CRM software designed to help you manage customers, streamline operations, and drive revenue—all in one place.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-md border border-gray-800 backdrop-blur-sm hover:bg-gray-900 transition-colors duration-300">
              Get Started
            </button>
            <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute bottom-8 left-8">
        <div className="w-8 h-8 bg-blue-500 rounded-sm transform rotate-45" />
      </div>
    </section>
  );
};

export default GetStarted;
