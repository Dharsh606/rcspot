import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="min-h-screen py-16 px-5 max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-rc-red mb-8 relative pb-4">
          <HelpCircle className="inline-block mr-3" size={40} />
          Frequently Asked Questions
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-rc-red to-transparent rounded w-25" />
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => (
          <div 
            key={item.id}
            className={`bg-gradient-to-b from-rc-light to-rc-card border rounded-xl overflow-hidden transition-all duration-300 ${
              activeItem === item.id ? 'border-rc-red' : 'border-gray-600'
            }`}
          >
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full p-6 flex justify-between items-center bg-rc-red/5 hover:bg-rc-red/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <i className={`${item.icon} text-rc-red text-xl`} />
                <h4 className="text-white text-lg font-semibold text-left">
                  {item.question}
                </h4>
              </div>
              <ChevronDown 
                className={`text-rc-red transition-transform duration-300 ${
                  activeItem === item.id ? 'rotate-180' : ''
                }`}
                size={24}
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                activeItem === item.id ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-6 pt-0">
                <p className="text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
