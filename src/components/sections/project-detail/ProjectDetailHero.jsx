import React from "react";

export default function ProjectDetailHero() {
  return (
    <section className="relative w-full h-[100vh] -mt-[30px] overflow-hidden flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <img
        src="/project-detail-hero.png"
        alt="Project Detail Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ✅ GRADIENT OVERLAY — SAME AS SERVICE */}
      <div className="absolute inset-0 bg-[#3C2B98]/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex items-center justify-center px-4">
        <div className="max-w-[920px] text-center">

          {/* TITLE */}
          <h1
            className="
              font-montserrat
              text-[32px] sm:text-[40px] lg:text-[48px]
              leading-[100%]
              font-bold
              text-white
            "
          >
            <span className="text-[#E5D535]">
              Project Details
            </span>
            <br />
            <span className="font-medium">
              Apex Constructions &amp; Infra Projects
            </span>
          </h1>

          {/* PARAGRAPH */}
          <p
            className="
              mt-4
              font-montserrat
              font-medium
              text-[14px] sm:text-[16px]
              leading-[130%]
              text-center
              text-white
            "
          >
            Established in Anantapur in 1997, with a focus on quality
            residential and institutional buildings.
          </p>

        </div>
      </div>
    </section>
  );
}
