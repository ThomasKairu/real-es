import { NetArchitectHeader } from "@/components/layout/PbwHeader";
import { NetArchitectFooter } from "@/components/layout/PbwFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <NetArchitectHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-black">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Last updated: August 30, 2024
            </p>
            <p className="text-lg text-gray-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                NetArchitect ("we," "us," or "our") operates the website www.netarchitect.com (the "Site"). 
                This Privacy Policy document describes the types of information we collect and how we use it.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We may collect personal information that you provide to us, such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company information</li>
                    <li>Project details and requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Automatically Collected Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We may automatically collect certain information when you visit our Site, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our Site</li>
                    <li>Referring website addresses</li>
                    <li>Device information</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>To provide and maintain our services</li>
                <li>To process your inquiries and requests</li>
                <li>To communicate with you about your projects</li>
                <li>To improve our website and services</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">4. Information Sharing and Disclosure</h2>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Third-Party Service Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We may share your information with trusted third-party service providers who assist us in operating our business, 
                    such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Payment processors</li>
                    <li>Email service providers</li>
                    <li>Hosting providers</li>
                    <li>Analytics services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Legal Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We may disclose your information if required by law or in good faith belief that such action is necessary to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Comply with legal process</li>
                    <li>Protect and defend our rights or property</li>
                    <li>Protect personal safety of users or the public</li>
                    <li>Protect against legal liability</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage practices</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>The right to access and obtain a copy of your personal information</li>
                <li>The right to correct inaccurate personal information</li>
                <li>The right to erase your personal information</li>
                <li>The right to restrict or object to processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">7. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
                and for security purposes. You can control cookie preferences through your browser settings.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Site is not intended for use by children under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and you are aware that your child has 
                provided us with personal information, please contact us.
              </p>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state, province, 
                country or other governmental jurisdiction where the data protection laws may differ than those in your jurisdiction.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date at the top.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Email: info@netarchitect.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Tech Street, San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <NetArchitectFooter />
    </div>
  );
}