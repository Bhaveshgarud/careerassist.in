import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "./globals.css";
import Home from "./components/Home";
import Services from "./components/Portfolio";
import OneToMany from "./components/OneToMany";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import VideoEditingPortfolio from "./components/VideoEditingPortfolio";
import BusinessDevelopmentPortfolio from "./components/BusinessDev";
import ProductManagerPortfolio from "./components/ProductManagerPortfolio";
import FrontendPortfolio from "./components/FrontendPortfolio";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import ScrollToTop from './components/ScrollToTop'; 

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    {
      to: "/services",
      label: "PortFolios",
      subItems: [
        { to: "/video-editing", label: "Video Editing" },
        { to: "/business-development", label: "Business Development" },
        { to: "/product-management", label: "Product Management" },
        { to: "/frontend-development", label: "Frontend Development" },
      ],
    },
    { to: "/onetomany", label: "OneToMany" },
    { to: "/contact", label: "Contact Us" },
    { to: "/blog", label: "Blog" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="px-2 lg:px-4 h-14 flex items-center">
          <Link to="/" className="flex items-center mr-auto">
            <img src="/images/new_logo.png" height={145} width={145} alt="" />
            <span className="sr-only">CareerAssist</span>
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            {menuItems.map((item) => (
              <div key={item.to} className="relative group">
                <Link
                  to={item.to}
                  className="text-m font-medium hover:text-blue-600 hover:underline underline-offset-4 flex items-center"
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.to}
                          to={subItem.to}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-6 w-6 hover:text-blue-600" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <React.Fragment key={item.to}>
                    <SheetClose asChild>
                      <Link
                        to={item.to}
                        className="text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4"
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                    {item.subItems && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <SheetClose asChild key={subItem.to}>
                            <Link
                              to={subItem.to}
                              className="block text-sm font-medium hover:text-blue-600 hover:underline underline-offset-4 py-2"
                              onClick={handleLinkClick}
                            >
                              {subItem.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex-1">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/onetomany" element={<OneToMany />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/video-editing" element={<VideoEditingPortfolio />} />
            <Route path="/business-development" element={<BusinessDevelopmentPortfolio />} />
            <Route path="/product-management" element={<ProductManagerPortfolio />} />
            <Route path="/frontend-development" element={<FrontendPortfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            © 2024 careerassist. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:text-blue-600 hover:underline underline-offset-4"
              to="/terms-of-service"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:text-blue-600 hover:underline underline-offset-4"
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