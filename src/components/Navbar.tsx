
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-technexus-blue to-technexus-teal bg-clip-text text-transparent">TechNexus</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-technexus-blue transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-technexus-blue transition-colors">Services</a>
            <a href="#solutions" className="text-gray-700 hover:text-technexus-blue transition-colors">Solutions</a>
            <a href="#industries" className="text-gray-700 hover:text-technexus-blue transition-colors">Industries</a>
            <a href="#about" className="text-gray-700 hover:text-technexus-blue transition-colors">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-technexus-blue transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-technexus-blue to-technexus-teal text-white">Contact Us</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-muted rounded-md" onClick={toggleMenu}>Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-muted rounded-md" onClick={toggleMenu}>Services</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:bg-muted rounded-md" onClick={toggleMenu}>Solutions</a>
            <a href="#industries" className="block px-3 py-2 text-gray-700 hover:bg-muted rounded-md" onClick={toggleMenu}>Industries</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-muted rounded-md" onClick={toggleMenu}>About Us</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-muted rounded-md" onClick={toggleMenu}>Contact</a>
            <Button className="w-full bg-gradient-to-r from-technexus-blue to-technexus-teal text-white">Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
