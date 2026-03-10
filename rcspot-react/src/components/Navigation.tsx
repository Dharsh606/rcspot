import React from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'products', label: 'Products' },
    { id: 'faq', label: 'FAQ' },
    { id: 'help', label: 'Help' },
    { id: 'comments', label: 'Comments' },
    { id: 'payment', label: 'Payment' },
  ];

  return (
    <nav className="flex justify-center gap-10 bg-gradient-to-b from-gray-900 to-gray-800 py-5 border-b border-gray-600 shadow-md">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSectionChange(item.id)}
          className={`text-lg font-semibold transition-all duration-300 px-4 py-2 rounded-md relative ${
            activeSection === item.id
              ? 'text-white bg-rc-red/10'
              : 'text-rc-red hover:text-white hover:bg-rc-red/10'
          }`}
        >
          {item.label}
          <span 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-rc-red transition-all duration-300"
            style={{ 
              width: activeSection === item.id ? '80%' : '0%',
            }}
          />
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
