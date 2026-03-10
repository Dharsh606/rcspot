import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
    ));
  };

  return (
    <div className="min-h-screen py-16 px-5 max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-rc-red mb-4 relative pb-4">
          <Star className="inline-block mr-3" size={40} />
          What Our Customers Say
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-rc-red to-transparent rounded w-25" />
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Real reviews from satisfied customers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gradient-to-b from-rc-light to-rc-card border-2 border-gray-600 rounded-2xl p-8 relative transition-all duration-400 hover:translate-y-[-8px] hover:border-rc-red hover:shadow-xl hover:shadow-rc-red/30"
          >
            <div className="absolute top-[-10px] left-5 text-6xl text-rc-red opacity-30 font-serif">
              "
            </div>
            
            <div className="mb-4">
              {renderStars(testimonial.rating)}
            </div>
            
            <p className="text-white text-lg leading-relaxed mb-6 italic font-style-italic">
              {testimonial.text}
            </p>
            
            <p className="text-rc-red font-semibold text-lg text-right">
              – {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
