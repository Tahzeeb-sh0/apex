import React from "react";

export default function LocationMapSection() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#F8F8F8]">
      {/* ✅ MAIN CONTAINER */}
      <div className="w-full max-w-[1030px] flex flex-col gap-[30px] px-4">
        
        {/* ✅ TITLE */}
        <h2 className="text-center font-montserrat font-medium text-[36px] leading-[100%]">
          <span className="text-[#3C2B98]">Location </span>
          <span className="text-[#E5D535] font-bold">Map</span>
        </h2>

        {/* ✅ MAP CONTAINER (NO BORDER RADIUS) */}
        <div className="relative w-full h-[450px] bg-white overflow-hidden">

          {/* ✅ MAP IMAGE */}
          <img
            src="/location-map.png"
            alt="Project Location"
            className="w-full h-full object-cover"
          />

          {/* ✅ VIEW LARGER MAP BUTTON */}
          <button
            className="
              absolute top-[12px] left-[12px]
              bg-white
              px-[12px] py-[4px]
              rounded-md
              text-[12px]
              font-inter font-normal
              leading-[145%]
              text-[#0369F0]
              shadow
            "
          >
            View larger map
          </button>
        <img
  src="/map-brand.png"
  alt="Map Brand"
  className="
    absolute
    bottom-[10px]
    left-[10px]
    w-[49px]
    h-[49px]
    object-contain
    p-[2px]
  "
/>

        </div>
      </div>
    </section>
  );
}
