
import { Building, Factory, Home, Hospital, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { Card } from '@/components/ui/card';

type IndustryCardProps = {
  icon: React.ReactNode;
  title: string;
};

const IndustryCard = ({ icon, title }: IndustryCardProps) => {
  return (
    <Card className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center h-full">
      <div className="w-16 h-16 bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal rounded-full flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-zseetech-blue-dark">{title}</h3>
    </Card>
  );
};

const Industries = () => {
  return (
    <section id="industries" className="section-container bg-gradient-to-br from-white to-zseetech-blue/5">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-zseetech-blue to-zseetech-green p-3 rounded-full">
            <Factory className="w-10 h-10 text-white" />
          </div>
        </div>
        <h2 className="section-title">Industries We Serve</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our IoT solutions are tailored to meet the specific needs of diverse industries,
          driving efficiency, innovation, and growth across sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <IndustryCard
          icon={<Factory size={32} />}
          title="Manufacturing & Industrial"
        />
        <IndustryCard
          icon={<Building size={32} />}
          title="Smart Buildings"
        />
        <IndustryCard
          icon={<Leaf size={32} />}
          title="Agriculture"
        />
        <IndustryCard
          icon={<Hospital size={32} />}
          title="Healthcare"
        />
        <IndustryCard
          icon={<Truck size={32} />}
          title="Transportation & Logistics"
        />
        <IndustryCard
          icon={<Home size={32} />}
          title="Smart Home"
        />
      </div>
      
      <div className="mt-16 p-8 rounded-2xl bg-white shadow-lg border border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-zseetech-blue-dark mb-4">Why Choose ZSEE Tech Solutions?</h3>
          <p className="text-gray-700 mb-8">
            We combine deep technical expertise with industry knowledge to deliver IoT solutions that drive real business outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-zseetech-blue/5 p-4 rounded-lg">
              <h4 className="font-semibold text-zseetech-blue mb-2">End-to-End Expertise</h4>
              <p className="text-gray-600">Comprehensive capabilities from hardware design to software development</p>
            </div>
            <div className="bg-zseetech-blue/5 p-4 rounded-lg">
              <h4 className="font-semibold text-zseetech-blue mb-2">Scalable Architecture</h4>
              <p className="text-gray-600">Systems designed to grow with your business without rework</p>
            </div>
            <div className="bg-zseetech-blue/5 p-4 rounded-lg">
              <h4 className="font-semibold text-zseetech-blue mb-2">Security-First Design</h4>
              <p className="text-gray-600">Robust protection for your data and infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
