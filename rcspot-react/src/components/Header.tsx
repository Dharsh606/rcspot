import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { state } = useCart();

  return (
    <header className="bg-gradient-to-b from-black to-gray-900 py-10 px-8 text-center border-b-4 border-rc-red shadow-lg">
      <a href="#products" className="inline-block mb-2">
        <img 
          src="/images/logo.png" 
          alt="RC Spot - Premium Remote Control Cars and Trucks" 
          className="max-h-20 transition-transform duration-300 hover:scale-105"
        />
      </a>
      <h1 className="text-5xl font-bold text-rc-red mt-2 mb-0 tracking-wider" 
          style={{ textShadow: '2px 2px 8px rgba(229, 9, 20, 0.3)' }}>
        RC Spot
      </h1>
      
      <button 
        onClick={onCartClick}
        className="fixed top-4 right-4 bg-gradient-to-r from-rc-red to-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl flex items-center gap-2 z-50"
      >
        <ShoppingCart size={20} />
        Cart ({state.itemCount})
      </button>
    </header>
  );
};

export default Header;
