import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-[40px] w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Contact Us
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors w-fit">
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;