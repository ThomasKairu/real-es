
import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Printer, Cog, ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom web applications built with modern technologies like Next.js, React, and Node.js. From simple landing pages to complex e-commerce platforms.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
      href: "/web"
    },
    {
      icon: Printer,
      title: "3D Printing",
      description: "Professional 3D printing services for prototypes, custom parts, and creative projects. High-quality prints with various materials and finishes.",
      features: ["Multiple Materials", "High Precision", "Custom Designs", "Fast Turnaround"],
      href: "/print"
    },
    {
      icon: Cog,
      title: "Automation Services",
      description: "Streamline your business processes with custom automation solutions. From workflow automation to IoT integrations and smart systems.",
      features: ["Process Optimization", "IoT Integration", "Custom Solutions", "24/7 Support"],
      href: "/automation"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "3", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "NetArchitect delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Design Studio Pro",
      content: "The 3D printing quality is incredible. They helped us prototype our product quickly and efficiently. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "AutoFlow Solutions",
      content: "Their automation services transformed our workflow. We've saved countless hours and improved our efficiency dramatically.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                  Transform Your Ideas Into
                  <span className="text-orange-primary"> Reality</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Professional web development, 3D printing, and automation services
                  that help businesses innovate and grow in the digital age.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-primary hover:bg-orange-dark text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/pricing">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white transition-all duration-300">
                  <Link href="/web">View Our Work</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-orange-primary">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl" style={{ position: 'relative' }}>
                <Image
                  src="/logo/hero1.png"
                  alt="Technology and Innovation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-orange-primary hover:bg-card">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-20 h-20 bg-orange-light rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-primary transition-all duration-300">
                    <service.icon className="h-10 w-10 text-orange-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground text-center text-lg">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full bg-orange-primary hover:bg-orange-dark text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-foreground to-muted-foreground text-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help bring your ideas to life with our expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-orange-primary hover:bg-orange-dark text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/pricing">View Pricing</Link>
              </Button>
              <WhatsAppButton
                variant="inline"
                message="Hi! I'm interested in starting a project with NetArchitect"
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <NetArchitectFooter />
      <WhatsAppButton />
    </div>
  );
}
