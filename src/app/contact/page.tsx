import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to start your project? Contact us today for a free consultation 
              and let's discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">Email</h3>
                        <p className="text-gray-600">info@netarchitect.com</p>
                        <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM PST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">Office</h3>
                        <p className="text-gray-600">123 Tech Street, San Francisco, CA 94105</p>
                        <p className="text-sm text-gray-500">By appointment only</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM PST</p>
                        <p className="text-sm text-gray-500">Closed on Sundays</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <WhatsAppButton 
                      variant="inline"
                      message="Hi! I'm interested in starting a project with NetArchitect"
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    />
                    <Button asChild variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                      <a href="mailto:info@netarchitect.com?subject=Project Inquiry">
                        Send Email Inquiry
                        <Send className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interest *
                      </label>
                      <select 
                        id="service" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="printing">3D Printing</option>
                        <option value="automation">Automation Services</option>
                        <option value="other">Other/Not Sure</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our services and process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>What is your typical project timeline?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, 
                    while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Do you offer ongoing support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! We offer various support plans ranging from basic maintenance to 24/7 enterprise support. 
                    We can customize a support package based on your specific needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We accept various payment methods including bank transfers, credit cards, and cryptocurrency. 
                    For larger projects, we offer flexible payment plans with milestones.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Can you work with existing systems?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely! We have extensive experience integrating with existing systems, databases, and APIs. 
                    We can work with your current infrastructure or help you migrate to more modern solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <NetArchitectFooter />
    </div>
  );
}