
import { Box, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/utils/scrollUtils';

const ThreeDPrinting = () => {
  const handleButtonClick = () => {
    scrollToSection('get-in-touch');
  };

  return (
    <section id="printing-3d" className="py-16 md:py-24 bg-service-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal p-4 rounded-full">
              <Package className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="section-title">Advanced 3D Printing Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming digital designs into physical reality with precision manufacturing and high-quality materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <img 
              src="https://imageio.forbes.com/specials-images/imageserve/5f1a62d942a6387efb759310/What-Can-3D-Printing-Be-Used-For--Here-Are-10-Amazing-Examples/960x0.jpg?format=jpg&width=1440" 
              alt="3D Printing Services" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zseetech-teal-dark mb-4">Hardware Prototyping</h3>
                <p className="text-gray-600 mb-4">
                  Rapid iteration of hardware designs to validate concepts and refine functionality before mass production.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                    <span className="text-gray-700">Form and fit testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                    <span className="text-gray-700">Functional validation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                    <span className="text-gray-700">Design iteration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-zseetech-teal to-zseetech-teal-dark"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zseetech-teal-dark mb-4">Custom Enclosures</h3>
                <p className="text-gray-600 mb-4">
                  Bespoke housings designed specifically for your IoT devices, sensors, and control systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                    <span className="text-gray-700">Weather-resistant designs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                    <span className="text-gray-700">Custom mounting solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                    <span className="text-gray-700">Optimized thermal management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden md:col-span-3">
            <div className="h-2 bg-gradient-to-r from-zseetech-teal-dark to-zseetech-teal"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-zseetech-teal-dark mb-4">Production Services</h3>
              <p className="text-gray-600 mb-4">
                Small to medium batch manufacturing with consistent quality for market testing and specialized applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                  <span className="text-gray-700">Low-volume production runs</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                  <span className="text-gray-700">Bridge manufacturing</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                  <span className="text-gray-700">Custom jigs and fixtures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Box className="w-24 h-24 text-zseetech-teal mx-auto" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-zseetech-teal-dark mb-4">Material Selection Consulting</h3>
              <p className="text-gray-600 mb-6">
                Our experts help you choose the right materials for your application based on requirements for strength, temperature resistance, flexibility, and environmental conditions.
              </p>
              <Button 
                className="w-full md:w-auto bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal text-white"
                onClick={handleButtonClick}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDPrinting;
