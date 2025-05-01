
import { Button } from '@/components/ui/button';
import { Layout, Smartphone, Code, FileText } from 'lucide-react';

const CustomApps = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Custom Application Development</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From web applications to mobile solutions, we develop custom software
            tailored to your specific business requirements and IoT ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-technexus-blue to-technexus-purple"></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-technexus-blue-dark mb-6">Bespoke Software Solutions</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <Layout className="w-6 h-6 text-technexus-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Web Applications</h4>
                    <p className="text-sm text-gray-600">Progressive web apps optimized for IoT data presentation</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-technexus-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Mobile Apps</h4>
                    <p className="text-sm text-gray-600">Cross-platform solutions for iOS and Android with push notifications</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <Code className="w-6 h-6 text-technexus-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Custom Dashboards</h4>
                    <p className="text-sm text-gray-600">Domain-specific visualizations for specialized industries</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <FileText className="w-6 h-6 text-technexus-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Digital Twins</h4>
                    <p className="text-sm text-gray-600">Virtual representations of physical assets for simulation</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-technexus-blue to-technexus-purple text-white">
                Explore Custom Development
              </Button>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-technexus-teal to-technexus-blue"></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-technexus-blue-dark mb-6">3D Printing Services</h3>
              
              <p className="text-gray-600 mb-6">
                From concept to functional prototype, our 3D printing services help bring your ideas to life
                with precision and quality. Perfect for creating custom enclosures, functional prototypes,
                and small-batch production runs.
              </p>
              
              <div className="mb-8">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-technexus-blue mr-2"></div>
                    <span className="text-gray-700">Functional prototypes for form, fit, and function testing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-technexus-blue mr-2"></div>
                    <span className="text-gray-700">Custom enclosure development for electronic components</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-technexus-blue mr-2"></div>
                    <span className="text-gray-700">Small-batch production for market testing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-technexus-blue mr-2"></div>
                    <span className="text-gray-700">Material selection consulting for specific applications</span>
                  </li>
                </ul>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-technexus-teal to-technexus-blue text-white">
                Request 3D Printing Services
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-technexus-blue-dark mb-4">
            Corporate Project Management Software
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our enterprise-grade project management solutions help organizations 
            streamline workflows, optimize resource allocation, and ensure timely 
            delivery of complex technology initiatives.
          </p>
          <Button className="bg-gradient-to-r from-technexus-blue to-technexus-teal text-white px-8">
            Learn More About Enterprise Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomApps;
