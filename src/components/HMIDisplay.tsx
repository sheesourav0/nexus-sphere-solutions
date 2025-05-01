
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Gauge, Battery, House, Car, Server, Lightbulb, Fan, Cpu, 
  Grid3X3, Power, Monitor
} from 'lucide-react';

const TabContent = ({ 
  title, 
  description, 
  features,
  imageClass,
  icon
}: { 
  title: string, 
  description: string, 
  features: string[],
  imageClass: string,
  icon: React.ReactNode
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6 flex items-center">
          <div className="bg-gradient-to-r from-zseetech-teal to-zseetech-teal-light p-3 rounded-lg mr-4">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold text-zseetech-teal-dark">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-zseetech-teal mr-2"></div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className="w-full md:w-auto bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal text-white">
          Explore {title} Solutions
        </Button>
      </div>
      
      <div className={`relative rounded-xl overflow-hidden shadow-lg h-[400px] ${imageClass}`}>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-xs text-center">
            <h4 className="font-semibold text-zseetech-teal-dark mb-2">{title} Sample UI</h4>
            <p className="text-sm text-gray-600">Interactive demo available upon request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HMIDisplay = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal p-4 rounded-full">
              <Monitor className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zseetech-teal-dark mb-4">Custom HMI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Intuitive human-machine interfaces for every application. Our custom HMI designs prioritize user experience, 
            efficiency, and real-time monitoring across industries.
          </p>
        </div>
        
        <Tabs defaultValue="industrial" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
            <TabsTrigger 
              value="industrial"
              className="data-[state=active]:bg-zseetech-teal data-[state=active]:text-white"
            >
              <Server className="w-4 h-4 mr-2" />
              Industrial
            </TabsTrigger>
            <TabsTrigger 
              value="home"
              className="data-[state=active]:bg-zseetech-teal data-[state=active]:text-white"
            >
              <House className="w-4 h-4 mr-2" />
              Home Automation
            </TabsTrigger>
            <TabsTrigger 
              value="ev"
              className="data-[state=active]:bg-zseetech-teal data-[state=active]:text-white"
            >
              <Car className="w-4 h-4 mr-2" />
              EV Systems
            </TabsTrigger>
            <TabsTrigger 
              value="embedded"
              className="data-[state=active]:bg-zseetech-teal data-[state=active]:text-white"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Embedded Solutions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="industrial">
            <TabContent 
              title="Industrial Automation HMI"
              description="Comprehensive control interfaces for manufacturing and process control, designed for 24/7 operation in demanding environments."
              features={[
                "Touch-optimized controls for gloved operation",
                "High-contrast displays for varying lighting conditions",
                "Real-time process visualization and alarms",
                "Multi-level user authentication and permissions",
                "Customizable dashboards for different roles"
              ]}
              imageClass="bg-[url('https://images.unsplash.com/photo-1581092160607-ee22731c9c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
              icon={<Grid3X3 className="w-6 h-6 text-white" />}
            />
          </TabsContent>
          
          <TabsContent value="home">
            <TabContent 
              title="Home Automation UI"
              description="Elegant and intuitive interfaces for modern smart homes, accessible via mobile, tablet, and wall-mounted displays."
              features={[
                "Scene-based controls for lighting, climate, and entertainment",
                "Energy usage monitoring and optimization",
                "Integrated security system controls and notifications",
                "Voice assistant compatibility",
                "Family-friendly user profiles and permissions"
              ]}
              imageClass="bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
              icon={<Lightbulb className="w-6 h-6 text-white" />}
            />
          </TabsContent>
          
          <TabsContent value="ev">
            <TabContent 
              title="Electric Vehicle Systems"
              description="Advanced interfaces for EV charging infrastructure, fleet management, and vehicle diagnostics."
              features={[
                "Real-time charging status and power management",
                "Predictive maintenance alerts and diagnostics",
                "Route planning with charging station availability",
                "Energy consumption analytics and reporting",
                "Fleet management with vehicle status monitoring"
              ]}
              imageClass="bg-[url('https://images.unsplash.com/photo-1559650551-928f4578f630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
              icon={<Battery className="w-6 h-6 text-white" />}
            />
          </TabsContent>
          
          <TabsContent value="embedded">
            <TabContent 
              title="Embedded System UIs"
              description="Resource-efficient interfaces for embedded devices with limited display capabilities and processing power."
              features={[
                "Optimized for low-power displays and microcontrollers",
                "Field-updatable firmware and interface elements",
                "Offline operation with data synchronization",
                "Simplified controls for specialized devices",
                "Connectivity status monitoring and troubleshooting"
              ]}
              imageClass="bg-[url('https://images.unsplash.com/photo-1580711465053-6757198851cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
              icon={<Cpu className="w-6 h-6 text-white" />}
            />
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-zseetech-teal-dark mb-6">Cross-Platform Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-zseetech-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-zseetech-teal" />
              </div>
              <h4 className="font-semibold mb-2">Web-Based Interfaces</h4>
              <p className="text-gray-600 text-sm">Responsive, browser-accessible HMIs that work across devices and operating systems.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-zseetech-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fan className="w-8 h-8 text-zseetech-teal" />
              </div>
              <h4 className="font-semibold mb-2">Native Applications</h4>
              <p className="text-gray-600 text-sm">High-performance desktop and mobile applications with deep system integration.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-zseetech-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-zseetech-teal" />
              </div>
              <h4 className="font-semibold mb-2">Embedded Displays</h4>
              <p className="text-gray-600 text-sm">Optimized interfaces for dedicated touchscreens and equipment-mounted displays.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-zseetech-teal hover:bg-zseetech-teal-dark">
            Request Custom HMI Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HMIDisplay;
