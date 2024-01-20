"use client";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import React from "react";
import About from "./components/about/page";

export default function Page() {
  return (
    <div className="main">
      {/* <NavBar /> */}
      <Home />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
