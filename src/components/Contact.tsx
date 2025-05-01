
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Contact Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ready to transform your business with IoT solutions? Get in touch with our team to discuss your needs and discover how we can help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-technexus-blue-dark mb-6">Send Us a Message</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <Input id="company" placeholder="Your Company" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input id="phone" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Tell us about your project..." rows={5} />
            </div>
            
            <Button className="w-full bg-gradient-to-r from-technexus-blue to-technexus-teal text-white">
              Send Message
            </Button>
          </form>
        </div>
        
        <div className="flex flex-col justify-between">
          <div className="bg-service-gradient rounded-xl p-8 border border-border mb-6">
            <h3 className="text-2xl font-semibold text-technexus-blue-dark mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-technexus-blue/10 rounded-full flex items-center justify-center text-technexus-blue">
                    <MapPin size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Our Location</h4>
                  <p className="text-gray-600">03rd Floor. The Institution Of Engineers Building,<br />Panbazar, Guwahati.781001, Assam, INDIA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-technexus-blue/10 rounded-full flex items-center justify-center text-technexus-blue">
                    <Mail size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Email Us</h4>
                  <p className="text-gray-600">
                    <a href="mailto:souravshee@zsee.org" className="hover:text-technexus-blue">souravshee@zsee.org</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-technexus-blue/10 rounded-full flex items-center justify-center text-technexus-blue">
                    <Phone size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Call Us</h4>
                  <p className="text-gray-600">
                    <a href="tel:+917099041030" className="hover:text-technexus-blue">+91 7099041030</a><br />
                    WhatsApp: <a href="https://wa.me/918669027592" className="hover:text-technexus-blue">+91 8669027592</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-technexus-blue to-technexus-teal rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Why Work With Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>End-to-end IoT expertise from concept to deployment</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Customized solutions tailored to your specific needs</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Ongoing support and maintenance for all systems</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Scalable architecture that grows with your business</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
