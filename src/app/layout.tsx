import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Import your global UI components
import Navbar from "../components/ui/Navbar";
import CartDrawer from "../components/ui/CartDrawer";
import SmoothScroll from "../components/ui/SmoothScroll";

// Configure premium fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "Careniva | Premium Cold Pressed Oils",
  description: "100% natural, chemical-free cold pressed oils extracted natively in Thoothukudi, Tamil Nadu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-careniva-dark text-careniva-ivory antialiased font-sans overflow-x-hidden">
        
        {/* SmoothScroll wraps the entire app for a luxury feel */}
        <SmoothScroll>
          
          {/* Navbar stays fixed at the top */}
          <Navbar />
          
          {/* CartDrawer sits globally and listens for state changes */}
          <CartDrawer />
          
          {/* Main page content (Hero, Process, Products, etc.) renders here */}
          {children}
          
        </SmoothScroll>
        
      </body>
    </html>
  );
}