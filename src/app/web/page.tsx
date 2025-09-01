
import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Palette, Zap, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import sitesData from "@/data/sites.json";

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: "Modern Technologies",
      description: "Built with the latest frameworks like Next.js, React, and Node.js for optimal performance"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique, responsive designs tailored to your brand and user experience requirements"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed with excellent Core Web Vitals and SEO rankings"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliable hosting solutions for peace of mind"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Professional Web Development Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Create stunning, high-performance websites that drive results. From simple landing pages 
              to complex web applications, we build digital experiences that engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="inline" 
                message="Hi! I'm interested in web development services"
                className="bg-green-500 hover:bg-green-600"
              />
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Why Choose Our Web Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver websites that perform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Explore some of our recent web development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitesData.map((site) => (
              <Card key={site.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={site.image}
                    alt={site.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{site.title}</CardTitle>
                      <Badge variant="secondary">{site.category}</Badge>
                    </div>
                    <Button asChild size="icon" variant="ghost">
                      <Link href={site.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{site.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {site.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Start Your Web Project
            </h2>
            <p className="text-xl text-gray-600">
              Ready to build something amazing? Let's discuss your project requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-black">Discovery & Planning</h4>
                      <p className="text-gray-600">We understand your goals, target audience, and project requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-black">Design & Development</h4>
                      <p className="text-gray-600">Create wireframes, designs, and develop your website with modern technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-black">Testing & Launch</h4>
                      <p className="text-gray-600">Thorough testing, optimization, and deployment to production</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold text-black">Support & Maintenance</h4>
                      <p className="text-gray-600">Ongoing support, updates, and maintenance to keep your site running smoothly</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-black mb-2">Quick Contact</h4>
                <p className="text-gray-600 mb-4">Need immediate assistance? Reach out via WhatsApp for instant support.</p>
                <WhatsAppButton 
                  variant="inline" 
                  message="Hi! I need help with web development services"
                  className="bg-green-500 hover:bg-green-600"
                />
              </div>
            </div>
            
            <ContactForm 
              title="Get Your Quote"
              subtitle="Tell us about your web development project and we'll get back to you with a detailed proposal."
            />
          </div>
        </div>
      </section>

      <NetArchitectFooter />
      <WhatsAppButton />
    </div>
  );
}
