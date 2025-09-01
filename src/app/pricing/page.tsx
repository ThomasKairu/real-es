
import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const webDevelopmentPlans = [
    {
      name: "Basic Website",
      price: "$999",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "1 month support",
        "Mobile optimization"
      ],
      popular: false
    },
    {
      name: "Professional Website",
      price: "$2,499",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 pages",
        "Custom design",
        "Advanced SEO",
        "CMS integration",
        "3 months support",
        "Analytics setup",
        "Social media integration",
        "Blog functionality"
      ],
      popular: true
    },
    {
      name: "E-Commerce Platform",
      price: "$4,999",
      description: "Complete online store solution",
      features: [
        "Unlimited pages",
        "Custom e-commerce design",
        "Payment gateway integration",
        "Inventory management",
        "6 months support",
        "Advanced analytics",
        "Multi-language support",
        "Performance optimization"
      ],
      popular: false
    }
  ];

  const printingServices = [
    {
      name: "Prototype Printing",
      price: "$25/hour",
      description: "Quick prototypes and concept models",
      features: [
        "PLA/ABS materials",
        "0.2mm layer height",
        "Basic finishing",
        "24-48 hour turnaround",
        "Design consultation",
        "File optimization"
      ]
    },
    {
      name: "Professional Printing",
      price: "$45/hour",
      description: "High-quality production parts",
      features: [
        "Premium materials",
        "0.1mm layer height",
        "Professional finishing",
        "Quality assurance",
        "Custom packaging",
        "Rush delivery available"
      ]
    },
    {
      name: "Bulk Production",
      price: "Custom Quote",
      description: "Large volume manufacturing",
      features: [
        "Volume discounts",
        "Multiple materials",
        "Quality control",
        "Dedicated support",
        "Flexible scheduling",
        "Custom specifications"
      ]
    }
  ];

  const automationServices = [
    {
      name: "Basic Automation",
      price: "$500",
      description: "Simple task automation",
      features: [
        "Up to 3 automated tasks",
        "Basic workflow setup",
        "Email notifications",
        "1 month support",
        "Documentation included",
        "Training session"
      ]
    },
    {
      name: "Advanced Automation",
      price: "$1,500",
      description: "Complex process automation",
      features: [
        "Up to 10 automated tasks",
        "API integrations",
        "Custom dashboards",
        "3 months support",
        "Performance monitoring",
        "Staff training",
        "Maintenance included"
      ]
    },
    {
      name: "Enterprise Solution",
      price: "Custom Quote",
      description: "Full business automation",
      features: [
        "Unlimited automation",
        "Custom development",
        "IoT integration",
        "12 months support",
        "Dedicated account manager",
        "24/7 monitoring",
        "Scalable architecture"
      ]
    }
  ];

  const supportPlans = [
    {
      name: "Basic Support",
      price: "$99/month",
      description: "Essential maintenance and updates",
      features: [
        "Monthly updates",
        "Bug fixes",
        "Email support",
        "Basic monitoring",
        "Security patches",
        "Backup services"
      ]
    },
    {
      name: "Premium Support",
      price: "$299/month",
      description: "Priority support and enhancements",
      features: [
        "Weekly updates",
        "Priority bug fixes",
        "Phone & email support",
        "Performance monitoring",
        "Security audits",
        "Feature enhancements",
        "24/7 monitoring"
      ]
    },
    {
      name: "Enterprise Support",
      price: "$599/month",
      description: "Dedicated support team",
      features: [
        "Daily monitoring",
        "Immediate response",
        "Dedicated support team",
        "Custom development",
        "Advanced analytics",
        "Compliance support",
        "SLA guarantee"
      ]
    }
  ];

  const PricingCard = ({ plan, category }: { plan: any; category: string }) => (
    <Card className={`relative ${plan.popular ? 'border-orange-500 border-2' : ''} hover:shadow-lg transition-shadow`}>
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
          <Star className="w-3 h-3 mr-1" />
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{plan.name}</CardTitle>
        <div className="text-3xl font-bold text-orange-500">{plan.price}</div>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <WhatsAppButton 
          variant="inline" 
          message={`Hi! I'm interested in the ${plan.name} plan for ${category}. Can you provide more details?`}
          className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-black hover:bg-gray-800'} text-white`}
        />
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Transparent Pricing for Every Need
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the perfect plan for your project. No hidden fees, no surprises. 
              All plans include our commitment to quality and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="inline" 
                message="Hi! I'd like to discuss pricing for my project"
                className="bg-green-500 hover:bg-green-600"
              />
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <a href="#pricing">View All Plans</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Web Development Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Professional websites that grow with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webDevelopmentPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} category="Web Development" />
            ))}
          </div>
        </div>
      </section>

      {/* 3D Printing Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              3D Printing Services
            </h2>
            <p className="text-xl text-gray-600">
              High-quality 3D printing for every project size
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {printingServices.map((plan, index) => (
              <PricingCard key={index} plan={plan} category="3D Printing" />
            ))}
          </div>
        </div>
      </section>

      {/* Automation Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Automation Services
            </h2>
            <p className="text-xl text-gray-600">
              Streamline your business with smart automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {automationServices.map((plan, index) => (
              <PricingCard key={index} plan={plan} category="Automation" />
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Support & Maintenance
            </h2>
            <p className="text-xl text-gray-600">
              Keep your systems running smoothly with our support plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} category="Support" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Do you offer custom pricing for large projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! For enterprise projects or bulk orders, we offer custom pricing based on your specific requirements. 
                  Contact us for a personalized quote.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>What's included in the support plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our support plans include regular updates, bug fixes, security patches, monitoring, and technical support. 
                  Higher tiers include priority support and additional features.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! You can upgrade or downgrade your support plan at any time. 
                  For project-based services, we can discuss modifications during development.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Do you offer payment plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer flexible payment plans for larger projects. Typically, we require 50% upfront and 50% upon completion, 
                  but we can discuss custom payment schedules for your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Choose your plan or contact us for a custom quote. We're here to help bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton 
                variant="inline" 
                message="Hi! I'd like to discuss starting a project with NetArchitect"
                className="bg-green-500 hover:bg-green-600"
              />
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <a href="mailto:info@netarchitect.com?subject=Project Inquiry">
                  Email Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
