import React from 'react';
import image1 from "../assets/images/dashboard.png"
export const HowItWorks = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              How it works
            </h2>
            <p className="text-2xl text-gray-300">
              Transforming Relationships Empowering Growth
            </p>
          </div>
  
          <div className="relative max-w-5xl mx-auto">
            {/* Dashboard Image with Shadow Effects */}
            <div className="relative">
            <img 
  src={image1} 
  alt="CRM Dashboard Interface" 
  className="max-w-lg w-3/4 mx-auto rounded-2xl relative z-10"
/>
              
              {/* Multiple layered shadows for depth */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-2xl z-0" />
              <div className="absolute -inset-4 bg-blue-600/10 rounded-2xl blur-3xl -z-10" />
              
              {/* Bottom glow */}
              <div className="absolute -bottom-10 -inset-x-20 h-20 bg-gradient-to-t from-blue-500/10 via-blue-500/5 to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </section>
    );
  };