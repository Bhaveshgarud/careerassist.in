import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
import "./globals.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import TermsOfService from "./components/TermsOfService";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Menu, X } from "lucide-react";

// Main App Component
export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Services" },
    { to: "/contact", label: "Contact Us" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link to="/" className="flex items-center justify-center">
            <img src="/images/new_logo.png" height={145} width={145} alt="" />
            <span className="sr-only">Job Application Service</span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-m font-medium hover-text-blue hover:underline underline-offset-4 "
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="ml-auto md:hidden"
              >
                <Menu className="h-6 w-6 hover-text-blue" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-sm font-medium hover-text-blue hover:underline underline-offset-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            © 2024 careerassist. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover-text-blue hover:underline underline-offset-4"
              to="/terms-of-service"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover-text-blue hover:underline underline-offset-4"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </nav>
        </footer>
      </div>
    </Router>
  );
}