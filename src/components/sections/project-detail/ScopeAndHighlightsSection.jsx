import React from "react";

export default function ScopeAndHighlightsSection() {
  return (
    <section className="w-full flex justify-center py-8 -mt-21 bg-[#F8F8F8]">
      {/* ✅ MAIN CONTAINER */}
      <div
        className="
          w-full max-w-[1280px]
          px-[20px] lg:px-[125px]
          flex flex-col lg:flex-row
          gap-[40px]
        "
      >
        {/* ✅ SCOPE OF WORK CARD */}
        <div
          className="
            w-full lg:w-[490px]
            bg-[#3C2B98]
            rounded-tl-[30px] rounded-tr-[30px]
            px-[50px] py-[30px]
            flex flex-col gap-[20px]
          "
        >
          <h3 className="font-montserrat font-bold text-[24px] text-[#E5D535]">
            Scope of Work
          </h3>

          <ul className="font-montserrat font-semibold text-[16px] text-white flex flex-col gap-[10px]">
            <li>• Layout planning & approvals</li>
            <li>• Road and drainage works</li>
            <li>• Electrical infrastructure</li>
            <li>• Park development</li>
            <li>• Boundary walls / entrance arch</li>
          </ul>
        </div>

        {/* ✅ HIGHLIGHTS CARD */}
        <div
          className="
            w-full lg:w-[490px]
            bg-[#3C2B98]
            rounded-tl-[30px] rounded-tr-[30px]
            px-[50px] py-[30px]
            flex flex-col gap-[20px]
          "
        >
          <h3 className="font-montserrat font-bold text-[24px] text-[#E5D535]">
            Highlights
          </h3>

          <ul className="font-montserrat font-semibold text-[16px] text-white flex flex-col gap-[10px]">
            <li>• Delivered within 12 months</li>
            <li>• 15% mortgage plots released under AHUDA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
