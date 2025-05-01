import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full ${isScrolled ? 'top-0' : 'top-2 md:top-4'} z-50 px-2 md:px-4 transition-all duration-300`}>
      <div className="max-w-5xl mx-auto bg-white rounded-xl md:rounded-full py-2 px-3 md:px-5 shadow-lg nav-white">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Otrumai Foundation" className="h-6 md:h-8" />
            <span className="ml-2 text-sm md:text-base font-semibold text-gray-800">Otrumai Foundation</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <a href="#home" className="text-gray-700 text-sm font-medium hover:text-primary-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 text-sm font-medium hover:text-primary-600 transition-colors">About Us</a>
            <a href="#projects" className="text-gray-700 text-sm font-medium hover:text-primary-600 transition-colors">Events</a>
            <a href="#gallery" className="text-gray-700 text-sm font-medium hover:text-primary-600 transition-colors">Gallery</a>
            <a 
              href="#donate" 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1.5 text-sm rounded-full font-medium hover:shadow-md transition-all"
            >
              Donate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none p-1"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-2 py-3 px-4 bg-white rounded-lg shadow-lg max-w-5xl mx-auto nav-white">
          <div className="flex flex-col space-y-3">
            <a 
              href="#home" 
              className="text-primary-600 font-medium text-sm py-1.5"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-primary-600 font-medium text-sm py-1.5"
              onClick={handleLinkClick}
            >
              About Us
            </a>
            <a 
              href="#projects" 
              className="text-primary-600 font-medium text-sm py-1.5"
              onClick={handleLinkClick}
            >
              Our Events
            </a>
            <a 
              href="#gallery" 
              className="text-primary-600 font-medium text-sm py-1.5"
              onClick={handleLinkClick}
            >
              Gallery
            </a>
            <a 
              href="#donate" 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg font-medium text-center text-sm mt-2"
              onClick={handleLinkClick}
            >
              Donate
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 