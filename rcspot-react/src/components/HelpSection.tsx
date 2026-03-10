import React from 'react';
import { contactInfo } from '../data/contact';
import { Headset, Info } from 'lucide-react';

const HelpSection: React.FC = () => {
  const handleContactClick = (contact: typeof contactInfo[0]) => {
    if (contact.type === 'email') {
      window.location.href = `mailto:${contact.value}`;
    } else if (contact.type === 'phone') {
      window.location.href = `tel:${contact.value}`;
    } else if (contact.type === 'chat') {
      alert('Live chat coming soon!');
    }
  };

  return (
    <div className="min-h-screen py-16 px-5 max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-rc-red mb-4 relative pb-4">
          <Headset className="inline-block mr-3" size={40} />
          Need Help? We're Here For You
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-rc-red to-transparent rounded w-25" />
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Our dedicated support team is available to assist you with any questions or concerns
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((contact) => (
          <div
            key={contact.id}
            className="bg-gradient-to-b from-rc-light to-rc-card border-2 border-gray-600 rounded-2xl p-8 text-center transition-all duration-400 hover:translate-y-[-8px] hover:border-rc-red hover:shadow-xl hover:shadow-rc-red/40 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rc-red/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            
            <i className={`${contact.icon} text-rc-red text-5xl mb-4`} />
            
            <h4 className="text-white text-xl font-semibold mb-2">{contact.title}</h4>
            
            <p className="text-gray-400 mb-3">{contact.description}</p>
            
            <button
              onClick={() => handleContactClick(contact)}
              className="text-rc-red hover:text-white hover:bg-rc-red/10 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              {contact.type === 'email' ? contact.value : 
               contact.type === 'phone' ? contact.value : 
               'Start Chat'}
            </button>
            
            {contact.availability && (
              <p className="text-gray-500 text-sm mt-3">{contact.availability}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-b from-rc-light to-rc-card border border-gray-600 rounded-2xl p-8 text-center">
        <h4 className="text-rc-red text-xl font-semibold mb-4">
          <Info className="inline-block mr-2" />
          Support Information
        </h4>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          For product inquiries, order tracking, warranty claims, or technical support, our team is ready to help. 
          We pride ourselves on providing exceptional customer service and ensuring your complete satisfaction with every purchase.
        </p>
      </div>
    </div>
  );
};

export default HelpSection;
