import React from 'react';

const WelcomeWidget = () => {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-blue-800 rounded-lg p-4 mb-12">
      <p className="text-gray-400">Welcome back,</p>
      <h2 className="text-white text-2xl font-bold mb-8">Tech</h2>
      <p className="text-gray-400">Glad to see you again!</p>
      <p className="text-gray-400">Ask me anything.</p>
    </div>
  );
};

export default WelcomeWidget;