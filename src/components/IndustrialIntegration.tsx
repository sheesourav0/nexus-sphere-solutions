
import { Button } from '@/components/ui/button';
import { Server, FileBarChart, Database, Settings } from 'lucide-react';

const IntegrationCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-zseetech-teal to-zseetech-teal-light p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-zseetech-teal-dark">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
    </div>
  );
};

const IndustrialIntegration = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal p-4 rounded-full">
              <Database className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="section-title">Industrial System Integration</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect and harmonize your industrial control systems with our specialized integration solutions for SCADA, DCS, and PLC environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://cdn.adlinktech.com/webupd/en/upload/1200x630_23103016205408288.jpg" 
              alt="Industrial System Integration" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal"></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-zseetech-teal-dark mb-4">SCADA/DCS Integration</h3>
              <p className="text-gray-600 mb-6">
                Seamlessly connect your existing Supervisory Control and Data Acquisition (SCADA) or Distributed Control Systems (DCS) with modern IoT platforms for enhanced visibility and control.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                  <span className="text-gray-700">OPC UA/DA server and client implementations</span>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                  <span className="text-gray-700">Legacy protocol converters (Modbus, DNP3, IEC)</span>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                  <span className="text-gray-700">Real-time data synchronization</span>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                  <span className="text-gray-700">Historical data migration and archiving</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full md:w-auto bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal text-white">
                  Learn About SCADA Integration
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-16">
          <div className="h-2 bg-gradient-to-r from-zseetech-teal to-zseetech-teal-dark"></div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-zseetech-teal-dark mb-4">PLC Connectivity Solutions</h3>
            <p className="text-gray-600 mb-6">
              Connect your Programmable Logic Controllers to our IoT ecosystem with native drivers and robust communication protocols for reliable industrial automation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                <span className="text-gray-700">Native drivers for Siemens, Allen Bradley, Mitsubishi, and more</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                <span className="text-gray-700">Ethernet/IP, Profinet, and EtherCAT support</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                <span className="text-gray-700">Bidirectional command and control capabilities</span>
              </div>
              <div className="flex items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
                <span className="text-gray-700">Edge-based logic processing for critical operations</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="w-full md:w-auto bg-gradient-to-r from-zseetech-teal to-zseetech-teal-dark text-white">
                Explore PLC Connectivity
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-zseetech-teal-dark mb-4">Protocol Support</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our integration solutions support a comprehensive range of industrial communication protocols.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <IntegrationCard 
            icon={<Server className="w-6 h-6 text-white" />}
            title="Fieldbus Protocols"
            description="Modbus RTU/TCP, Profibus, DeviceNet, Foundation Fieldbus, and CANopen for field device connectivity." 
          />
          <IntegrationCard 
            icon={<Settings className="w-6 h-6 text-white" />}
            title="Industrial Ethernet"
            description="EtherNet/IP, Profinet, EtherCAT, and Powerlink for high-speed network communications." 
          />
          <IntegrationCard 
            icon={<Database className="w-6 h-6 text-white" />}
            title="Process Control"
            description="OPC UA/DA, MQTT, AMQP, and DDS for secure, efficient data exchange in process industries." 
          />
          <IntegrationCard 
            icon={<Server className="w-6 h-6 text-white" />}
            title="Legacy Systems"
            description="Serial protocols, proprietary interfaces, and custom drivers for older equipment integration." 
          />
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-zseetech-teal text-zseetech-teal hover:bg-zseetech-teal/10">
            Download Protocol Compatibility Guide
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustrialIntegration;
