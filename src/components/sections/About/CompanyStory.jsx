import React from "react";
import { motion } from "framer-motion";
export default function CompanyStory() {
  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-[80px] overflow-hidden">
      <div className="w-full max-w-[1180px] px-4 flex flex-col md:flex-row items-start justify-between gap-[40px]">
        {/* LEFT TEXT */}
        <div className="w-full md:w-[40%]">
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-montserrat font-semibold">
            <span className="text-[#3C2B98]">Company </span>
            <span className="text-[#E5D535]">Story</span>
          </h2>

          <p
            className="
      mt-4 
      text-[#2E2E2E]
      font-montserrat 
      leading-[150%] 
      max-w-[520px]

      text-[16px]     /* mobile */
      sm:text-[18px]  /* tablet */
      md:text-[20px]  /* laptop/desktop */
    "
          >
            <span className="text-[#3C2B98] font-semibold">
              Apex Constructions is a reputed enterprise
            </span>{" "}
            based in Anantapur, Andhra Pradesh, specializing in the construction
            of educational institutions, residential apartments, commercial
            spaces, cultural centers, corporate offices and public buildings.
            Since 1997, the company has executed multiple landmark projects
            across the district with a strong reputation for quality and
            innovation.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-full md:w-[50%] relative flex justify-center md:justify-end">
          {/* DESKTOP: EXACT FIGMA VALUES */}
          <div
            className="relative hidden md:block"
            style={{ width: "516px", height: "430px" }}
          >
            {/* IMAGE 1 – BELOW 3rd image */}
            <motion.img
            initial={{
              y:-200,
              x:-100,
              rotate:10
            }}
            whileInView={{
              y:0,
              x:0,
              rotate:-10

            }}
            transition={{
              delay:0.2,
              duration:1,
              type:"spring",
            }}
              src="/story1.png"
              alt="Image1"
              className="absolute shadow-xl z-10" // ⬅ BELOW
              style={{
                width: "260px",
                height: "250px",
                top: "1.7px",
                left: "2.93px",
                transform: "rotate(-10deg)",
                border: "10px solid white",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />

            {/* IMAGE 3 – ABOVE 1st image */}
            <motion.img
            initial={{
              y:200,
            
            }}
            whileInView={{
              y:0, 

            }}
            transition={{
              delay:0.2,
              duration:1,
              type:"spring",
            }}
              src="/story3.png"
              alt="Image3"
              className="absolute shadow-xl z-30" // ⬅ ABOVE 1st
              style={{
                width: "250px",
                height: "234.92px",
                top: "193.8px",
                left: "110px",
                transform: "rotate(0deg)",
                border: "10px solid white",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />

            {/* IMAGE 2 – TOPMOST */}
            <motion.img
            
            initial={{
              y:-100,
              x:200,
              rotate:10
            }}
            whileInView={{
              y:0,
              x:0,
              rotate:10

            }}
            transition={{
              delay:0.2,
              duration:1,
              type:"spring",
            }}
           
              src="/story2.jpg"
              alt="Image2"
              className="absolute shadow-xl z-40" // ⬅ HIGHEST
              style={{
                width: "250px",
                height: "194.44px",
                top: "64.46px",
                left: "233.72px",
                transform: "rotate(10deg)",
                border: "10px solid white",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            />
          </div>

          {/* MOBILE–TABLET RESPONSIVE VERSION */}
          <div className="md:hidden w-full flex flex-col items-center gap-6 mt-6">
            {/* image 1 */}
            <img
              src="/story1.png"
              className="
                w-[75%] max-w-[260px]
                rounded-[20px]
                border-[8px] border-white shadow-lg
                rotate-[6deg]
              "
            />

            {/* image 2 */}
            <img
              src="/story2.jpg"
              className="
                w-[75%] max-w-[260px]
                rounded-[20px]
                border-[8px] border-white shadow-lg
                rotate-[-6deg]
                -mt-6
              "
            />

            {/* image 3 */}
            <img
              src="/story3.png"
              className="
                w-[75%] max-w-[260px]
                rounded-[20px]
                border-[8px] border-white shadow-lg
                -mt-6
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
