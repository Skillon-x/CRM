// Home.jsx
import React, { useEffect, useState } from 'react';

const Home = ({ children }) => {  // Add children prop
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Your existing stars generation and animation code remains the same
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 300; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          z: Math.random() * 10,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.05 + 0.02
        });
      }
      return newStars;
    };

    setStars(generateStars());

    const animateStars = () => {
      setStars(prevStars => 
        prevStars.map(star => {
          let newZ = star.z + star.speed;
          
          if (newZ > 10) {
            return {
              ...star,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              z: 0
            };
          }
          
          const perspective = 1 + newZ * 0.3;
          
          return {
            ...star,
            z: newZ,
            screenX: 50 + (star.x * perspective),
            screenY: 50 + (star.y * perspective),
            screenSize: star.size * perspective
          };
        })
      );
    };

    const animationInterval = setInterval(animateStars, 16);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#020924]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#041048] via-[#020924] to-[#020924] opacity-80"></div>
      
      {/* Subtle blue glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0046ff] via-transparent to-transparent opacity-5"></div>

      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.screenX}%`,
            top: `${star.screenY}%`,
            width: `${star.screenSize}px`,
            height: `${star.screenSize}px`,
            opacity: Math.min(1, star.z * 0.5),
            transform: `translate(-50%, -50%)`,
            transition: 'all 0.016s linear',
            boxShadow: `0 0 ${star.screenSize * 2}px rgba(255, 255, 255, 0.8)`
          }}
        />
      ))}

      {/* Content container */}
      <div className="relative z-10 w-full">
        {children}  {/* This is where other components will be rendered */}
      </div>
    </div>
  );
};

export default Home;