import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { Target } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-center w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Target className="h-6 w-6 text-orange-primary" />
            <span className="text-xl font-bold text-orange-primary">NetArchitect</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-8">
            <Link href="/web" className="text-gray-600 hover:text-orange-primary transition-colors font-medium">
              Web Development
            </Link>
            <Link href="/print" className="text-gray-600 hover:text-orange-primary transition-colors font-medium">
              3D Printing
            </Link>
            <Link href="/automation" className="text-gray-600 hover:text-orange-primary transition-colors font-medium">
              Automation
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-orange-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
