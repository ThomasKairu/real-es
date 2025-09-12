import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center w-full border-t">
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between px-4 py-6 md:px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-muted-foreground">
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors"
            >
              Netarchitect
            </Link>{" "}
            |{" "}
            <Link
              href="https://synapseflow.solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors"
            >
              Powered by Synapseflow solutions
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:underline"
          >
            About Us
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
