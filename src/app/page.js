'use client'
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WorkProcess from "@/components/WorkProcess";
import Portfolio from "@/components/Portfolio";
import Cta from "@/components/CTA";
import Blog from "@/components/Blog";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main className="px-1/4">
        <Hero />
        {/* <Stats /> */}
        <About />
        <WorkProcess />
        <Portfolio />
        <Cta />
        <Blog />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
