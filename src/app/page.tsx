"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Section Components
import HeroSection from "@/components/HeroSection";
import GrowthJourney from "@/components/GrowthJourney";
import MissionRegistry from "@/components/MissionRegistry";
import ToolkitEcosystem from "@/components/ToolkitEcosystem";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import DesignGallery from "@/components/DesignGallery";
import CertificationsGrid from "@/components/CertificationsGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [selectedDesignId, setSelectedDesignId] = useState<string>("SYS-01");

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f8fafc] flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      {/* Visual background lines (Minimal Stripe/Linear Grid vibe) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,41,59,0.15),transparent_60%)] pointer-events-none z-0"></div>

      {/* Main Single Page Scroll Canvas */}
      <main className="flex-1 relative z-10">
        
        {/* Section 1: Hero Landing */}
        <div id="hero">
          <HeroSection scrollToSection={scrollToSection} />
        </div>

        {/* Section 2: Developer Growth Evolution */}
        <GrowthJourney />

        {/* Section 3: Engineering Missions Case Studies */}
        <MissionRegistry 
          scrollToSection={scrollToSection} 
          setSelectedDesignId={setSelectedDesignId} 
        />

        {/* Section 4: Skills Toolkit Ecosystem */}
        <ToolkitEcosystem />

        {/* Section 5: Internship Experience Timeline */}
        <ExperienceTimeline />

        {/* Section 6: Architecture Design Gallery */}
        <DesignGallery 
          selectedDesignId={selectedDesignId} 
          setSelectedDesignId={setSelectedDesignId} 
        />

        {/* Section 7: Verified Certifications */}
        <CertificationsGrid />

        {/* Section 8: Minimal Contact Section */}
        <ContactSection scrollToSection={scrollToSection} />

      </main>
    </div>
  );
}
