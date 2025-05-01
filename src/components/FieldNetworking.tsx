import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Network, Wifi, Radio, Globe, Signal, Server } from 'lucide-react';

const TechnologyCard = ({ 
  icon, 
  title, 
  description, 
  range, 
  applications 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  range: string;
  applications: string[];
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all">
      <div className="h-2 bg-gradient-to-r from-zseetech-green-light to-zseetech-green"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-zseetech-blue/10 rounded-lg flex items-center justify-center text-zseetech-blue mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-zseetech-blue">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <span className="text-sm font-medium text-zseetech-blue">Range:</span>
          <span className="text-sm ml-2 text-gray-700">{range}</span>
        </div>
        
        <div className="space-y-2">
          <span className="text-sm font-medium text-zseetech-blue">Common Applications:</span>
          <div className="flex flex-wrap gap-2">
            {applications.map((app, index) => (
              <Badge key={index} variant="outline" className="bg-zseetech-blue/5 border-zseetech-blue/20">
                {app}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FieldNetworking = () => {
  return (
    <section id="field-networking" className="py-16 md:py-24 bg-gradient-to-br from-white to-zseetech-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-zseetech-blue to-zseetech-green p-3 rounded-full">
              <Network className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="section-title">Field Network Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect your remote assets and field equipment with our comprehensive range of long-distance 
            communication technologies optimized for industrial IoT applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
            <img 
              src="https://cdn-source.adlinktech.com/WebUpd/en/Upload/Industrial_IoT_gateway/IIoT_Gateway_Second_v3.gif" 
              alt="Field Network Solutions" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TechnologyCard
              icon={<Radio size={24} />}
              title="LoRaWAN"
              description="Low-power wide-area network protocol designed for long-range, battery-efficient communications with minimal infrastructure requirements."
              range="Up to 15km in rural areas, 2-5km in urban environments"
              applications={["Utility Metering", "Agriculture Monitoring", "Asset Tracking", "Environmental Sensing"]}
            />
            
            <TechnologyCard
              icon={<Signal size={24} />}
              title="Cellular IoT (NB-IoT/LTE-M)"
              description="Leveraging existing cellular infrastructure for reliable, widespread connectivity with improved indoor penetration and power efficiency."
              range="Nationwide coverage through cellular networks"
              applications={["Remote Monitoring", "Fleet Management", "Smart City Infrastructure", "Wearable Devices"]}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <TechnologyCard
            icon={<Wifi size={24} />}
            title="Mesh Networks"
            description="Self-forming, self-healing networks that extend coverage through node-to-node communications, ideal for complex industrial environments."
            range="Scalable coverage through node expansion"
            applications={["Factory Automation", "Campus Monitoring", "Building Management", "Oil & Gas Fields"]}
          />
          
          <TechnologyCard
            icon={<Globe size={24} />}
            title="Satellite IoT"
            description="Global connectivity solutions for the most remote locations where terrestrial networks are unavailable or unreliable."
            range="Global coverage including oceans, deserts, and polar regions"
            applications={["Maritime Tracking", "Remote Infrastructure", "Emergency Services", "Wilderness Monitoring"]}
          />
          
          <TechnologyCard
            icon={<Server size={24} />}
            title="Industrial Radio"
            description="Ruggedized radio systems designed specifically for industrial applications with high reliability and interference resistance."
            range="Up to 30km with line of sight, extendable with repeaters"
            applications={["SCADA Systems", "Pipeline Monitoring", "Mining Operations", "Power Distribution"]}
          />
          
          <TechnologyCard
            icon={<Network size={24} />}
            title="Hybrid Connectivity"
            description="Intelligent multi-technology solutions that select the optimal communication method based on availability, cost, and data requirements."
            range="Variable based on integrated technologies"
            applications={["Critical Infrastructure", "Backup Communications", "Mobile Assets", "Multi-site Enterprises"]}
          />
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-border">
          <h3 className="text-2xl font-semibold text-zseetech-blue mb-4">Custom Network Design Services</h3>
          <p className="text-gray-600 mb-6">
            Our network engineering team specializes in designing custom field communication solutions 
            that address the unique challenges of your operational environment. From RF site surveys to 
            complete network architecture, we ensure reliable data exchange across your distributed assets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col p-4 bg-zseetech-blue/5 rounded-lg">
              <h4 className="font-medium text-zseetech-blue mb-2">RF Site Surveys</h4>
              <p className="text-sm text-gray-600">Comprehensive analysis of your physical environment to determine optimal network design.</p>
            </div>
            
            <div className="flex flex-col p-4 bg-zseetech-blue/5 rounded-lg">
              <h4 className="font-medium text-zseetech-blue mb-2">Redundancy Planning</h4>
              <p className="text-sm text-gray-600">Failover communication strategies to maintain connectivity in critical applications.</p>
            </div>
            
            <div className="flex flex-col p-4 bg-zseetech-blue/5 rounded-lg">
              <h4 className="font-medium text-zseetech-blue mb-2">Security Architecture</h4>
              <p className="text-sm text-gray-600">End-to-end encryption and security protocols designed for industrial IoT deployments.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-zseetech-blue hover:bg-zseetech-blue-dark text-white">
              Request Network Consultation
            </Button>
            <Button variant="outline" className="border-zseetech-blue text-zseetech-blue hover:bg-zseetech-blue/10">
              Download Connectivity Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldNetworking;
