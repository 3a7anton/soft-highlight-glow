
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 bg-black/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            <span className="gradient-text">Soft Highlight</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:opacity-80 transition-opacity">Home</Link>
            <Link to="/shop" className="text-white hover:opacity-80 transition-opacity">Shop</Link>
            <Link to="/contact" className="text-white hover:opacity-80 transition-opacity">Contact</Link>
            <Link to="/terms" className="text-white hover:opacity-80 transition-opacity">Terms</Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-white hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/terms" 
              className="text-white hover:opacity-80 transition-opacity py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
