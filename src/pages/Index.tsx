
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import DataServices from "@/components/DataServices";
import CustomApps from "@/components/CustomApps";
import Industries from "@/components/Industries";
import IoTGateways from "@/components/IoTGateways";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <DataServices />
      <IoTGateways />
      <CustomApps />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
