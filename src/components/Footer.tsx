import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Linkedin, Mail, Twitter, Phone } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollUtils';

const Footer = () => {
  useEffect(() => {
    // Create particles for the animated wave effect
    const footerElement = document.getElementById('footer');
    
    if (footerElement) {
      for (let i = 0; i < 30; i++) {
        createParticle(footerElement);
      }
    }
    
    function createParticle(container: HTMLElement) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      
      // Random size between 3px and 7px
      const size = Math.random() * 4 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration between 10s and 25s
      const duration = Math.random() * 15 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      
      // Random delay to start animation
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8 relative wave-bg overflow-hidden">
      {/* Animated Wave Background */}
      <div className="wave-animation" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/2a7d60e2-7852-4c14-81b2-19c090e9f7e8.png" 
                alt="ZSEE Tech" 
                className="h-16 w-auto" 
              />
            </a>
            <p className="text-gray-400 mb-6">
              Transforming tomorrow through connected innovation. Leading provider of IoT solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-zseetech-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-zseetech-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-zseetech-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-zseetech-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#iot-connectivity" onClick={(e) => handleLinkClick(e, 'iot-connectivity')} className="text-gray-400 hover:text-white transition-colors">IoT Connectivity</a></li>
              <li><a href="#remote-monitoring" onClick={(e) => handleLinkClick(e, 'remote-monitoring')} className="text-gray-400 hover:text-white transition-colors">Remote Monitoring</a></li>
              <li><a href="#custom-iot" onClick={(e) => handleLinkClick(e, 'custom-iot')} className="text-gray-400 hover:text-white transition-colors">Custom IoT Development</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray-400 hover:text-white transition-colors">Data Management</a></li>
              <li><a href="#solutions" onClick={(e) => handleLinkClick(e, 'solutions')} className="text-gray-400 hover:text-white transition-colors">Platform Solutions</a></li>
              <li><a href="#printing-3d" onClick={(e) => handleLinkClick(e, 'printing-3d')} className="text-gray-400 hover:text-white transition-colors">3D Printing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on IoT innovation and industry insights.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-zseetech-teal-dark hover:bg-zseetech-blue-dark text-white">
                Subscribe
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">Email: <a href="mailto:souravshee@zsee.org" className="hover:text-white">souravshee@zsee.org</a></p>
              <p className="text-gray-400 text-sm">Phone: <a href="tel:+917099041030" className="hover:text-white">+91 7099041030</a></p>
              <p className="text-gray-400 text-sm">WhatsApp: <a href="https://wa.me/918669027592" className="hover:text-white">+91 8669027592</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              <p>© 2025 ZSEE SMART SOLUTIONS INDIA PVT LTD. All rights reserved.</p>
              <p>GST: 32AABCZ1684M1Z0</p>
              <p>North East Office: 03rd Floor. The Institution Of Engineers Building, Panbazar, Guwahati.781001, Assam, INDIA</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
