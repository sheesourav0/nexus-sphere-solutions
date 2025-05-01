import { Button } from '@/components/ui/button';
import { BarChart4, Database, Globe, Layers, Shield, Smartphone as SmartphoneIcon } from 'lucide-react';

const SolutionItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 bg-gradient-to-r from-zseetech-teal to-zseetech-teal-light rounded-lg flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-zseetech-gray mb-2">{title}</h4>
        <p className="text-zseetech-gray-light">{description}</p>
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Platform Solutions</h2>
          <p className="text-lg text-zseetech-gray-light max-w-3xl mx-auto">
            Our comprehensive software platforms enable intelligent monitoring, control, 
            and analysis of IoT data with customizable interfaces for any industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="section-subtitle mb-6">White-Label IoT Platform</h3>
            <p className="text-zseetech-gray-light mb-8">
              Launch your own branded IoT platform with our white-label solution. Create a custom-branded 
              experience for your clients with your logo and colors while leveraging our powerful 
              infrastructure and features.
            </p>
            
            <div className="space-y-6">
              <SolutionItem 
                icon={<Layers size={20} />}
                title="Multi-Tenant Architecture"
                description="Hierarchical access control enabling reseller business models with complete separation of client data."
              />
              
              <SolutionItem 
                icon={<Globe size={20} />}
                title="Customizable Branding"
                description="Personalized logos, color schemes, and domains for each tenant to maintain consistent brand identity."
              />
              
              <SolutionItem 
                icon={<Shield size={20} />}
                title="Role-Based Administration"
                description="Granular permission settings for operators, managers, and viewers to control access levels."
              />
            </div>
            
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-zseetech-teal to-zseetech-teal-light text-white">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* This would be a screenshot of the dashboard or platform */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/public/placeholder.svg" 
                alt="White-Label IoT Platform" 
                className="w-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-zseetech-teal-light/10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-zseetech-teal/10"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* This would be a screenshot of the dashboard */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/public/placeholder.svg" 
                alt="Dynamic Dashboard Solutions" 
                className="w-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-zseetech-teal-light/10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-zseetech-teal/10"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="section-subtitle mb-6">Dynamic Dashboard Solutions</h3>
            <p className="text-zseetech-gray-light mb-8">
              Visualize and interact with your IoT data through intuitive, customizable dashboards. 
              Monitor device status, analyze performance metrics, and gain actionable insights in real-time.
            </p>
            
            <div className="space-y-6">
              <SolutionItem 
                icon={<BarChart4 size={20} />}
                title="Interactive Data Visualization"
                description="Customizable charts, graphs, and mapping components to visualize complex data in meaningful ways."
              />
              
              <SolutionItem 
                icon={<Database size={20} />}
                title="Historical Trend Analysis"
                description="Long-term data patterns with advanced filtering to identify trends and optimize operations."
              />
              
              <SolutionItem 
                icon={<SmartphoneIcon size={20} />}
                title="Mobile Applications"
                description="Native iOS and Android apps with offline capabilities for monitoring on the go."
              />
            </div>
            
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-zseetech-teal to-zseetech-teal-light text-white">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
