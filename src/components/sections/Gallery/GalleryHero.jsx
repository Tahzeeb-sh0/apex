"use client";
import React from "react";
import { motion } from "framer-motion";

const GalleryHero = () => {
  return (
    <section className="relative w-full h-[700px] -mt-[30px] overflow-hidden">

      {/* Background Image with Animation */}
      <motion.img
        src="/Gallery/banner.svg"
        alt="CSR Hero"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-screen object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#72536D]/30"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4">

        {/* Text Container */}
        <div className="max-w-[832px]">

          {/* Heading */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="
              font-montserrat font-bold text-white
              text-[48px] lg:text-[44px] md:text-[48px] sm:text-[28px]
              leading-[100%] text-center
            "
          >
            <span className="text-[#F3D32C]">Our Portfolio</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="
              mt-5 text-white font-montserrat font-medium
              text-[20px] md:text-[20px] sm:text-[14px]
              text-center
            "
          >
            Explore a showcase of Apex Constructions finest projects,
            from residential landmarks to commercial hubs.
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
