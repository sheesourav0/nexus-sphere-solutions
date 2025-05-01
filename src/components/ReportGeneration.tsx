
import { FileBarChart, FileText, BarChart, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReportGeneration = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal p-4 rounded-full">
              <FileBarChart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="section-title">Custom Report Generation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your IoT data into actionable insights with our flexible reporting tools,
            designed for both automated scheduled reports and on-demand analysis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="section-subtitle mb-6">Automated Report Generation</h3>
            <p className="text-zseetech-gray-light mb-8">
              Schedule customizable reports to be delivered automatically to key stakeholders.
              Monitor critical metrics, track historical performance, and identify trends with 
              minimal manual effort.
            </p>
            
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold text-zseetech-teal-dark mb-4">Report Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-zseetech-teal rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Scheduled delivery via email</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-zseetech-teal rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Multiple export formats</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-zseetech-teal rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Interactive data visualizations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-zseetech-teal rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Customizable templates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-zseetech-teal rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">White labeling options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-zseetech-teal rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Conditional formatting alerts</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Button className="w-full md:w-auto bg-gradient-to-r from-zseetech-teal to-zseetech-teal-light text-white">
              View Sample Reports
            </Button>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-zseetech-teal to-zseetech-teal-light"></div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-zseetech-teal-dark mb-6">Report Types</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-zseetech-teal/10 rounded-lg flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-zseetech-teal" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-zseetech-gray mb-2">Performance Analytics</h4>
                    <p className="text-zseetech-gray-light">Detailed analysis of device performance, uptime statistics, and operational metrics.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-zseetech-teal/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-zseetech-teal" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-zseetech-gray mb-2">Compliance Documentation</h4>
                    <p className="text-zseetech-gray-light">Regulatory compliance reports with audit trails and certification documentation.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-zseetech-teal/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-zseetech-teal" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-zseetech-gray mb-2">Maintenance Forecasting</h4>
                    <p className="text-zseetech-gray-light">Predictive maintenance schedules based on usage patterns and equipment condition.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-zseetech-teal/5 border border-zseetech-teal/20 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong className="text-zseetech-teal-dark">Custom Development Available:</strong> Our team can develop specialized report types tailored to your industry-specific requirements and business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-4xl mx-auto">
          <div className="h-2 bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal-dark"></div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-zseetech-teal-dark mb-6 text-center">
              Advanced Data Analytics Integration
            </h3>
            <p className="text-gray-600 mb-6">
              Combine our reporting tools with advanced analytics capabilities to unlock deeper insights:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-zseetech-teal/5 p-4 rounded-lg">
                <h4 className="font-semibold text-zseetech-teal-dark mb-2">Machine Learning Models</h4>
                <p className="text-sm text-gray-600">Implement predictive analytics to forecast equipment failures and optimize maintenance schedules.</p>
              </div>
              <div className="bg-zseetech-teal/5 p-4 rounded-lg">
                <h4 className="font-semibold text-zseetech-teal-dark mb-2">Business Intelligence</h4>
                <p className="text-sm text-gray-600">Connect to third-party BI tools like Power BI, Tableau, or Looker for enhanced visualization.</p>
              </div>
              <div className="bg-zseetech-teal/5 p-4 rounded-lg">
                <h4 className="font-semibold text-zseetech-teal-dark mb-2">Custom Dashboards</h4>
                <p className="text-sm text-gray-600">Develop role-specific dashboards for executives, operators, and maintenance teams.</p>
              </div>
              <div className="bg-zseetech-teal/5 p-4 rounded-lg">
                <h4 className="font-semibold text-zseetech-teal-dark mb-2">Data API Access</h4>
                <p className="text-sm text-gray-600">Integrate with your existing systems through our secure, documented API endpoints.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-gradient-to-r from-zseetech-teal-light to-zseetech-teal text-white">
                Request Analytics Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportGeneration;
