import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/Skill";
import Certificate from "./components/Certificate";
import ContactForm from "./components/ContactForm";
import Project from "./components/Project";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />

      <SkillSection />
      <Project/>
      <Certificate />
      <ContactForm />

      <Outlet />
    </div>
  );
}

export default App;
