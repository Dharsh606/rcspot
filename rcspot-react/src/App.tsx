import React, { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductsSection from './components/ProductsSection';
import FAQSection from './components/FAQSection';
import HelpSection from './components/HelpSection';
import TestimonialsSection from './components/TestimonialsSection';
import PaymentSection from './components/PaymentSection';
import Cart from './components/Cart';
import PromoBanner from './components/PromoBanner';
import VideoIntro from './components/VideoIntro';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('products');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'products':
        return <ProductsSection />;
      case 'faq':
        return <FAQSection />;
      case 'help':
        return <HelpSection />;
      case 'comments':
        return <TestimonialsSection />;
      case 'payment':
        return <PaymentSection />;
      default:
        return <ProductsSection />;
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setActiveSection('payment');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white">
        <VideoIntro />
        
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        <main>
          {renderSection()}
        </main>
        
        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />
        
        <PromoBanner />
        
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-500 py-12 text-center mt-16 border-t-2 border-rc-red">
          <p className="mb-2">© 2025 RC Spot. All rights reserved.</p>
          <p className="text-sm">Premium Remote Control Cars & Trucks</p>
          <div className="flex justify-center gap-8 mt-6">
            <img src="/images/gpay.png" alt="Google Pay" className="h-8 brightness-200 contrast-200 grayscale" />
            <img src="/images/phonepe.png" alt="PhonePe" className="h-8 brightness-200 contrast-200 grayscale" />
            <img src="/images/paypal.png" alt="PayPal" className="h-8 brightness-200 contrast-200 grayscale" />
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default App;
