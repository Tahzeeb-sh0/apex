import React from "react";

export default function ProjectsHero() {
  return (
<section className="relative w-full h-[100vh] -mt-[30px] overflow-hidden flex items-end justify-center">

      {/* ✅ BACKGROUND IMAGE */}
      <img
        src="/projects-hero.png"
        alt="Projects Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ✅ CONTENT CARD */}
      <div
        className="
          relative z-10
          w-full max-w-[1030px]
          bg-white
          rounded-tl-[30px] rounded-tr-[30px]
          px-[20px] sm:px-[40px] lg:px-[60px]
          py-[20px]
          mx-4
        "
      >

        {/* ✅ TITLE */}
        <h1 className="font-montserrat font-medium text-[26px] sm:text-[30px] lg:text-[36px] leading-[100%] text-center text-[#3C2B98]">
          Our{" "}
          <span className="font-bold text-[#F3D32C]">
            Projects
          </span>
        </h1>

        {/* ✅ PARAGRAPH */}
        <p className="mt-4 font-montserrat font-normal text-[14px] sm:text-[16px] leading-[100%] text-center text-gray-600 max-w-[850px] mx-auto">
          Explore completed, ongoing, and upcoming works across residential,
          institutional, commercial and infra sectors.
        </p>

       {/* ✅ FORM CONTAINER */}
<div className="mt-6 flex flex-col gap-[10px] w-full items-center">

  {/* ✅ SEARCH LABEL */}
  <label className="w-full max-w-[910px] text-[13px] text-gray-600 font-montserrat">
    Search by project
  </label>

  {/* ✅ SEARCH BAR (910 x 40) */}
  <div className="w-full max-w-[910px] h-[40px] flex items-center border border-gray-300 rounded-[10px] px-[12px] gap-[15px]">
    <input
      type="text"
      placeholder="Search by project name..."
      className="w-full h-full outline-none text-[13px]"
    />
  </div>

  {/* ✅ SELECT + BUTTON ROW (910 x 61) */}
  <div
    className="
      w-full max-w-[910px]
      flex flex-col sm:flex-row
      gap-[24px]
      items-end
    "
  >

    {/* ✅ PROJECT TYPE (287 x 37) */}
    <div className="w-full sm:w-[287px] flex flex-col gap-[5px]">
      <label className="text-[13px] text-gray-600 font-montserrat">
        Select Project Type
      </label>
      <select
        className="
          h-[37px]
          border border-gray-300
          rounded-[10px]
          px-[12px]
          text-[13px]
          flex justify-between
        "
      >
        <option>All</option>
        <option>Completed</option>
        <option>Ongoing</option>
        <option>Upcoming</option>
      </select>
    </div>

    {/* ✅ LOCATION (287 x 37) */}
    <div className="w-full sm:w-[287px] flex flex-col gap-[5px]">
      <label className="text-[13px] text-gray-600 font-montserrat">
        Select Location
      </label>
      <select
        className="
          h-[37px]
          border border-gray-300
          rounded-[10px]
          px-[12px]
          text-[13px]
          flex justify-between
        "
      >
        <option>All</option>
        <option>Anantapur</option>
        <option>Reddyapalli</option>
      </select>
    </div>

    {/* ✅ CALL NOW BUTTON (287 x 36) */}
    <button
      className="
        w-full sm:w-[287px]
        h-[36px]
        px-[20px] py-[8px]
        flex items-center justify-center
        gap-[10px]
        text-white text-[13px]
        font-montserrat font-medium
        rounded-tl-[10px] rounded-tr-[10px]
        bg-[linear-gradient(90deg,_#3C2B98_0%,_#F5F5F5_110.56%)]
        transition-all duration-300
        hover:!bg-[#3C2B98]
        hover:!bg-none
      "
    >
      Call Now
    </button>

  </div>
</div>

      </div>
    </section>
  );
}
