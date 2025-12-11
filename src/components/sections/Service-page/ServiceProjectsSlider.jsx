// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const projects = [
//   {
//     title: "SLNS Villas",
//     location: "Alamuru Road, Anantapuramu",
//     desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
//     img: "1.png",
//   },
//   {
//     title: "Arka Gardens",
//     location: "Reddyapalli, Anantapuramu",
//     desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
//     img: "/ARKA_GARDEN[1].jpg",
//   },
//   {
//     title: "Sri Chaitanya",
//     location: "Anantapuramu",
//     desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
//     img: "/1.png",
//   },
//   {
//     title: "SLNS Villas",
//     location: "Alamuru Road, Anantapuramu",
//     desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
//     img: "/1.png",
//   },
//   {
//     title: "Arka Gardens",
//     location: "Reddyapalli, Anantapuramu",
//     desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
//     img: "/1.png",
//   },
// ];

// export default function ServiceProjectsSlider() {
//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     if (!sliderRef.current) return;
//     sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     if (!sliderRef.current) return;
//     sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
//   };

//   return (
//     <section className="w-full bg-white py-20">
//       {/* ✅ HEADING + CONTROLLERS */}
//       <div className="max-w-[1280px] mx-auto px-[20px] sm:px-[60px] lg:px-[125px] flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
//         <h3 className="font-montserrat font-medium text-[16px] sm:text-[20px] lg:text-[30px] text-[#3C2B98] max-w-[900px]">

//       {/* =========================== */}
//       {/*     HEADING + CONTROLLERS   */}
//       {/* =========================== */}
//       <div className="max-w-[1280px] mx-auto px-[20px] sm:px-[60px] lg:px-[125px] 
//         flex items-center justify-between mb-10 gap-4">

//         <h3 className="font-montserrat font-medium text-[16px] sm:text-[20px] lg:text-[18px] text-[#3C2B98] max-w-[900px]">
//           Explore some of the projects where these{" "}
//           <span className="text-[#F3D32C]">
//             services have been successfully delivered.
//           </span>
//         </h3>

//         <div className="flex items-center gap-3 shrink-0">
          

//           <button
//             onClick={scrollLeft}
//             className="w-9 h-9 rounded-full bg-[#E9E6F7] flex items-center justify-center 
//             hover:bg-[#3C2B98] hover:text-white transition"
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             onClick={scrollRight}
//             className="w-9 h-9 rounded-full bg-[#3C2B98] text-white flex items-center justify-center 
//             hover:opacity-80 transition"
//           >
//             <ChevronRight size={18} />
//           </button>

//         </div>
//       </div>

//       {/* ✅ SLIDER (SCROLLBAR COMPLETELY HIDDEN) */}
//       <div
//         ref={sliderRef}
//         className="overflow-x-auto scroll-smooth pb-6"
//         style={{
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         <style>
//           {`
//       div::-webkit-scrollbar {
//         display: none;
//       }
//     `}
//         </style>

//       {/* =========================== */}
//       {/*           SLIDER            */}
//       {/* =========================== */}

//       <div ref={sliderRef} className="overflow-x-auto no-scrollbar scroll-smooth">
//         <div className="flex gap-[20px] sm:gap-[30px] w-max px-[20px] sm:px-[60px] lg:px-[125px]">

//           {projects.map((item, idx) => (
//             <div
//               key={idx}
//               className="group w-[220px] sm:w-[235px] h-[340px] bg-white rounded-tl-[10px] rounded-tr-[10px] shadow-md flex flex-col overflow-hidden"
//             >
//               {/* ✅ IMAGE */}
//               className="group w-[220px] sm:w-[235px] h-[315px] bg-white 
//               rounded-tl-[10px] rounded-tr-[10px] shadow-md flex flex-col overflow-hidden"
//             >

//               {/* IMAGE */}
//               <div className="overflow-hidden">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-[220px] sm:w-[235px] h-[180px] object-cover rounded-tl-[10px] rounded-tr-[10px] transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* ✅ CONTENT */}
//               <div className="w-full h-[160px] p-[10px] flex flex-col justify-between gap-[10px] transition-all duration-500 opacity-90 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
//                 <div>
//                   <h4 className="font-montserrat font-medium text-[16px] text-[#2E2E2E]">
//                     {item.title}
//                   </h4>

//                   <p className="mt-1 text-[13px] text-gray-600">
//                     {item.location}
//                   </p>

