
"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "fixed" | "inline";
}

export function WhatsAppButton({
  message = "Hello! I'm interested in your services.",
  className = "",
  variant = "fixed"
}: WhatsAppButtonProps) {
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
  
  const handleWhatsAppClick = () => {
    console.log('WhatsAppButton: handleWhatsAppClick called');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Since this is a "use client" component, window will always be available
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "fixed") {
    return (
      <Button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg ${className}`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="sr-only">Contact via WhatsApp</span>
      </Button>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      <MessageCircle className="h-4 w-4 mr-2" />
      WhatsApp
    </Button>
  );
}
