
import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Package, Palette, Zap } from "lucide-react";
import Image from "next/image";
import printsData from "@/data/prints.json";

export default function PrintingPage() {
  const capabilities = [
    {
      icon: Palette,
      title: "Multiple Materials",
      description: "PLA, ABS, PETG, Nylon, Resin, and specialty filaments for any project requirement"
    },
    {
      icon: Zap,
      title: "High Precision",
      description: "Layer heights as low as 0.1mm for detailed prototypes and intricate designs"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most projects completed within 24-48 hours with rush options available"
    },
    {
      icon: Package,
      title: "Custom Finishing",
      description: "Post-processing services including sanding, painting, and assembly"
    }
  ];

  const materials = [
    { name: "PLA", description: "Biodegradable, easy to print, great for prototypes", color: "bg-green-100 text-green-800" },
    { name: "ABS", description: "Durable, heat resistant, perfect for functional parts", color: "bg-blue-100 text-blue-800" },
    { name: "PETG", description: "Chemical resistant, crystal clear, food safe", color: "bg-purple-100 text-purple-800" },
    { name: "Nylon", description: "Strong, flexible, ideal for mechanical parts", color: "bg-gray-100 text-gray-800" },
    { name: "Resin", description: "Ultra-high detail, smooth finish, perfect for miniatures", color: "bg-yellow-100 text-yellow-800" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Professional 3D Printing Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your digital designs into physical reality with our high-quality 3D printing services. 
              From rapid prototyping to custom manufacturing, we bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="inline" 
                message="Hi! I'm interested in 3D printing services"
                className="bg-green-500 hover:bg-green-600"
              />
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <a href="#products">View Products</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our 3D Printing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment and expertise to handle projects of any size and complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Available Materials
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a wide range of materials to match your project requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{material.name}</CardTitle>
                    <Badge className={material.color}>{material.name}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{material.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our 3D Printing Products
            </h2>
            <p className="text-xl text-gray-600">
              Explore our range of 3D printing services and get a quote for your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printsData.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-orange-500">{product.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{product.description}</CardDescription>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Material:</span>
                      <span className="font-medium">{product.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Print Time:</span>
                      <span className="font-medium">{product.printTime}</span>
                    </div>
                  </div>
                  
                  <WhatsAppButton 
                    variant="inline" 
                    message={`Hi! I'd like to get a quote for ${product.name}. ${product.description}`}
                    className="w-full bg-green-500 hover:bg-green-600"
                  />
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
              Our 3D Printing Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to finished product in just a few simple steps
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">1</div>
                <h3 className="text-lg font-semibold text-black">Upload Design</h3>
                <p className="text-gray-600">Send us your 3D files or describe your project requirements</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">2</div>
                <h3 className="text-lg font-semibold text-black">Quote & Review</h3>
                <p className="text-gray-600">Receive detailed quote with material options and timeline</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">3</div>
                <h3 className="text-lg font-semibold text-black">Print & Finish</h3>
                <p className="text-gray-600">Professional printing with quality control and finishing</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">4</div>
                <h3 className="text-lg font-semibold text-black">Delivery</h3>
                <p className="text-gray-600">Fast shipping or local pickup of your finished parts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-xl text-gray-300">
              Get started with your 3D printing project today. Contact us for a free quote and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="inline" 
                message="Hi! I'd like to discuss a 3D printing project"
                className="bg-green-500 hover:bg-green-600"
              />
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <a href="mailto:info@netarchitect.com?subject=3D Printing Quote Request">Email Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <NetArchitectFooter />
      <WhatsAppButton />
    </div>
  );
}
