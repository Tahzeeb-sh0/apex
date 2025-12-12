import React, { useEffect, useState } from "react";

const images = [
  "/project1.png",
  "/project2.png",
  "/project3.png",
  "/project4.png",
];

export default function ProjectHighlightSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // AUTO IMAGE CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center items-center py-12 sm:py-20 bg-[#F8F8F8]">

      {/* MAIN CARD */}
      <div
        className="
          w-full max-w-[1030px]
          bg-white rounded-[20px]
          px-4 sm:px-[30px] py-[20px]
          flex flex-col lg:flex-row
          items-center justify-between
          gap-[20px] lg:gap-[30px]
          shadow-sm
        "
      >
        {/* LEFT TEXT CONTENT */}
        <div
          className="
            w-full lg:w-[343px]
            flex flex-col justify-center gap-[16px] sm:gap-[20px]
            text-center lg:text-left
          "
        >
          <h2
            className="
              font-montserrat font-bold
              text-[26px] sm:text-[32px] lg:text-[36px]
              leading-[110%]
              text-[#0464B8]
            "
          >
            Project: Horizon <br /> Business Park
          </h2>

          <p className="font-montserrat font-medium text-[14px] sm:text-[16px] text-[#2D333E]">
            <span className="font-bold text-[#3C2B98]">Location:</span> Sector 62,
            Gurugram, India
          </p>

          <p className="font-montserrat font-medium text-[14px] sm:text-[16px] text-[#2D333E]">
            <span className="font-bold text-[#3C2B98]">Project Type:</span>{" "}
            Commercial, IT Hub
          </p>

          <button
            className="
              w-[160px] sm:w-[195px] h-[38px] sm:h-[40px]
              bg-[#E5D535] text-white
              font-montserrat font-medium rounded-md
              mx-auto lg:mx-0
              text-[12px] sm:text-[14px]
            "
          >
            STATUS: ONGOING
          </button>
        </div>

        {/* IMAGE */}
        <div
          className="
            w-full lg:w-[587px]
            h-[220px] sm:h-[280px] lg:h-[346px]
            overflow-hidden rounded-[20px]
          "
        >
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
