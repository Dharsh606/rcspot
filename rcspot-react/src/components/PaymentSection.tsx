import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { CreditCard, User, Mail, Phone, MapPin } from 'lucide-react';

const PaymentSection: React.FC = () => {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Payment processed successfully! Invoice will be generated.');
    // Here you would typically process the payment and generate an invoice
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen py-16 px-5 max-w-4xl mx-auto animate-fade-in text-center">
        <h2 className="text-4xl font-bold text-rc-red mb-8">
          <CreditCard className="inline-block mr-3" size={40} />
          Secure Payment
        </h2>
        <p className="text-gray-400 text-lg">Your cart is empty. Add some products before proceeding to payment.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-5 max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-rc-red mb-8 relative pb-4">
          <CreditCard className="inline-block mr-3" size={40} />
          Secure Payment
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-rc-red to-transparent rounded w-25" />
        </h2>
      </div>

      <div className="bg-gradient-to-b from-rc-light to-rc-card border-2 border-gray-600 rounded-3xl p-8 shadow-2xl">
        <h3 className="text-2xl font-bold text-rc-red text-center mb-8">Payment Information</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <User size={16} />
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <Mail size={16} />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <Phone size={16} />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 1234567890"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                <MapPin size={16} />
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                placeholder="House/Flat No., Street Name"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Your city"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="Your state"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="123456"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-rc-red font-semibold text-sm uppercase tracking-wide">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-rc-dark text-white placeholder-gray-500 focus:border-rc-red focus:outline-none focus:ring-2 focus:ring-rc-red/20 transition-all"
              />
            </div>
          </div>

          <div className="border-t-2 border-gray-600 pt-6 mt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-white text-xl font-semibold">Order Total:</span>
              <span className="text-rc-red text-3xl font-bold">₹{state.total}</span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rc-red to-red-500 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:from-red-500 hover:to-rc-red hover:translate-y-[-2px] hover:shadow-lg hover:shadow-rc-red/50"
            >
              Complete Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentSection;
