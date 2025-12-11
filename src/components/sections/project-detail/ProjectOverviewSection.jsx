import React from "react";

export default function ProjectOverviewSection() {
  return (
   <section className="w-full flex justify-center py-20 bg-[#F9F9F9]">
  <div className="w-full max-w-[1030px] flex flex-col gap-[30px]">

    {/* ✅ TITLE */}
    <h2 className="text-center font-montserrat font-medium text-[36px] leading-[100%] text-[#3C2B98]">
      Project <span className="font-bold text-[#E5D535]">Overview</span>
    </h2>

    {/* ✅ WHITE CARD CONTAINER */}
    <div
      className="
        w-full
        bg-white
        rounded-[30px]
        p-[30px]
        flex justify-center items-center
        shadow-sm
      "
    >
      <p
        className="
          max-w-[900px]
          text-center
          font-montserrat font-normal
          text-[14px]
          leading-[160%]
          text-[#505050]
        "
      >
        Arka Gardens is a 30-acre plotted development at Reddypalli,
        Anantapuramu. The layout consists of 398 residential plots with 60 ft
        and 40 ft BT roads, park, overhead water tank, underground drainage
        and electrical network, all as per AHUDA norms. Apex Infra Projects
        executed layout formation, services and infrastructure within 1
        year.
      </p>
    </div>
  </div>
</section>



  );
}
