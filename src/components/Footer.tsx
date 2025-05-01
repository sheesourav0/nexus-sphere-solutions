
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';

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
  
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8 relative wave-bg overflow-hidden">
      {/* Animated Wave Background */}
      <div className="wave-animation" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center mb-6">
              <img src="/zsee-logo.svg" alt="ZSEE Tech" className="h-12 filter brightness-0 invert" />
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
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IoT Connectivity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Remote Monitoring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom IoT Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Platform Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">3D Printing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
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
              <p className="text-gray-400 text-sm">Service Tel: +852-91464856</p>
              <p className="text-gray-400 text-sm">Service Email: info@zseetech.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 ZSEE Tech Solutions. All rights reserved.
            </p>
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
