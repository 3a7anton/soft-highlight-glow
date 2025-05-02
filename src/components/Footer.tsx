
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-8 backdrop-blur-md bg-black/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Soft Highlight</h4>
            <p className="text-white/70 mb-4">
              Researching innovative ways to improve health through technology and user experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white/70 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Connect With Us</h4>
            <p className="text-white/70 mb-2">
              Email: contact@softhighlight.com
            </p>
            <p className="text-white/70">
              Phone: +1 (555) 123-4567
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {currentYear} Soft Highlight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
