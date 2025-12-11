import React from "react";
import { FaHome, FaBuilding, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function WhatWeDo() {
  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-[60px]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-[1450px] px-[20px] md:px-[125px] flex flex-col gap-[30px]"
      >
        {/* TITLE */}
        <motion.h1
          variants={item}
          className="text-center text-[38px] md:text-[45px] font-semibold text-[#3C2B98] leading-tight"
        >
          What <span className="text-[#F3D32C]">We Do</span>
        </motion.h1>

        {/* 3 BUTTON GRID */}
        <motion.div
          variants={container}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-[30px]"
        >
          {/* CARD 1 */}
          <motion.div
            variants={item}
            className="
              bg-[#E5D535] hover:bg-[#3C2B98]
              flex items-center gap-4 px-[30px] py-[25px]
              rounded-t-[12px]
              rounded-b-none cursor-pointer transition duration-300
            "
          >
            <FaHome size={26} className="text-white" />
            <span className="text-white font-semibold text-[18px]">
              Residential Projects
            </span>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={item}
            className="
              bg-[#E9D535] hover:bg-[#3C2B98]
              flex items-center gap-4 px-[30px] py-[25px]
              rounded-t-[12px]
              rounded-b-none cursor-pointer transition duration-300
            "
          >
            <FaBuilding size={26} className="text-white" />
            <span className="text-white font-semibold text-[18px]">
              Commercial & Institutional Buildings
            </span>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={item}
            className="
              bg-[#E9D535] hover:bg-[#3C2B98]
              flex items-center gap-4 px-[30px] py-[25px]
              rounded-t-[12px]
              rounded-b-none cursor-pointer transition duration-300
            "
          >
            <FaTools size={26} className="text-white" />
            <span className="text-white font-semibold text-[18px]">
              Infra & Layout Development
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}











// import React from "react";
// import { FaHome, FaBuilding, FaTools } from "react-icons/fa";

// export default function WhatWeDo() {
//   return (
//     <section className="w-full flex justify-center bg-[#F4F4F4] py-[60px]">
//       {/* WRAPPER (Fixed 1280px like Figma) */}
//       <div className="w-full max-w-[1450px] px-[20px] md:px-[125px] flex flex-col gap-[30px]">
//         {/* TITLE */}
//         <h1 className="text-center text-[38px] md:text-[45px] font-semibold text-[#3C2B98] leading-tight">
//           What <span className="text-[#F3D32C]">We Do</span>
//         </h1>

//         {/* 3 BUTTON GRID */}
//         <div
//           className="
//           w-full grid grid-cols-1 md:grid-cols-3 gap-[30px]
//         "
//         >
//           {/* CARD 1 */}
//           <div
//             className="
//             bg-[#E5D535] hover:bg-[#3C2B98]
//             flex items-center gap-4 px-[30px] py-[25px]
//              rounded-t-[12px]  /* round top */
//       rounded-b-none cursor-pointer transition
//           "
//           >
//             <FaHome size={26} className="text-white" />
//             <span className="text-white font-semibold text-[18px]">
//               Residential Projects
//             </span>
//           </div>

//           {/* CARD 2 */}
//           <div
//             className="
//             bg-[#E9D535] hover:bg-[#3C2B98]
//             flex items-center gap-4 px-[30px] py-[25px]
//              rounded-t-[12px]  /* round top */
//       rounded-b-none cursor-pointer transition
//           "
//           >
//             <FaBuilding size={26} className="text-white" />
//             <span className="text-white font-semibold text-[18px]">
//               Commercial & Institutional Buildings
//             </span>
//           </div>

//           {/* CARD 3 */}
//           <div
//             className="
//             bg-[#E9D535] hover:bg-[#3C2B98]
//             flex items-center gap-4 px-[30px] py-[25px]
//              rounded-t-[12px]  /* round top */
//       rounded-b-none cursor-pointer transition
//           "
//           >
//             <FaTools size={26} className="text-white" />
//             <span className="text-white font-semibold text-[18px]">
//               Infra & Layout Development
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
