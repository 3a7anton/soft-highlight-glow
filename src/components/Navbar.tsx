
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useGSAP } from '@/hooks/useGSAP';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const gsap = useGSAP();

  useEffect(() => {
    // Initial navbar animation
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(logoRef.current, 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out' }
    );

    gsap.fromTo(menuRef.current?.children, 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, stagger: 0.1, ease: 'power2.out' }
    );
  }, [gsap]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(mobileMenuRef.current, 
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' }
        );
        gsap.fromTo(mobileMenuRef.current.children[0].children, 
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.1 }
        );
      }
    }
  }, [isMenuOpen, gsap]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 bg-black/10 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            ref={logoRef}
            to="/" 
            className="text-white text-2xl font-bold hover:scale-105 transition-transform duration-200"
          >
            <span className="gradient-text">Soft Highlight</span>
          </Link>

          <div ref={menuRef} className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-brand-orange transition-all duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/shop" 
              className="text-white hover:text-brand-orange transition-all duration-200 relative group"
            >
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-brand-orange transition-all duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/terms" 
              className="text-white hover:text-brand-orange transition-all duration-200 relative group"
            >
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2 hover:text-brand-orange transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-brand-orange transition-all duration-200 py-2 border-l-2 border-transparent hover:border-brand-orange pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-white hover:text-brand-orange transition-all duration-200 py-2 border-l-2 border-transparent hover:border-brand-orange pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-brand-orange transition-all duration-200 py-2 border-l-2 border-transparent hover:border-brand-orange pl-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/terms" 
              className="text-white hover:text-brand-orange transition-all duration-200 py-2 border-l-2 border-transparent hover:border-brand-orange pl-4"
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
