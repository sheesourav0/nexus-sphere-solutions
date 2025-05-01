
import { Activity, Cloud, Database, Monitor, Server, Settings, Smartphone } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-technexus-blue-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Comprehensive IoT Ecosystem</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide end-to-end IoT solutions that connect, monitor, and optimize your operations
          with advanced technology tailored to your specific needs.
        </p>
      </div>

      <div className="mb-16">
        <h3 className="section-subtitle text-center mb-8">Advanced IoT Connectivity Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Server size={24} className="text-white" />}
            title="Multi-Protocol Gateway Systems"
            description="Enterprise-grade IoT gateways supporting GSM, LoRa, Zigbee, BLE, NB-IoT, and LTE-M protocols for seamless connectivity across diverse environments."
          />
          <ServiceCard
            icon={<Monitor size={24} className="text-white" />}
            title="Edge Computing Devices"
            description="Smart controllers with local processing capabilities to minimize latency and reduce cloud dependency for critical applications."
          />
          <ServiceCard
            icon={<Activity size={24} className="text-white" />}
            title="Industrial-Grade Hardware"
            description="Ruggedized devices designed to withstand harsh environmental conditions (-40°C to +85°C) with long-term reliability."
          />
        </div>
      </div>

      <div className="mb-16">
        <h3 className="section-subtitle text-center mb-8">Remote Monitoring & Control Systems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Settings size={24} className="text-white" />}
            title="Industrial Automation"
            description="Real-time monitoring and control of manufacturing equipment, production lines, and facility infrastructure for optimal performance."
          />
          <ServiceCard
            icon={<Smartphone size={24} className="text-white" />}
            title="Smart Workshop Solutions"
            description="Connected tool tracking, equipment utilization analytics, and predictive maintenance systems to optimize workshop operations."
          />
          <ServiceCard
            icon={<Cloud size={24} className="text-white" />}
            title="Building Management Systems"
            description="Integrated HVAC, lighting, security, and energy management for commercial and residential properties with smart controls."
          />
        </div>
      </div>

      <div>
        <h3 className="section-subtitle text-center mb-8">Custom IoT Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Settings size={24} className="text-white" />}
            title="Application-Specific Controller Design"
            description="Tailor-made RTU (Remote Terminal Unit) and PLC integration for specialized industrial applications with custom requirements."
          />
          <ServiceCard
            icon={<Database size={24} className="text-white" />}
            title="Protocol Translation Middleware"
            description="Custom software for legacy system integration with modern IoT infrastructure, enabling digital transformation without complete replacement."
          />
          <ServiceCard
            icon={<Monitor size={24} className="text-white" />}
            title="Firmware Development"
            description="Specialized software development for resource-constrained embedded systems with optimized performance and security."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
