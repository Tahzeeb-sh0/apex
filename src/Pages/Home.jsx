import React from "react";
import HeroSection from "../components/sections/Home/HeroSection";
import WhatWeDo from "../components/sections/Home/WhatWeDo";
import ApexProjectsSection from "../components/sections/Home/ApexProjectsSection";
import WhyChooseApex from "../components/sections/Home/WhyChooseApex";
import ApexCSR from "../components/sections/Home/ApexCSR";
import ClientTestimonials from "../components/sections/Home/ClientTestimonials";
import ProjectCTA from "../components/sections/Home/ProjectCTA";
import ContactMiniForm from "../components/sections/Home/ContactMiniForm";
 
 


export default function Home() {
  return (
    <>
    <HeroSection />
    <WhatWeDo />
    <ApexProjectsSection />
    <WhyChooseApex />
    <ApexCSR />
    <ClientTestimonials />
    <ProjectCTA />
     <ContactMiniForm />
    
    </>
     
     
  );
}
