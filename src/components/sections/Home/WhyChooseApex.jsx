import React from "react";
import { FaUserTie, FaClock, FaLightbulb, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
      mass: 0.8,
    },
  },
};

export default function WhyChooseApex() {
  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-[50px]">
      <motion.div
        className="w-full max-w-[1450px] px-5 md:px-[125px] flex flex-col gap-[30px]"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* TITLE */}
        <motion.h2
          variants={item}
          className="text-center text-[36px] md:text-[41px] font-semibold text-[#3C2B98]"
        >
          Why Choose <span className="text-[#F3D32C]">Apex?</span>
        </motion.h2>

        {/* GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* CARD 1 */}
          <motion.div
            variants={item}
            className="bg-[#3C2B98] text-white rounded-t-xl rounded-b-none h-[155px] p-4 shadow flex flex-col gap-2"
          >
            <div className="flex items-start gap-2 hover:text-[#F3D32C] transition">

              <h3 className="font-semibold text-[22px] leading-tight hover:text-[#F3D32C] transition">
                Hands-on Leadership
              </h3>
            </div>

            <p className="text-[15px] leading-snug opacity-90 mt-1">
              Led by Civil Engineer Mr. B. Thirupalu (B.Tech, 1995), personally
              involved in planning & execution.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={item}
            className="bg-[#3C2B98] text-white rounded-t-xl rounded-b-none h-[155px] p-4 shadow flex flex-col gap-2"
          >
            <div className="flex items-start gap-2 hover:text-[#F3D32C] transition">
              <FaClock size={26} />
              <h3 className="font-semibold text-[22px] leading-tight hover:text-[#F3D32C] transition">
                On-time Delivery
              </h3>
            </div>

            <p className="text-[15px] leading-snug opacity-90 mt-1">
              Strong scheduling and on-site management to complete projects
              within committed timelines.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={item}
            className="bg-[#3C2B98] text-white rounded-t-xl rounded-b-none h-[155px] p-4 shadow flex flex-col gap-2"
          >
            <div className="flex items-start gap-2 hover:text-[#F3D32C] transition">
              <FaLightbulb size={26} />
              <h3 className="font-semibold text-[22px] leading-tight hover:text-[#F3D32C] transition">
                Quality & Innovation
              </h3>
            </div>

            <p className="text-[15px] leading-snug opacity-90 mt-1">
              Use of modern technologies, materials and supervision to ensure
              durability and performance.
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={item}
            className="bg-[#3C2B98] text-white rounded-t-xl rounded-b-none h-[155px] p-4 shadow flex flex-col gap-2"
          >
            <div className="flex items-start gap-2 hover:text-[#F3D32C] transition">
              <FaUsers size={26} />

              <h3 className="font-semibold text-[22px] md:text-[17px] leading-tight whitespace-nowrap hover:text-[#F3D32C] transition">
                Customer-Centric Approach
              </h3>
            </div>

            <p className="text-[15px] leading-snug opacity-90 mt-1">
              Customized solutions for institutions, investors and end-users – from
              first meeting to handover.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
