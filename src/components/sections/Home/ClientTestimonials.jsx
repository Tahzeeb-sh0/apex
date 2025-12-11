import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.20,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
    },
  },
};

export default function ClientTestimonials() {
  return (
    <section className="w-full bg-[#F4F4F4] py-10 px-5 md:px-20">
      {/* CONTAINER WITH ANIMATION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-center text-[32px] md:text-[36px] font-semibold text-[#2E2672]"
        >
          What Our <span className="text-[#E5D535]">Client</span> Says
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-2 place-items-center"
        >
          {/* CARD 1 */}
          <motion.div
            variants={item}
            className="bg-[#E5D535] hover:bg-[#2E2672] transition-all duration-200 w-full max-w-[360px] rounded-t-[18px] rounded-b-none p-6 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-3">
              <FaQuoteLeft className="text-[41px]" />

              <div>
                <h3 className="text-[18px] font-semibold leading-tight ml-15">
                  Sarah Chen
                </h3>
                <p className="text-[13px] opacity-90 leading-tight ml-8">
                  Homeowner, SLNS Villas
                </p>
              </div>
            </div>

            <p className="text-[14px] mt-4 leading-relaxed opacity-90">
              Strong scheduling and on-site management to complete projects within
              committed timelines.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={item}
            className="bg-[#E5D535] hover:bg-[#2E2672] transition-all duration-200 w-full max-w-[360px] rounded-t-[18px] rounded-b-none p-6 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-3">
              <FaQuoteLeft className="text-[41px]" />

              <div>
                <h3 className="text-[18px] font-semibold leading-tight ml-15">
                  David Lee
                </h3>
                <p className="text-[13px] opacity-90 leading-tight ml-8">
                  Developer, Arka Gardens
                </p>
              </div>
            </div>

            <p className="text-[14px] mt-4 leading-relaxed opacity-90">
              Use of modern technologies, materials and supervision to ensure
              durability and performance.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={item}
            className="bg-[#E5D535] hover:bg-[#2E2672] transition-all duration-200 w-full max-w-[360px] rounded-t-[18px] rounded-b-none p-6 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-3">
              <FaQuoteLeft className="text-[41px]" />

              <div>
                <h3 className="text-[18px] font-semibold leading-tight ml-15">
                  Emily Wong
                </h3>
                <p className="text-[13px] opacity-90 leading-tight ml-8">
                  Principal, Sri Chaitanya School
                </p>
              </div>
            </div>

            <p className="text-[14px] mt-4 leading-relaxed opacity-90">
              Customized solutions for institutions, investors and end-users from
              first meeting to handover.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}









// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";

// export default function ClientTestimonials() {
//   return (
//     <section className="w-full bg-[#F4F4F4] py-10 px-5 md:px-20">
//       {/* Heading */}
//       <h2 className="text-center text-[32px] md:text-[36px] font-semibold text-[#2E2672]">
//         What Our <span className="text-[#E5D535]">Client</span> Says
//       </h2>

//       {/* Cards */}
//       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-2 place-items-center">
//         {/* CARD 1 */}
//         <div className="bg-[#E5D535] hover:bg-[#2E2672] transition-all duration-200 w-full max-w-[360px] rounded-t-[18px] rounded-b-none p-6 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
//           <div className="flex items-center gap-3">
//             <FaQuoteLeft className="text-[41px]" />

//             <div>
//               <h3 className="text-[18px] font-semibold leading-tight ml-15">
//                 Sarah Chen
//               </h3>
//               <p className="text-[13px] opacity-90 leading-tight ml-8">
//                 Homeowner, SLNS Villas
//               </p>
//             </div>
//           </div>

//           <p className="text-[14px] mt-4 leading-relaxed opacity-90">
//             Strong scheduling and on-site management to complete projects within
//             committed timelines.
//           </p>
//         </div>

//         {/* CARD 2 */}
//         <div className="bg-[#E5D535] hover:bg-[#2E2672] transition-all duration-200 w-full max-w-[360px] rounded-t-[18px] rounded-b-none p-6 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
//           <div className="flex items-center gap-3">
//             <FaQuoteLeft className="text-[41px]" />

//             <div>
//               <h3 className="text-[18px] font-semibold leading-tight ml-15">
//                 David Lee
//               </h3>
//               <p className="text-[13px] opacity-90 leading-tight ml-8">
//                 Developer, Arka Gardens
//               </p>
//             </div>
//           </div>

//           <p className="text-[14px] mt-4 leading-relaxed opacity-90">
//             Use of modern technologies, materials and supervision to ensure
//             durability and performance.
//           </p>
//         </div>

//         {/* CARD 3 */}
//         <div className="bg-[#E5D535] hover:bg-[#2E2672] transition-all duration-200 w-full max-w-[360px] rounded-t-[18px] rounded-b-none p-6 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
//           <div className="flex items-center gap-3">
//             <FaQuoteLeft className="text-[41px]" />

//             <div>
//               <h3 className="text-[18px] font-semibold leading-tight ml-15">
//                 Emily Wong
//               </h3>
//               <p className="text-[13px] opacity-90 leading-tight ml-8">
//                 Principal, Sri Chaitanya School
//               </p>
//             </div>
//           </div>

//           <p className="text-[14px] mt-4 leading-relaxed opacity-90">
//             Customized solutions for institutions, investors and end-users from
//             first meeting to handover.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
