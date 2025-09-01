
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export function ContactForm({ 
  title = "Get In Touch", 
  subtitle = "Ready to start your project? Send us a message!" 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link
      const subject = encodeURIComponent(formData.subject || "Contact Form Submission");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:info@netarchitect.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Email client opened! Please send the email to complete your message.");
    } catch (error) {
      toast.error("Failed to open email client. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
          <Mail className="h-6 w-6 text-orange-500" />
          {title}
        </CardTitle>
        <p className="text-gray-600">{subtitle}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            disabled={isSubmitting}
          >
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Opening Email..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
