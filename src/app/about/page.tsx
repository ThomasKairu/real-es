import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Award, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We put our clients at the center of everything we do, ensuring solutions that meet your specific needs and exceed expectations."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering high-quality solutions with attention to detail, best practices, and continuous improvement."
    },
    {
      icon: Globe,
      title: "Innovation Focus",
      description: "Embracing cutting-edge technologies and innovative approaches to solve complex business challenges effectively."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Developer",
      bio: "10+ years of experience in web development and digital transformation."
    },
    {
      name: "Michael Chen", 
      role: "3D Printing Specialist",
      bio: "Expert in industrial design and additive manufacturing technologies."
    },
    {
      name: "Emily Rodriguez",
      role: "Automation Engineer", 
      bio: "Specializing in IoT and smart business process automation solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              About NetArchitect
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We transform ideas into reality through innovative technology solutions, 
              combining expertise in web development, 3D printing, and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At NetArchitect, we believe that technology should serve people, not the other way around. 
              We bridge the gap between complex technical concepts and practical business solutions, 
              making innovation accessible to businesses of all sizes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2021, we've helped numerous businesses transform their operations, 
              improve efficiency, and achieve their digital goals through our comprehensive 
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-white">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts behind NetArchitect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-white">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">100+</div>
              <div className="text-sm text-gray-600 mt-2">Projects Completed</div>
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