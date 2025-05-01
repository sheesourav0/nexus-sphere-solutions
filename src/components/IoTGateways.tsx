
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, HardDrive, Network, Radio, Server, Wrench } from "lucide-react";

const FeatureCard = ({ icon, title, description, badges = [] }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badges?: string[];
}) => {
  return (
    <Card className="h-full border-border bg-white/50 backdrop-blur-sm hover:shadow-md transition-all">
      <CardHeader>
        <div className="w-12 h-12 bg-gradient-to-r from-zseetech-teal to-zseetech-teal-light rounded-lg flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-zseetech-gray">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="bg-zseetech-teal/10 text-zseetech-teal border-zseetech-teal/20">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const IoTGateways = () => {
  return (
    <section id="gateways" className="section-container bg-gradient-to-br from-white to-zseetech-teal/5">
      <div className="text-center mb-12">
        <h2 className="section-title">Advanced IoT Gateway & RTU Solutions</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our comprehensive range of IoT gateway and RTU controller solutions offers seamless connectivity 
          and powerful control capabilities for any industrial application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <FeatureCard
          icon={<Cpu size={24} />}
          title="Custom Gateway Solutions"
          description="Tailor-made IoT gateways designed to meet your specific industry requirements with flexible configuration options."
          badges={["Industry 4.0", "Custom Programming", "Edge Intelligence"]}
        />
        <FeatureCard
          icon={<Radio size={24} />}
          title="Multi-Protocol Communication"
          description="Support for diverse communication protocols including Modbus, BACnet, MQTT, OPC UA, LoRaWAN, Zigbee, and proprietary systems."
          badges={["Modbus", "BACnet", "MQTT", "OPC UA", "LoRaWAN", "Zigbee"]}
        />
        <FeatureCard
          icon={<Network size={24} />}
          title="Extensive I/O Options"
          description="Flexible input/output configurations supporting digital, analog, pulse counting, and specialized sensors for complete system control."
          badges={["Digital I/O", "Analog Inputs", "PT100/1000", "4-20mA", "0-10V", "Pulse Counting"]}
        />
      </div>

      <div className="bg-zseetech-teal/5 p-8 rounded-xl border border-zseetech-teal/20">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/3">
            <div className="aspect-square bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
              <Server size={120} className="text-zseetech-teal" />
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold text-zseetech-teal">Ready-to-Deploy RTU Controller Solutions</h3>
            <p className="text-gray-700">
              Our pre-configured RTU controllers arrive ready to connect to your infrastructure, 
              with minimal setup required. Deploy quickly and scale effortlessly 
              with our proven solutions for immediate operational benefits.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <div className="mt-1 text-zseetech-teal">
                  <HardDrive size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Industrial-Grade Hardware</h4>
                  <p className="text-sm text-gray-600">Rugged design for harsh environments with extended temperature ranges (-40°C to +85°C)</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 text-zseetech-teal">
                  <Wrench size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Easy Configuration</h4>
                  <p className="text-sm text-gray-600">User-friendly web interface for quick setup and configuration without specialized knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTGateways;
