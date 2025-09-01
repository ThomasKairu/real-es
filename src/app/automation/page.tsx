
import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, Zap, Shield, Clock, TrendingUp, Cpu, Database } from "lucide-react";
import Image from "next/image";

export default function AutomationPage() {
  const services = [
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows to save time and reduce errors",
      features: ["Task Scheduling", "Data Processing", "Report Generation", "Email Automation"],
      price: "Starting at $500"
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "AI-powered chatbots for customer service and lead generation",
      features: ["24/7 Support", "Multi-platform", "Natural Language", "CRM Integration"],
      price: "Starting at $800"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect and synchronize data between different systems and platforms",
      features: ["API Integration", "Real-time Sync", "Data Validation", "Error Handling"],
      price: "Starting at $600"
    },
    {
      icon: Cpu,
      title: "IoT Solutions",
      description: "Smart device integration and monitoring systems",
      features: ["Device Management", "Remote Monitoring", "Alerts & Notifications", "Analytics"],
      price: "Starting at $1000"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and focus on what matters most"
    },
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description: "Optimize workflows and improve overall productivity"
    },
    {
      icon: Shield,
      title: "Reduce Errors",
      description: "Minimize human error with automated processes"
    },
    {
      icon: Zap,
      title: "Scale Operations",
      description: "Handle increased workload without additional resources"
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "Inventory management, order processing, customer service automation",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
    },
    {
      name: "Healthcare",
      description: "Patient scheduling, data management, compliance monitoring",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop"
    },
    {
      name: "Manufacturing",
      description: "Production monitoring, quality control, supply chain optimization",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=300&h=200&fit=crop"
    },
    {
      name: "Finance",
      description: "Transaction processing, compliance reporting, risk assessment",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Automation Services That Transform Your Business
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Streamline operations, reduce costs, and boost productivity with our custom automation solutions. 
              From simple task automation to complex IoT integrations, we help businesses work smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="inline" 
                message="Hi! I'm interested in automation services for my business"
                className="bg-green-500 hover:bg-green-600"
              />
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Why Automate Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the transformative benefits of business automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Automation Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive automation solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                        <service.icon className="h-6 w-6 text-green-600 group-hover:text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{service.price}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-black">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <WhatsAppButton 
                    variant="inline" 
                    message={`Hi! I'm interested in ${service.title}. ${service.description}`}
                    className="w-full bg-green-500 hover:bg-green-600"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Automation solutions across various industries and business sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{industry.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Automation Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to implementing automation in your business
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Analysis & Assessment</h3>
                  <p className="text-gray-600">We analyze your current processes, identify automation opportunities, and assess potential ROI.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Strategy & Planning</h3>
                  <p className="text-gray-600">Develop a comprehensive automation strategy with clear timelines, milestones, and success metrics.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Development & Integration</h3>
                  <p className="text-gray-600">Build and integrate automation solutions with your existing systems and workflows.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Testing & Optimization</h3>
                  <p className="text-gray-600">Thorough testing, performance optimization, and fine-tuning to ensure optimal results.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Deployment & Support</h3>
                  <p className="text-gray-600">Full deployment with training, documentation, and ongoing support to ensure success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how automation can transform your operations and drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-4">Free Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Get a free 30-minute consultation to discuss your automation needs and explore potential solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                    Process analysis and recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                    ROI estimation and timeline
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                    Technology recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                    Implementation roadmap
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Quick Response</h4>
                <p className="text-gray-600 mb-4">Need immediate assistance? Contact us via WhatsApp for instant support.</p>
                <WhatsAppButton 
                  variant="inline" 
                  message="Hi! I'd like to schedule a free automation consultation"
                  className="bg-green-500 hover:bg-green-600"
                />
              </div>
            </div>
            
            <ContactForm 
              title="Start Your Automation Journey"
              subtitle="Tell us about your business processes and automation goals."
            />
          </div>
        </div>
      </section>

      <NetArchitectFooter />
      <WhatsAppButton />
    </div>
  );
}
