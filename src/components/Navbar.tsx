
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollUtils';

// Define dropdown menu types
type DropdownItem = {
  label: string;
  href: string;
};

type DropdownMenuData = {
  [key: string]: DropdownItem[];
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Handle scroll event to apply styles based on scroll position
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

  // Particle animation effect
  useEffect(() => {
    // Create particles for the animated wave effect
    const navbarElement = document.getElementById('navbar');
    
    if (navbarElement) {
      for (let i = 0; i < 15; i++) {
        createParticle(navbarElement);
      }
    }
    
    function createParticle(container: HTMLElement) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      
      // Random size between 2px and 5px (smaller than footer)
      const size = Math.random() * 3 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration between 10s and 20s
      const duration = Math.random() * 10 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      
      // Random delay to start animation
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
  }, []);
  
  // Dropdown menu data
  const dropdownMenus: DropdownMenuData = {
    services: [
      { label: 'IoT Connectivity', href: 'iot-connectivity' },
      { label: 'Remote Monitoring', href: 'remote-monitoring' },
      { label: 'Custom IoT Development', href: 'custom-iot' },
      { label: '3D Printing', href: 'printing-3d' },
    ],
    solutions: [
      { label: 'White-Label IoT Platform', href: 'white-label' },
      { label: 'Dynamic Dashboard Solutions', href: 'dashboards' },
      { label: 'Custom Applications', href: 'custom-apps' },
      { label: 'Report Generation', href: 'reports' },
    ],
    industries: [
      { label: 'Manufacturing', href: 'manufacturing' },
      { label: 'Healthcare', href: 'healthcare' },
      { label: 'Smart City', href: 'smart-city' },
      { label: 'Agriculture', href: 'agriculture' },
    ],
  };
  
  const handleMouseEnter = (section: string) => {
    setActiveDropdown(section);
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header id="navbar" className={`fixed w-full bg-gray-900 text-white backdrop-blur-md z-50 shadow-sm transition-all duration-300 wave-bg overflow-hidden ${isScrolled ? 'shadow-md' : ''} top-0 left-0 right-0`}>
      {/* Animated Wave Background - Subtle version */}
      <div className="wave-animation opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center">
              <img 
                src="/lovable-uploads/2a7d60e2-7852-4c14-81b2-19c090e9f7e8.png" 
                alt="ZSEE Tech" 
                className="h-10 md:h-12 w-auto rounded-lg" 
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-white hover:text-zseetech-teal transition-colors">Home</a>
            
            {/* Services Dropdown */}
            <div 
              className="relative group" 
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')} 
                className="text-white hover:text-zseetech-teal transition-colors flex items-center"
              >
                Services <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </a>
              <div 
                className={`absolute top-full left-0 mt-1 w-64 bg-gray-800 rounded-md shadow-lg border border-gray-700 py-2 z-50 transition-all duration-200 origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                {dropdownMenus.services.map((item) => (
                  <a 
                    key={item.href} 
                    href={`#${item.href}`}
                    onClick={(e) => handleDropdownClick(e, item.href)} 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-zseetech-teal/20 hover:text-zseetech-teal"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative group" 
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href="#solutions" 
                onClick={(e) => handleNavClick(e, 'solutions')} 
                className="text-white hover:text-zseetech-teal transition-colors flex items-center"
              >
                Solutions <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </a>
              <div 
                className={`absolute top-full left-0 mt-1 w-64 bg-gray-800 rounded-md shadow-lg border border-gray-700 py-2 z-50 transition-all duration-200 origin-top ${activeDropdown === 'solutions' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                {dropdownMenus.solutions.map((item) => (
                  <a 
                    key={item.href} 
                    href={`#${item.href}`}
                    onClick={(e) => handleDropdownClick(e, item.href)} 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-zseetech-teal/20 hover:text-zseetech-teal"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Industries Dropdown */}
            <div 
              className="relative group" 
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href="#industries" 
                onClick={(e) => handleNavClick(e, 'industries')} 
                className="text-white hover:text-zseetech-teal transition-colors flex items-center"
              >
                Industries <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </a>
              <div 
                className={`absolute top-full left-0 mt-1 w-64 bg-gray-800 rounded-md shadow-lg border border-gray-700 py-2 z-50 transition-all duration-200 origin-top ${activeDropdown === 'industries' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                {dropdownMenus.industries.map((item) => (
                  <a 
                    key={item.href} 
                    href={`#${item.href}`}
                    onClick={(e) => handleDropdownClick(e, item.href)} 
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-zseetech-teal/20 hover:text-zseetech-teal"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-white hover:text-zseetech-teal transition-colors">About Us</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-white hover:text-zseetech-teal transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button 
              className="bg-zseetech-teal-dark hover:bg-zseetech-blue-dark text-white"
              onClick={() => scrollToSection('get-in-touch')}
            >
              Contact Us
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-gray-800 shadow-md transition-all duration-300 ${isMenuOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-3">
          <a href="#home" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('home'); toggleMenu();}}>Home</a>
          
          {/* Mobile Services Menu */}
          <div className="space-y-1">
            <a href="#services" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('services'); toggleMenu();}}>Services</a>
            <div className="ml-4 pl-2 border-l-2 border-gray-600 space-y-1">
              {dropdownMenus.services.map((item) => (
                <a 
                  key={item.href} 
                  href={`#${item.href}`}
                  onClick={(e) => handleDropdownClick(e, item.href)} 
                  className="block px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Solutions Menu */}
          <div className="space-y-1">
            <a href="#solutions" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('solutions'); toggleMenu();}}>Solutions</a>
            <div className="ml-4 pl-2 border-l-2 border-gray-600 space-y-1">
              {dropdownMenus.solutions.map((item) => (
                <a 
                  key={item.href} 
                  href={`#${item.href}`}
                  onClick={(e) => handleDropdownClick(e, item.href)} 
                  className="block px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Industries Menu */}
          <div className="space-y-1">
            <a href="#industries" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('industries'); toggleMenu();}}>Industries</a>
            <div className="ml-4 pl-2 border-l-2 border-gray-600 space-y-1">
              {dropdownMenus.industries.map((item) => (
                <a 
                  key={item.href} 
                  href={`#${item.href}`}
                  onClick={(e) => handleDropdownClick(e, item.href)} 
                  className="block px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <a href="#about" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('about'); toggleMenu();}}>About Us</a>
          <a href="#contact" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('contact'); toggleMenu();}}>Contact</a>
          <Button 
            className="w-full bg-zseetech-teal-dark hover:bg-zseetech-blue-dark text-white"
            onClick={() => {scrollToSection('get-in-touch'); toggleMenu();}}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
