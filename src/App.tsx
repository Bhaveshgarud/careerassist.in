import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import "./globals.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import VideoEditingPortfolio from "./components/VideoEditingPortfolio";
// ... other imports

export default function Component() {
  // ... other code

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* ... header code ... */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/video-editing" element={<VideoEditingPortfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        {/* ... footer code ... */}
      </div>
    </Router>
  );
}