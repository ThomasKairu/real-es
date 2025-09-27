
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NetArchitect - Professional Web Development, 3D Printing & Automation",
  description: "Expert web development, 3D printing services, and automation solutions for modern businesses. Transform your ideas into reality with NetArchitect.",
  keywords: "web development, 3D printing, automation, business solutions, technology services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="google-site-verification" content="bfF160i4ek-J_y-DtPjkX2hOtvEffMLWktlodcNKK4w" />
      </head>
      <body
        className={inter.className}
        data-hydration-test="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
