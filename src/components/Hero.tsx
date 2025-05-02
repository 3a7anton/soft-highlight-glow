
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-[85vh] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Innovative Health Solutions for the Modern Age
          </h1>
          
          <p className="text-xl text-white/80 mb-8">
            Discover a new approach to wellness that combines cutting-edge technology with intuitive design. 
            Made for a generation that values both nostalgia and calm.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              className="bg-white text-brand-blue hover:bg-white/90 transition-all glow text-lg px-8 py-6"
            >
              <Link to="/shop">
                Explore Our Products
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-all text-lg px-8 py-6"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-main opacity-70 -z-10"></div>
      
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-[150px] bg-brand-orange opacity-30 animate-soft-glow"></div>
      
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full blur-[150px] bg-brand-blue opacity-30 animate-soft-glow" style={{ animationDelay: "1.5s" }}></div>
    </div>
  );
};

export default Hero;
