import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Car } from 'lucide-react';

const ProductsSection: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-5 max-w-7xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-rc-red mb-8 relative pb-4">
          <Car className="inline-block mr-3" size={40} />
          Our Premium RC Cars & Trucks
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-rc-red to-transparent rounded w-25" />
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Discover our collection of high-performance remote control vehicles
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
