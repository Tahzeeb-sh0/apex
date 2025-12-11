import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const slideUp = () => {
  return {
    initial: { y: 150 },
    whileInView: { y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };
};

const slideUpAnimation = slideUp();

const heroContainer = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const cardContainer = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(null);

  const stats = [
    { title: "2+ million sq.ft", text: "Delivered Residential & Commercial Space" },
    { title: "25+ years", text: "Construction Experience" },
    { title: "150+ crore", text: "Projects Across Anantapur District" },
    { title: "3+", text: "Major Institutional Campuses" },
  ];

  return (
    <section className="relative w-full -mt-[30px] bg-[#F4F4F4] overflow-hidden">

      {/* HERO BACKGROUND */}
      <div className="
        w-full relative
        h-[680px]
        sm:h-[620px]
        md:h-[650px]
        lg:h-[750px]
        xl:h-[820px]
      ">
        <img
          src="/Heroimg.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0" style={{ background: "#3C2B984D" }} />

        {/* HERO CONTENT */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
        >
          {/* TITLE */}
          <motion.h1
            {...slideUpAnimation}
            className="
              text-white font-medium leading-tight
              text-[36px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[50px]
            "
          >
            Building Landmark Spaces in <br />
            <span className="text-[#F3D32C] font-bold">Anantapur Since 1997</span>
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            {...slideUpAnimation}
            className="
              text-white mt-4 max-w-[850px]
              text-[15px] sm:text-[16px] md:text-[18px] px-4
            "
          >
            From residential apartments to institutional campuses and modern villas,
            Apex Constructions & Infra Projects delivers quality, on-time projects
            with hands-on engineering leadership.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            {...slideUpAnimation}
           className="
  flex gap-4 mt-5 mb-5
  flex-col max-sm:flex-col
  sm:flex-row
"

          >
            <Link
              to="/projects"
              className="
                text-[#3C2B98] font-semibold 
                px-6 py-3 rounded-t-xl rounded-b-none 
                shadow-md text-center
                bg-[linear-gradient(90deg,#E5D535_11.81%,#F5F5F5_154.97%)]
                hover:bg-[linear-gradient(90deg,#E5D535_0%,#E5D535_100%)]
                transition-all duration-300
                hover:scale-[1.05] hover:shadow-xl
                max-sm:w-full
              "
            >
              View Our Projects
            </Link>

            <Link
              to="/schedulesite"
              className="
                border-2 border-white text-white font-semibold 
                px-6 py-3 rounded-t-xl rounded-b-none 
                shadow-md hover:bg-white/20 
                text-center
                transition-all duration-300
                hover:scale-[1.05] hover:shadow-xl
                max-sm:w-full
              "
            >
              Request a Site Visit
            </Link>
          </motion.div>
        </motion.div>
      </div>


      {/* STATS CARDS */}
      <motion.div
        variants={cardContainer}
        initial="hidden"
        animate="visible"
        className="
          w-full flex justify-center relative 
          -mt-[80px] sm:-mt-[120px] md:-mt-[140px] lg:-mt-[150px]
          px-4
        "
      >
        <div className="w-full max-w-[1280px] flex flex-wrap justify-center gap-3 md:gap-5">

          {stats.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardItem}
              onClick={() => setActiveCard(idx)}
              className={`
                bg-[#F4F4F4] rounded-t-[10px] text-center
                w-full sm:w-[48%] md:w-[48%] lg:w-60
                py-5 px-4
                flex flex-col justify-center items-center gap-2
                cursor-pointer transition-all duration-300
                ${
                  activeCard === idx
                    ? "border-b-[5px] border-[#3C2B98]"
                    : "border-b-[5px] border-transparent"
                }
              `}
            >
              <h3 className="text-[#F3D32C] font-bold text-[26px] sm:text-[25px] md:text-[28px]">
                {card.title}
              </h3>

              <p className="text-[#3C2B98] font-medium leading-tight text-[14px] md:text-[15px] px-3">
                {card.text}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}
