import React from "react";
import ServiceHero from "../components/sections/Service-page/ServiceHero";
import ServiceSection from "../components/sections/Service-page/ServiceSection";
import ServiceProjectsSlider from "../components/sections/Service-page/ServiceProjectsSlider";

export default function Service() {
  return (
    <>
     <ServiceHero/>
     <ServiceSection/>
     <ServiceProjectsSlider/>
    </>
  );
}
