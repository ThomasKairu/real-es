
"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export function NetArchitectFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-primary text-white font-bold">
                N
              </div>
              <span className="text-xl font-bold">NetArchitect</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional web development, 3D printing, and automation services for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/web" className="hover:text-orange-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/print" className="hover:text-orange-primary transition-colors">
                  3D Printing
                </Link>
              </li>
              <li>
                <Link href="/automation" className="hover:text-orange-primary transition-colors">
                  Automation Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-orange-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@netarchitect.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-orange-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-orange-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-orange-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} NetArchitect. All rights reserved.
            {/* DEBUG: Hydration test - now using useEffect for client-side year */}
          </p>
        </div>
      </div>
    </footer>
  );
}
