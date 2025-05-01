
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient with overlay pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-[url('/public/placeholder.svg')] bg-center bg-cover opacity-10 z-0"></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Tomorrow Through Connected Innovation
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Comprehensive IoT solutions for industrial automation, smart monitoring, and data management that drive efficiency and growth in the connected era.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-white text-technexus-blue hover:bg-white/90">
                Explore Solutions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 animate-fade-in">
            <div className="relative">
              {/* Placeholder for an image - ideally would be an IoT dashboard or device visualization */}
              <div className="aspect-video bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden">
                <img 
                  src="/public/placeholder.svg" 
                  alt="IoT Platform Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-technexus-blue/20 backdrop-blur-md"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-technexus-teal/20 backdrop-blur-md"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L60,80C120,64,240,32,360,26.7C480,21,600,43,720,53.3C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
