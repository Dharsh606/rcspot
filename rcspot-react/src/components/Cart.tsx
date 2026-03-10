import React from 'react';
import { useCart } from '../contexts/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end" onClick={onClose}>
      <div 
        className="bg-gradient-to-b from-rc-light to-rc-darker border-2 border-rc-red rounded-xl p-6 w-80 max-h-[600px] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-rc-red text-xl font-bold">Your Cart</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {state.items.length === 0 ? (
          <p className="text-gray-400 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={item.id} className="bg-white/5 rounded-lg p-3 border-l-3 border-rc-red">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                      <p className="text-rc-red font-bold">₹{item.price}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="bg-gray-700 text-white w-6 h-6 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-gray-700 text-white w-6 h-6 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                    <span className="text-rc-red font-bold ml-auto">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-gray-600 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white text-lg font-semibold">Total:</span>
                <span className="text-rc-red text-2xl font-bold">₹{state.total}</span>
              </div>
              
              <div className="space-y-2">
                <button 
                  onClick={onCheckout}
                  className="w-full bg-gradient-to-r from-rc-red to-red-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:from-red-500 hover:to-rc-red hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Proceed to Pay
                </button>
                
                <button 
                  onClick={clearCart}
                  className="w-full bg-gray-700 text-white py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-600"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