//                   <p className="mt-2 text-[11px] text-gray-600">{item.desc}</p>
//                 </div>

//                 {/* ✅ BUTTON */}
//                 <button className="w-[215px] h-[36px] flex items-center justify-center px-[20px] py-[8px] text-white text-[13px] font-montserrat font-medium rounded-tl-[10px] rounded-tr-[10px] bg-[linear-gradient(90deg,_#3C2B98_0%,_#F5F5F5_110.56%)] transition-all duration-300 hover:bg-[#3C2B98]">
//                   className="w-full h-[180px] object-cover rounded-tl-[10px] rounded-tr-[10px]
//                   transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-[10px] flex flex-col justify-between gap-[10px] h-[135px]">

//                 <div>
//                   <h4 className="font-montserrat font-medium text-[16px] text-[#2E2E2E] leading-tight">
//                     {item.title}
//                   </h4>

//                   <p className="mt-1 font-montserrat text-[13px] text-gray-600 leading-tight">
//                     {item.location}
//                   </p>

//                   {item.desc && (
//                     <p className="mt-2 font-montserrat text-[11px] text-gray-600 leading-snug">
//                       {item.desc}
//                     </p>
//                   )}
//                 </div>

//                 {/* BUTTON */}
//                 <button
//                   className="
//                     w-full h-[36px] flex items-center justify-center
//                     text-white text-[13px] font-montserrat font-medium
//                     rounded-tl-[10px] rounded-tr-[10px]
//                     bg-[linear-gradient(90deg,#3C2B98_0%,#F5F5F5_110%)]
//                     hover:bg-[#3C2B98] transition-all duration-300
//                   "
//                 >
//                   View Project
//                 </button>

//               </div>

//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "SLNS Villas",
    location: "Alamuru Road, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "1.png",
  },
  {
    title: "Arka Gardens",
    location: "Reddyapalli, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/ARKA_GARDEN[1].jpg",
  },
  {
    title: "Sri Chaitanya",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/1.png",
  },
  {
    title: "SLNS Villas",
    location: "Alamuru Road, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/1.png",
  },
  {
    title: "Arka Gardens",
    location: "Reddyapalli, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/1.png",
  },
];

export default function ServiceProjectsSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 260, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-20">

      {/* HEADING + CONTROLLERS */}
      <div className="max-w-[1280px] mx-auto px-[20px] sm:px-[60px] lg:px-[125px] 
        flex items-center justify-between mb-10 gap-4">

        <h3 className="font-montserrat font-medium text-[16px] sm:text-[20px] lg:text-[18px] text-[#3C2B98] max-w-[900px]">
          Explore some of the projects where these{" "}
          <span className="text-[#F3D32C]">services have been successfully delivered.</span>
        </h3>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={scrollLeft}
            className="w-9 h-9 rounded-full bg-[#E9E6F7] flex items-center justify-center 
            hover:bg-[#3C2B98] hover:text-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="w-9 h-9 rounded-full bg-[#3C2B98] text-white flex items-center justify-center 
            hover:opacity-80 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex gap-[20px] sm:gap-[30px] w-max px-[20px] sm:px-[60px] lg:px-[125px]">

          {projects.map((item, idx) => (
            <div
              key={idx}
              className="group w-[220px] sm:w-[235px] h-[340px] bg-white 
                rounded-tl-[10px] rounded-tr-[10px] shadow-md flex flex-col overflow-hidden"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[220px] sm:w-[235px] h-[180px] object-cover 
                    rounded-tl-[10px] rounded-tr-[10px]
                    transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-[10px] flex flex-col justify-between gap-[10px] h-[160px]">

                <div>
                  <h4 className="font-montserrat font-medium text-[16px] text-[#2E2E2E] leading-tight">
                    {item.title}
                  </h4>

                  <p className="mt-1 font-montserrat text-[13px] text-gray-600 leading-tight">
                    {item.location}
                  </p>

                  {item.desc && (
                    <p className="mt-2 font-montserrat text-[11px] text-gray-600 leading-snug">
                      {item.desc}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  className="w-full h-[36px] flex items-center justify-center
                    text-white text-[13px] font-montserrat font-medium
                    rounded-tl-[10px] rounded-tr-[10px]
                    bg-[linear-gradient(90deg,#3C2B98_0%,#F5F5F5_110%)]
                    hover:bg-[#3C2B98] transition-all duration-300"
                >
                  View Project
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
