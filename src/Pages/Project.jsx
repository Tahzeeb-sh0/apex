import React from "react";
import ProjectsHero from "../components/sections/Project/ProjectsHero";
import ProjectsCarousel from "../components/sections/Project/ProjectsCarousel";
import ProjectsHighlightSection from "../components/sections/Project/ProjectsHighlightSection";
 

export default function Project() {
  return (
    <>
     <ProjectsHero/>
     <ProjectsCarousel/>
     <ProjectsHighlightSection/>
    </>
  );
}
