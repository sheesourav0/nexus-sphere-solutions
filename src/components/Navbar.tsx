
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Dropdown menu data
  const dropdownMenus: DropdownMenuData = {
    services: [
      { label: 'IoT Connectivity', href: '#iot-connectivity' },
      { label: 'Remote Monitoring', href: '#remote-monitoring' },
      { label: 'Custom IoT Development', href: '#custom-iot' },
      { label: '3D Printing', href: '#3d-printing' },
    ],
    solutions: [
      { label: 'White-Label IoT Platform', href: '#white-label' },
      { label: 'Dynamic Dashboard Solutions', href: '#dashboards' },
      { label: 'Custom Applications', href: '#custom-apps' },
      { label: 'Report Generation', href: '#reports' },
    ],
    industries: [
      { label: 'Manufacturing', href: '#manufacturing' },
      { label: 'Healthcare', href: '#healthcare' },
      { label: 'Smart City', href: '#smart-city' },
      { label: 'Agriculture', href: '#agriculture' },
    ],
  };
  
  const handleMouseEnter = (section: string) => {
    setActiveDropdown(section);
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src="/zsee-logo.svg" alt="ZSEE Tech" className="h-10" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-zseetech-blue hover:text-zseetech-teal transition-colors">Home</a>
            
            {/* Services Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#services" className="text-zseetech-blue hover:text-zseetech-teal transition-colors flex items-center">
                Services <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                  {dropdownMenus.services.map((item) => (
                    <a 
                      key={item.href} 
                      href={item.href} 
                      className="block px-4 py-2 text-sm text-zseetech-blue hover:bg-zseetech-teal/10 hover:text-zseetech-teal"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#solutions" className="text-zseetech-blue hover:text-zseetech-teal transition-colors flex items-center">
                Solutions <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                  {dropdownMenus.solutions.map((item) => (
                    <a 
                      key={item.href} 
                      href={item.href} 
                      className="block px-4 py-2 text-sm text-zseetech-blue hover:bg-zseetech-teal/10 hover:text-zseetech-teal"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            {/* Industries Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#industries" className="text-zseetech-blue hover:text-zseetech-teal transition-colors flex items-center">
                Industries <ChevronDown size={16} className="ml-1" />
              </a>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                  {dropdownMenus.industries.map((item) => (
                    <a 
                      key={item.href} 
                      href={item.href} 
                      className="block px-4 py-2 text-sm text-zseetech-blue hover:bg-zseetech-teal/10 hover:text-zseetech-teal"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#about" className="text-zseetech-blue hover:text-zseetech-teal transition-colors">About Us</a>
            <a href="#contact" className="text-zseetech-blue hover:text-zseetech-teal transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-zseetech-teal-dark hover:bg-zseetech-blue-dark text-white">Contact Us</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-zseetech-blue"
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
            <a href="#home" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={toggleMenu}>Home</a>
            <a href="#services" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={toggleMenu}>Services</a>
            <a href="#solutions" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={toggleMenu}>Solutions</a>
            <a href="#industries" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={toggleMenu}>Industries</a>
            <a href="#about" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={toggleMenu}>About Us</a>
            <a href="#contact" className="block px-3 py-2 text-zseetech-blue hover:bg-muted rounded-md" onClick={toggleMenu}>Contact</a>
            <Button className="w-full bg-zseetech-teal-dark hover:bg-zseetech-blue-dark text-white">Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
