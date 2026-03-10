import React from 'react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-gradient-to-b from-rc-light to-rc-card border-2 border-gray-600 p-6 rounded-2xl text-center transition-all duration-400 hover:translate-y-[-8px] hover:scale-102 hover:border-rc-red hover:shadow-2xl hover:shadow-rc-red/40 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rc-red/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
      
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-56 object-cover rounded-xl mb-4 transition-transform duration-400 group-hover:scale-105"
      />
      
      <h2 className="text-white text-xl font-semibold mb-2">{product.name}</h2>
      
      <p className="text-rc-red text-xl font-bold mb-4">₹{product.price}</p>
      
      {product.description && (
        <p className="text-gray-400 text-sm mb-4">{product.description}</p>
      )}
      
      <button 
        onClick={handleAddToCart}
        className="w-full bg-gradient-to-r from-rc-red to-red-500 text-white py-3.5 rounded-lg font-semibold text-base transition-all duration-300 hover:from-red-500 hover:to-rc-red hover:translate-y-[-2px] hover:shadow-lg hover:shadow-rc-red/50 active:translate-y-0"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
