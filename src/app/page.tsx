"use client";
import NavBar from "../../components/NavBar";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import React from "react";

export default function Page() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
