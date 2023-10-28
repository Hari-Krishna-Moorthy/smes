"use client";

import React, { useState, useEffect } from "react";
import Footer from "src/components/ui/footer/footer";
import Navbar from "src/components/ui/navbar/navbar1";
import Home from "./home";

export default function Site() {
  const [navbarPage, setNavbarPage] = useState("Home")


  const scrollHandler = () => {
    window.window.scrollY > 800 ? setNavbarPage("About Us") : setNavbarPage("Home")
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [navbarPage])

  return (
    <main className="light">
      <div className="h-20">
        {/* Navbar  */}
          <Navbar activePage={navbarPage} />
      </div>
      <Home />
      <Footer />
    </main>
  );
}
