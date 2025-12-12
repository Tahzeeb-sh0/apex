import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const slideUp = () => {
  return {
    initial: { y: 150 },
    whileInView: { y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
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
      <div
        className="
          w-full relative
          h-[600px]
          sm:h-[620px]
          md:h-[650px]
          lg:h-[750px]
          xl:h-[820px]
        "
      >
        <img
          src="/Heroimg.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#3C2B98]/30" />

        {/* HERO CONTENT */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5"
        >
          {/* TITLE */}
          <motion.h1
            {...slideUpAnimation}
            className="
              text-white font-medium leading-tight
              text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[50px]
            "
          >
            Building Landmark Spaces in <br />
            <span className="text-[#F3D32C] font-bold">Anantapur Since 1997</span>
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            {...slideUpAnimation}
            className="
              text-white mt-3 md:mt-4 max-w-[850px]
              text-[14px] sm:text-[15px] md:text-[17px] px-3
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
              flex flex-col sm:flex-row
              w-full max-w-[450px]
              gap-3 sm:gap-4 mt-5 mb-6
            "
          >
            <Link
              to="/projects"
              className="
                text-[#3C2B98] font-semibold 
                px-6 py-3 rounded-t-xl rounded-b-none
                shadow-md text-center
                bg-gradient-to-r from-[#E5D535] to-[#F5F5F5]
                hover:from-[#E5D535] hover:to-[#E5D535]
                transition-all duration-300
                hover:scale-[1.05] hover:shadow-xl
                w-full sm:w-auto
              "
            >
              View Our Projects
            </Link>

            <Link
              to="/schedulesite"
              className="
                border-2 border-white text-white font-semibold 
                px-6 py-3 rounded-t-xl rounded-b-none 
                shadow-md hover:bg-white/20 text-center
                transition-all duration-300
                hover:scale-[1.05] hover:shadow-xl
                w-full sm:w-auto
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
          -mt-[90px] sm:-mt-[120px] md:-mt-[140px] lg:-mt-[150px]
          px-5
        "
      >
        <div
          className="
            w-full max-w-[1280px]
            flex flex-wrap justify-center
            gap-3 md:gap-5
          "
        >
          {stats.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardItem}
              onClick={() => setActiveCard(idx)}
              className={`
                bg-[#F4F4F4] rounded-t-[10px] text-center
                w-full max-w-[300px] sm:w-[48%] md:w-[48%] lg:w-60
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
              <h3 className="text-[#F3D32C] font-bold text-[22px] sm:text-[24px] md:text-[26px]">
                {card.title}
              </h3>

              <p className="text-[#3C2B98] font-medium leading-tight 
                text-[13px] sm:text-[14px] md:text-[15px] px-2">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
