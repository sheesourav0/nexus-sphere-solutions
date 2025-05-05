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
    <header className={`fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center">
              <img 
                src="/lovable-uploads/430c16c1-f6cd-4faf-81ca-044b293bacd9.png" 
                alt="ZSEE Tech" 
                className="h-10 md:h-12 w-auto" 
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-zseetech-blue hover:text-zseetech-teal transition-colors">Home</a>
            
            {/* Services Dropdown */}
            <div 
              className="relative group" 
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')} 
                className="text-zseetech-blue hover:text-zseetech-teal transition-colors flex items-center"
              >
                Services <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </a>
              <div 
                className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50 transition-all duration-200 origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                {dropdownMenus.services.map((item) => (
                  <a 
                    key={item.href} 
                    href={`#${item.href}`}
                    onClick={(e) => handleDropdownClick(e, item.href)} 
                    className="block px-4 py-2 text-sm text-zseetech-blue hover:bg-zseetech-teal/10 hover:text-zseetech-teal"
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
                className="text-zseetech-blue hover:text-zseetech-teal transition-colors flex items-center"
              >
                Solutions <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </a>
              <div 
                className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50 transition-all duration-200 origin-top ${activeDropdown === 'solutions' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                {dropdownMenus.solutions.map((item) => (
                  <a 
                    key={item.href} 
                    href={`#${item.href}`}
                    onClick={(e) => handleDropdownClick(e, item.href)} 
                    className="block px-4 py-2 text-sm text-zseetech-blue hover:bg-zseetech-teal/10 hover:text-zseetech-teal"
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
                className="text-zseetech-blue hover:text-zseetech-teal transition-colors flex items-center"
              >
                Industries <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </a>
              <div 
                className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50 transition-all duration-200 origin-top ${activeDropdown === 'industries' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                {dropdownMenus.industries.map((item) => (
                  <a 
                    key={item.href} 
                    href={`#${item.href}`}
                    onClick={(e) => handleDropdownClick(e, item.href)} 
                    className="block px-4 py-2 text-sm text-zseetech-blue hover:bg-zseetech-teal/10 hover:text-zseetech-teal"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-zseetech-blue hover:text-zseetech-teal transition-colors">About Us</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-zseetech-blue hover:text-zseetech-teal transition-colors">Contact</a>
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
              className="text-zseetech-blue"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 py-4 space-y-3">
          <a href="#home" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('home'); toggleMenu();}}>Home</a>
          
          {/* Mobile Services Menu */}
          <div className="space-y-1">
            <a href="#services" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('services'); toggleMenu();}}>Services</a>
            <div className="ml-4 pl-2 border-l-2 border-gray-200 space-y-1">
              {dropdownMenus.services.map((item) => (
                <a 
                  key={item.href} 
                  href={`#${item.href}`}
                  onClick={(e) => handleDropdownClick(e, item.href)} 
                  className="block px-3 py-1 text-sm text-zseetech-blue hover:bg-muted rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Solutions Menu */}
          <div className="space-y-1">
            <a href="#solutions" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('solutions'); toggleMenu();}}>Solutions</a>
            <div className="ml-4 pl-2 border-l-2 border-gray-200 space-y-1">
              {dropdownMenus.solutions.map((item) => (
                <a 
                  key={item.href} 
                  href={`#${item.href}`}
                  onClick={(e) => handleDropdownClick(e, item.href)} 
                  className="block px-3 py-1 text-sm text-zseetech-blue hover:bg-muted rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Industries Menu */}
          <div className="space-y-1">
            <a href="#industries" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('industries'); toggleMenu();}}>Industries</a>
            <div className="ml-4 pl-2 border-l-2 border-gray-200 space-y-1">
              {dropdownMenus.industries.map((item) => (
                <a 
                  key={item.href} 
                  href={`#${item.href}`}
                  onClick={(e) => handleDropdownClick(e, item.href)} 
                  className="block px-3 py-1 text-sm text-zseetech-blue hover:bg-muted rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <a href="#about" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('about'); toggleMenu();}}>About Us</a>
          <a href="#contact" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={(e) => {e.preventDefault(); scrollToSection('contact'); toggleMenu();}}>Contact</a>
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
