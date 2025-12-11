import React from "react";

export default function ServiceHero() {
  return (
    <section
      className="
        relative w-full 
        h-[650px] sm:h-[700px] md:h-[720px] lg:h-[750px] 
        -mt-[30px] overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src="/service-hero.png"
        alt="Services Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3C2B98]/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        
        {/* Text Container */}
        <div className="max-w-[832px]">
          {/* Heading */}
          <h1
            className="
              font-montserrat font-medium text-white
              text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px]
              leading-tight text-center 
            "
          >
            End-to-End{" "}
            <span className="text-[#F3D32C] font-bold">Construction & Infra</span>
            <br />
            Services Under One Roof
          </h1>

          {/* Paragraph */}
          <p
            className="
              mt-5 text-white font-montserrat font-medium
              text-[14px] sm:text-[15px] md:text-[16px]
              leading-normal text-center px-2 sm:px-4
            "
          >
            From residential apartments and villas to school campuses, hospitals
            and large layout developments, Apex Constructions & Infra Projects
            offers complete solutions from planning to handover.
          </p>
        </div>

      </div>
    </section>
  );
}
