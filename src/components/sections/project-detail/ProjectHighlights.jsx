import React, { useEffect, useState } from "react";

const images = [
  "/project1.png",
  "/project2.png",
  "/project3.png",
  "/project4.png",
];

export default function ProjectHighlightSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ AUTO IMAGE CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    // ✅ SECTION CENTERED ON PAGE
    <section className="w-full flex justify-center items-center py-20 bg-[#F8F8F8]">

      {/* ✅ SINGLE WHITE MAIN CARD */}
      <div
        className="
          w-full max-w-[1030px]
          h-[400px]
          bg-white
          rounded-[20px]
          px-[30px] py-[20px]
          flex items-center justify-between
          gap-[20px]
          shadow-sm
        "
      >
        {/* ✅ LEFT TEXT CONTENT */}
        <div className="w-[343px] flex flex-col justify-center gap-[20px]">

          <h2 className="font-montserrat font-bold text-[36px] leading-[100%] text-[#0464B8]">
            Project: Horizon <br /> Business Park
          </h2>

          <p className="font-montserrat font-medium text-[16px] leading-[100%] text-[#2D333E]">
            <span className="font-bold text-[#3C2B98]">Location:</span> Sector 62, Gurugram, India
          </p>

          <p className="font-montserrat font-medium text-[16px] leading-[100%] text-[#2D333E]">
            <span className="font-bold text-[#3C2B98]">Project Type:</span> Commercial, IT Hub
          </p>

          <button className="w-[195px] h-[40px] bg-[#E5D535] text-white font-montserrat font-medium rounded-md">
            STATUS: ONGOING
          </button>
        </div>

        {/* ✅ IMAGE INSIDE SAME WHITE CARD (NO EXTRA CARD BEHIND) */}
        <div className="w-[587px] h-[346px] overflow-hidden rounded-[20px]">
          <img
            src={images[currentImage]}
            alt="Project"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

      </div>
    </section>
  );
}
