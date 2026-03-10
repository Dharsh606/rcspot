import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Auto-hide after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-1/2 right-0 transform -translate-y-1/2 w-72 bg-gradient-to-r from-rc-red via-red-500 to-red-400 text-white p-6 rounded-l-2xl shadow-2xl text-center font-semibold text-base transition-all duration-500 cursor-pointer z-40 hover:translate-x-[-5px] hover:shadow-3xl ${
        isVisible ? 'animate-slide-in-right' : 'animate-slide-out-right'
      }`}
    >
      <button 
        onClick={handleClose}
        className="absolute top-2 right-2 bg-white/20 border-none text-white w-6 h-6 rounded-full cursor-pointer text-sm flex items-center justify-center transition-all hover:bg-white/30"
        aria-label="Close"
      >
        <X size={14} />
      </button>
      
      <p className="mb-0">
        🎉 Get 20% Off on all RC Cars this Summer! Limited Time Offer! 🎉
      </p>
    </div>
  );
};

export default PromoBanner;
