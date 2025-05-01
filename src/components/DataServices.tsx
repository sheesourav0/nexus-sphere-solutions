
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-technexus-blue mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

const DataServices = () => {
  const consultancyFeatures = [
    "System Architecture Design for end-to-end IoT infrastructure",
    "Network Planning & Optimization with RF site surveys",
    "Security Assessment & Hardening with vulnerability testing",
    "Technology Stack Selection with vendor-neutral recommendations"
  ];

  const dataFlowFeatures = [
    "Multi-Protocol Data Integration across wired and wireless networks",
    "Stream Processing Pipelines for real-time transformations",
    "Time-Series Database Optimization for massive IoT datasets",
    "Data Validation & Cleansing with automated anomaly detection"
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Data Management & Analytics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform raw IoT data into actionable insights with our comprehensive 
            data management and analytics services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-technexus-blue to-technexus-teal"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-technexus-blue-dark mb-4">IoT Consultancy Services</h3>
              <p className="text-gray-600 mb-6">
                Our expert consultants help you navigate the complex IoT landscape with 
                tailored advice on architecture, security, and implementation strategies.
              </p>
              
              <FeatureList features={consultancyFeatures} />
              
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-technexus-blue to-technexus-teal text-white w-full">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-technexus-teal to-technexus-blue"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-technexus-blue-dark mb-4">Data Flow Engineering</h3>
              <p className="text-gray-600 mb-6">
                Design and implement robust data pipelines that securely transport, 
                transform, and store your IoT data for maximum value extraction.
              </p>
              
              <FeatureList features={dataFlowFeatures} />
              
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-technexus-teal to-technexus-blue text-white w-full">
                  Explore Data Solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Need custom data integration or analytics solutions?
          </p>
          <Button variant="outline" className="border-technexus-blue text-technexus-blue hover:bg-technexus-blue/10">
            Contact Our Data Specialists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DataServices;
