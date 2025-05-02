
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  const { toast } = useToast();

  const addToCart = (productName: string) => {
    toast({
      title: "Added to cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Our Products</h1>
        <p className="text-white/70 text-center max-w-3xl mx-auto mb-12">
          Discover our range of innovative health solutions designed to improve your wellbeing 
          while providing an intuitive and calming experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 gradient-border hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-brand-blue/30 to-brand-orange/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
                  {product.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/70 mb-4">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">${product.price}</span>
                  <Button 
                    onClick={() => addToCart(product.name)}
                    className="bg-white text-brand-blue hover:bg-white/90 transition-all"
                  >
                    <ShoppingCart className="mr-2" size={16} />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6">
            All products come with a 30-day money-back guarantee. 
            Free shipping on orders over $50.
          </p>
          
          <Button className="bg-white text-brand-blue hover:bg-white/90 transition-all glow">
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

// Product data
const products = [
  {
    id: 1,
    name: "Wellness Tracker Pro",
    description: "Our flagship health monitoring device with advanced sensors and an intuitive interface.",
    price: 149.99,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  },
  {
    id: 2,
    name: "Calm Mind App",
    description: "A meditation and mindfulness app designed to reduce stress and improve focus.",
    price: 4.99,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  },
  {
    id: 3,
    name: "Health Dashboard",
    description: "A comprehensive wellness dashboard that integrates with all your health apps and devices.",
    price: 29.99,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  },
  {
    id: 4,
    name: "Sleep Enhancer",
    description: "A device designed to monitor and improve your sleep patterns for better rest.",
    price: 89.99,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  },
  {
    id: 5,
    name: "Nutrition Analyzer",
    description: "An app that helps you track and optimize your nutrition for better health.",
    price: 3.99,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
    </svg>
  },
  {
    id: 6,
    name: "Fitness Companion",
    description: "A personal trainer in your pocket, designed to help you achieve your fitness goals.",
    price: 59.99,
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  }
];

export default Shop;
