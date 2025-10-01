// Import types and utilities from Next.js
import type { Metadata } from "next";
// Import Google Fonts (Geist family) for typography
import { Geist, Geist_Mono } from "next/font/google";
// Import global CSS styles
import "./globals.css";

// Configure the main sans-serif font (Geist)
const geistSans = Geist({
  variable: "--font-geist-sans",    // CSS variable name for this font
  subsets: ["latin"],               // Character subset to load
});

// Configure the monospace font (Geist Mono)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",    // CSS variable name for this font
  subsets: ["latin"],               // Character subset to load
});

// Metadata for the application (appears in browser tab, search results, etc.)
export const metadata: Metadata = {
  title: "Inventory Management System",           // Browser tab title
  description: "Manage your inventory with ease",  // Meta description
};

// Root layout component that wraps all pages in the application
export default function RootLayout({
  children,  // All page content will be passed as children
}: Readonly<{
  children: React.ReactNode;  // TypeScript type for React children
}>) {
  return (
    // HTML document structure
    <html lang="en">  {/* Set language for accessibility */}
      <body
        // Apply font variables and antialiasing to body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}  {/* Render the page content here */}
      </body>
    </html>
  );
}
