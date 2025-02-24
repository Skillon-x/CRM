import React, { useEffect, useState, useCallback } from 'react';

const Home = ({ children }) => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  const generateStars = useCallback(() => {
    return Array.from({ length: 300 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 2,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.03 + 0.02,
      twinkle: Math.random()
    }));
  }, []);

  const generateShootingStar = useCallback(() => ({
    id: Math.random(),
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    length: Math.random() * 150 + 100,
    angle: Math.random() * 45 + 20,
    duration: Math.random() * 1000 + 1000,
    startTime: Date.now()
  }), []);

  useEffect(() => {
    setStars(generateStars());

    const animateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => {
          let newZ = star.z + star.speed;
          if (newZ >= 2) {
            return {
              ...star,
              x: Math.random() * 100,
              y: Math.random() * 100,
              z: 0,
              twinkle: Math.random()
            };
          }

          return {
            ...star,
            z: newZ,
            opacity: 0.6 + star.twinkle * Math.sin(Date.now() * 0.01)
          };
        })
      );
    };

    const animateShootingStars = () => {
      const currentTime = Date.now();
      setShootingStars(prevShootingStars => {
        const activeShootingStars = prevShootingStars.filter(
          star => currentTime - star.startTime < star.duration
        );

        if (Math.random() < 0.02 && activeShootingStars.length < 3) {
          activeShootingStars.push(generateShootingStar());
        }

        return activeShootingStars;
      });
    };

    let animationFrame;
    const animate = () => {
      animateStars();
      animateShootingStars();
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [generateStars, generateShootingStar]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020024] to-black" />

      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: `scale(${1 + star.z}) translateZ(${star.z}px)`,
            transition: 'opacity 0.2s ease-in-out'
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map(shootingStar => {
        const progress = (Date.now() - shootingStar.startTime) / shootingStar.duration;
        const opacity = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

        return (
          <div
            key={shootingStar.id}
            className="absolute"
            style={{
              left: `${shootingStar.startX}%`,
              top: `${shootingStar.startY}%`,
              width: `${shootingStar.length}px`,
              height: '2px',
              opacity,
              background: `linear-gradient(${shootingStar.angle}deg, white, transparent)`,
              transform: `rotate(${shootingStar.angle}deg)`,
              boxShadow: `0 0 4px white, 0 0 8px rgba(255, 255, 255, 0.7)`,
              transformOrigin: '0 0'
            }}
          />
        );
      })}

      <div className="relative z-10 w-full bg-gradient-to-b from-transparent via-black/50 to-black/90">
        {children}
      </div>
    </div>
  );
};

export default Home;
