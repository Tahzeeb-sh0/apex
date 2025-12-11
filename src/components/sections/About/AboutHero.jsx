import React from "react";

export default function AboutHero() {
  return (
    <section className="relative  w-full -mt-[30px] flex justify-center bg-[#F4F4F4]">
      <div
        className="
          relative 
          w-full max-w-[1580px]
          
          /* Responsive height */
          h-[700px] lg:h-[720px] md:h-[550px] sm:h-[480px] xs:h-[420px]

          rounded-t-[10px]
          overflow-hidden
          mx-auto
        "
      >
        {/* BACKGROUND IMAGE */}
        <img
          src="/abouthero.png"
          alt="About Apex"
          className="
            absolute inset-0 w-full h-full object-cover object-center
            transition-transform duration-[4000ms] ease-out
            md:hover:scale-105   /* smooth zoom hover for crisp effect */
          "
        />

        {/* GRADIENT OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(60, 43, 152, 0) -12.67%, rgba(60, 43, 152, 0.5) 83.1%)",
          }}
        ></div>

        {/* CONTENT */}
        <div
          className="
            relative z-10
            w-full h-full
            flex flex-col items-center justify-center
            px-6
            text-center
          "
        >
          {/* TITLE */}
          <h3 className="text-[#E5D535] text-[40px] md:text-[48px] font-montserrat font-bold leading-tight">
            About
          </h3>

          {/* MAIN HEADING */}
          <h1
            className="
              text-white
              text-[34px] sm:text-[40px] md:text-[48px] lg:text-[52px]
              font-montserrat font-medium
              leading-tight mt-2
              px-2
            "
          >
            Apex Constructions & Infra Projects
          </h1>

          {/* SUBTEXT */}
          <p
            className="
              text-white
              text-[14px] sm:text-[15px] md:text-[18px]
              font-montserrat
              max-w-[850px]
              mt-4
              opacity-90
              leading-normal
              px-4
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
