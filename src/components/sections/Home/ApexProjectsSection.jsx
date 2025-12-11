import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0, y: 60 },
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

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ApexProjectsSection() {
  const tabs = ["All", "Ongoing", "Completed", "Upcoming"];
  const [activeTab, setActiveTab] = useState("All");

  const tabRefs = useRef([]);
  const underlineRef = useRef(null);

  const projectData = [
    {
      title: "SLNS Villas",
      location: "Alamuru Road, Anantapuramu",
      desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
      img: "/Cardimg.png",
      category: "ongoing",
    },
    {
      title: "Arka Gardens",
      location: "Reddypalli, Anantapuramu",
      desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
      img: "/Cardimg.png",
      category: "completed",
    },
    {
      title: "Sri Chaitanya School",
      location: "Anantapuramu",
      desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
      img: "/Cardimg.png",
      category: "upcoming",
    },
    {
      title: "Green Meadows",
      location: "Dharmavaram Road",
      desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
      img: "/Cardimg.png",
      category: "ongoing",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter(
          (p) => p.category.toLowerCase() === activeTab.toLowerCase()
        );

  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    const currentTab = tabRefs.current[index];
    const underline = underlineRef.current;

    if (currentTab && underline) {
      underline.style.width = currentTab.offsetWidth + "px";
      underline.style.left = currentTab.offsetLeft + "px";
    }
  }, [activeTab]);

  return (
    <section className="w-full bg-white flex justify-center overflow-x-hidden">
      <motion.div
        className="w-full max-w-[1290px] px-4 sm:px-6 md:px-10 py-[50px]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* TITLE */}
        <motion.h2
          variants={item}
          className="text-center text-[32px] sm:text-[38px] md:text-[45px] font-semibold mb-8"
        >
          <span className="text-[#3C2B98]">Our </span>
          <span className="text-[#E5D535]">Projects</span>
        </motion.h2>

        {/* FILTER TABS */}
        <motion.div
          variants={item}
          className="relative mb-6 flex flex-wrap gap-4 text-[16px] font-medium text-gray-500 w-full"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 transition-all ${
                activeTab === tab
                  ? "text-[#3C2B98] font-semibold"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}

          {/* UNDERLINE */}
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-0.5 bg-[#3C2B98] transition-all duration-300"
            style={{ width: 0, left: 0 }}
          />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={item}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-4 
            gap-5
          "
        >
          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="
                group
                border border-gray-200 
                rounded-[10px]
                bg-[#F5F5F5] 
                overflow-hidden
                w-full
              "
            >
              <div className="overflow-hidden rounded-t-[10px]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="px-4 py-4">
                <h3 className="text-[15px] font-semibold text-[#333]">
                  {p.title}
                </h3>
                <p className="text-[12px] text-gray-500">{p.location}</p>
                <p className="text-[11px] text-gray-500 mt-2 leading-tight">
                  {p.desc}
                </p>

                <Link
                  to={`/projects/${p.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="
                    mt-3 w-full h-9
                    bg-gradient-to-r from-[#3C2B98] to-[#8F84FF]
                    text-white
                    rounded-t-xl
                    text-[14px]
                    font-medium
                    flex items-center justify-center
                    overflow-hidden
                    transition-all duration-300
                    hover:bg-[#3C2B98]
                  "
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM BUTTON */}
        <motion.div variants={item} className="w-full flex justify-center mt-10">
          <Link to="/projects">
            <button
              className="
                px-6 py-3 mt-5
                rounded-t-xl
                text-[#3C2B98]
                font-semibold
                text-[16px]
                shadow
                overflow-hidden
                bg-[linear-gradient(90deg,#E5D535_11.81%,#F5F5F5_154.97%)]
                transition-all duration-300
                hover:bg-[linear-gradient(90deg,#E5D535_0%,#E5D535_100%)]
              "
            >
              Explore More Projects
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
