"use client";

import { useState } from "react";
import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Code, Printer, Cog } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with advanced inventory management and payment processing.",
    image: "/logo/hero1.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    features: ["Product Management", "Order Processing", "User Accounts", "Analytics Dashboard"],
    link: "/web"
  },
  {
    title: "Industrial Prototype Design",
    category: "3D Printing",
    description: "Complex industrial prototype with high precision requirements and functional testing.",
    image: "/logo/hero1.png",
    technologies: ["CAD", "FDM Printing", "Post-Processing", "Quality Control"],
    features: ["Precision Engineering", "Material Testing", "Functional Prototyping", "Documentation"],
    link: "/print"
  },
  {
    title: "Smart Home Automation",
    category: "Automation",
    description: "Comprehensive home automation system with IoT integration and voice control.",
    image: "/logo/hero1.png",
    technologies: ["IoT", "Python", "MQTT", "Voice Control"],
    features: ["Remote Monitoring", "Automated Controls", "Energy Management", "Security Integration"],
    link: "/automation"
  },
  {
    title: "Restaurant Management System",
    category: "Web Development",
    description: "Complete restaurant management solution with online ordering and table reservations.",
    image: "/logo/hero1.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: ["Order Management", "Table Reservations", "Payment Processing", "Analytics"],
    link: "/web"
  },
  {
    title: "Architectural Models",
    category: "3D Printing",
    description: "Detailed architectural models for presentation and planning purposes.",
    image: "/logo/hero1.png",
    technologies: ["SLA Printing", "Post-Processing", "Finishing", "Color Printing"],
    features: ["High Detail", "Scale Accuracy", "Professional Finish", "Multiple Materials"],
    link: "/print"
  },
  {
    title: "Manufacturing Workflow Automation",
    category: "Automation",
    description: "Streamlined manufacturing workflow with automated quality control and reporting.",
    image: "/logo/hero1.png",
    technologies: ["SCADA", "PLC Programming", "Data Analytics", "Machine Learning"],
    features: ["Process Optimization", "Quality Control", "Real-time Monitoring", "Automated Reporting"],
    link: "/automation"
  }
];

const categories = ["All", "Web Development", "3D Printing", "Automation"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our diverse range of successful projects across web development, 
              3D printing, and automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-orange-500 hover:bg-orange-600 text-white" 
                  : "border-black text-black hover:bg-black hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-black mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {item.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full bg-black hover:bg-gray-800 text-white group-hover:bg-orange-500 group-hover:bg-orange-600 transition-colors">
                    <Link href={item.link}>
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Project Statistics
            </h2>
            <p className="text-xl text-gray-600">
              A snapshot of our project portfolio and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">100+</div>
              <div className="text-sm text-gray-600 mt-2">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">50+</div>
              <div className="text-sm text-gray-600 mt-2">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">3</div>
              <div className="text-sm text-gray-600 mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-gray-600 mt-2">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <NetArchitectFooter />
    </div>
  );
}