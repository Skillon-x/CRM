import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
// Previous imports remain the same...

const GalaxyBackground = () => {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Galaxy gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#124C90]/40 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0075FF]/20 via-transparent to-transparent" />
        </div>
        
        {/* Stars with reduced size */}
        <div className="stars-container absolute inset-0">
          {[...Array(150)].map((_, i) => {
            const randomLeft = Math.random() * 100;
            const randomTop = Math.random() * 100;
            const randomSize = 0.5 + Math.random() * 1; // Reduced size range
            const randomDuration = 2 + Math.random() * 3;
            const randomDelay = Math.random() * 5;
            const isShootingStar = i < 3; // Reduced number of shooting stars
            
            if (isShootingStar) {
              return (
                <div
                  key={`shooting-${i}`}
                  className="shooting-star"
                  style={{
                    left: `${randomLeft}%`,
                    top: `${randomTop}%`,
                    width: '2px', // Smaller shooting stars
                    height: '2px',
                    background: 'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                    animationDelay: `${randomDelay}s`,
                    position: 'absolute',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px 1px rgba(255, 255, 255, 0.6)', // Reduced glow
                    opacity: 0
                  }}
                />
              );
            }
  
            return (
              <div
                key={`star-${i}`}
                className="star"
                style={{
                  left: `${randomLeft}%`,
                  top: `${randomTop}%`,
                  width: `${randomSize}px`,
                  height: `${randomSize}px`,
                  position: 'absolute',
                  background: 'white',
                  borderRadius: '50%',
                  animationDelay: `${randomDelay}s`,
                  animationDuration: `${randomDuration}s`,
                  boxShadow: '0 0 2px 1px rgba(255, 255, 255, 0.4)' // Reduced glow
                }}
              />
            );
          })}
        </div>
        
        {/* Enhanced nebula effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#0075FF]/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-[#124C90]/10 blur-[150px] rounded-full animate-pulse" 
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>
    );
  };
  
  // Rest of the Login component remains the same...

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 text-white overflow-hidden">
      <GalaxyBackground />
      
      <div className="w-full max-w-md p-8 rounded-2xl bg-black/40 backdrop-blur-md shadow-xl border border-white/10 relative z-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-black/50 border border-[#0075FF]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0075FF] focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Password field */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <button 
                type="button"
                onClick={() => {/* Handle forgot password */}} 
                className="text-sm text-[#0075FF] hover:text-[#124C90] transition-colors duration-200"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-3 bg-black/50 border border-[#0075FF]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0075FF] focus:border-transparent"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-gray-600 text-[#0075FF] focus:ring-[#0075FF] bg-black/50"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
              Remember me
            </label>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#0075FF] hover:bg-[#124C90] rounded-md transition-colors duration-200 font-medium mt-6"
          >
            Log in
          </button>

          {/* Google login button */}
          <button
            type="button"
            className="w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200 font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <button 
            onClick={() => {/* Handle signup navigation */}}
            className="text-[#0075FF] hover:text-[#124C90] transition-colors duration-200"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

// Add enhanced animations to your global CSS
const style = document.createElement('style');
style.textContent = `
  .star {
    animation: twinkle-new 3s infinite;
  }

  @keyframes twinkle-new {
    0% { opacity: 0.1; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
    100% { opacity: 0.1; transform: scale(0.8); }
  }
  
  .shooting-star {
    animation: shooting 3s linear infinite;
  }
  
  @keyframes shooting {
    0% {
      transform: translateX(0) translateY(0) rotate(-45deg) scale(1);
      opacity: 1;
    }
    
    20% {
      opacity: 1;
    }
    
    60% {
      opacity: 0.5;
    }
    
    100% {
      transform: translateX(1000px) translateY(1000px) rotate(-45deg) scale(0.1);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

export default Login;