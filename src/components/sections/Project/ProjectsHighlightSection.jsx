import React from "react";

export default function ProjectsHighlightSection() {
  return (
   <section className="w-full flex justify-center bg-[#F4F4F4] py-16">
  <div
    className="
      w-full max-w-[1280px]
      mx-auto
      px-[20px] sm:px-[60px] lg:px-[125px]
      flex flex-col lg:flex-row
      items-center
      justify-between
      gap-[75px]
      pt-[20px]
    "
  >
    {/* ✅ LEFT CONTENT (VERTICALLY CENTERED WITH IMAGE) */}
    <div className="w-full lg:w-[582px] flex flex-col justify-center gap-[20px] self-center">
      <h2 className="font-montserrat text-[24px] font-medium leading-[100%] text-[#3C2B98]">
        Construction Projects Across{" "}
        <span className="font-bold text-[#F3D32C]">
          Anantapur & Surrounding Regions
        </span>
      </h2>

      <p className="font-montserrat text-[16px] font-medium leading-[150%] text-[#3C2B98]">
        Apex Constructions & Infra Projects has delivered over two decades of
        work across residential, commercial, institutional and infra
        development. Our projects include premium villas, apartments,
        hospitals, showrooms, school campuses, and large plotted layouts
        built with quality, commitment and engineering precision.
      </p>
    </div>

    {/* ✅ RIGHT IMAGE WITH SAME TOP PADDING */}
    <div
      className="
        w-full max-w-[372px]
        h-[350px]
        border-[10px] border-white
        rounded-t-[20px]
        overflow-hidden
        shadow-md
        mt-0
      "
    >
      <img
        src="/projects-highlight.png"
        alt="Apex Construction Project"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

  );
}
