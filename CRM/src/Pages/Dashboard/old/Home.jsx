import React, { useEffect, useState, useCallback, Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Environment } from '@react-three/drei';
import galaxyModel from '../assets/3dmodel/galaxy.glb';

// Galaxy Model Component
const GalaxyModel = () => {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, galaxyModel);
  
  // Add a subtle rotation animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
    }
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={[2, 2, 2]} 
      position={[0, 0, 0]} 
    />
  );
};

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

      {/* 3D Galaxy Model */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <GalaxyModel />
            <Environment preset="night" />
          </Suspense>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Canvas>
        {/* Credit for the 3D model */}
        <div className="absolute bottom-4 right-4 text-xs text-white/70 bg-black/30 p-2 rounded backdrop-blur-sm">
          Galaxy by 991519166, CC Attribution
        </div>
      </div>

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
            transition: 'opacity 0.2s ease-in-out',
            zIndex: 5
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
            className="absolute z-5"
            style={{
              left: `${shootingStar.startX}%`,
              top: `${shootingStar.startY}%`,
              width: `${shootingStar.length}px`,
              height: '2px',
              opacity,
              background: `linear-gradient(${shootingStar.angle}deg, white, transparent)`,
              transform: `rotate(${shootingStar.angle}deg)`,
              boxShadow: `0 0 4px white, 0 0 8px rgba(255, 255, 255, 0.7)`,
              transformOrigin: '0 0',
              zIndex: 5
            }}
          />
        );
      })}

      <div className="relative z-20 w-full bg-gradient-to-b from-transparent via-black/30 to-black/80">
        {children}
      </div>
    </div>
  );
};

export default Home;