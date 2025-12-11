import React from "react";

export default function QuickFactsBand() {
  return (
    <section className="w-full flex justify-center py-12  bg-[#F8F8F8]">
      
      {/* ✅ MAIN CONTAINER */}
      <div className="w-full max-w-[1030px] flex flex-col gap-[30px]">

        {/* ✅ TITLE */}
        <div className="w-full h-[44px] flex justify-center items-center">
          <h2 className="font-montserrat font-medium text-[36px] leading-[100%] text-center">
            <span className="text-[#3C2B98]">Quick </span>
            <span className="font-bold text-[#E5D535]">Facts Band</span>
          </h2>
        </div>

        {/* ✅ CONTENT BOX */}
     <div
  className="
    w-full
    bg-white
    rounded-tl-[30px] rounded-tr-[30px]
    p-[30px]
    flex flex-wrap
    justify-between
    gap-[20px]
    shadow-sm
  "
>

          {/* ✅ ITEM 1 */}
          <div className="flex items-center gap-3 w-[48%] md:w-auto">
            <span className="font-inter font-bold text-[24px] text-gray-300">
              1
            </span>
            <div>
              <p className="font-montserrat font-bold text-[16px] text-[#505050]">
                Status
              </p>
              <p className="font-montserrat font-bold text-[16px] text-[#3C2B98]">
                In Progress
              </p>
            </div>
          </div>

          {/* ✅ ITEM 2 */}
          <div className="flex items-center gap-3 w-[48%] md:w-auto">
            <span className="font-inter font-bold text-[24px] text-gray-300">
              2
            </span>
            <div>
              <p className="font-montserrat font-bold text-[16px] text-[#505050]">
                Built-up area
              </p>
              <p className="font-montserrat font-bold text-[16px] text-[#3C2B98]">
                1,30,000 sq.ft
              </p>
            </div>
          </div>

          {/* ✅ ITEM 3 */}
          <div className="flex items-center gap-3 w-[48%] md:w-auto">
            <span className="font-inter font-bold text-[24px] text-gray-300">
              3
            </span>
            <div>
              <p className="font-montserrat font-bold text-[16px] text-[#505050]">
                Land Area
              </p>
              <p className="font-montserrat font-bold text-[16px] text-[#3C2B98]">
                8.5 Acres
              </p>
            </div>
          </div>

          {/* ✅ ITEM 4 */}
          <div className="flex items-center gap-3 w-[48%] md:w-auto">
            <span className="font-inter font-bold text-[24px] text-gray-300">
              4
            </span>
            <div>
              <p className="font-montserrat font-bold text-[16px] text-[#505050]">
                Project value
              </p>
              <p className="font-montserrat font-bold text-[16px] text-[#3C2B98]">
                8.5 Million USD
              </p>
            </div>
          </div>

          {/* ✅ ITEM 5 */}
          <div className="flex items-center gap-3 w-[48%] md:w-auto">
            <span className="font-inter font-bold text-[24px] text-gray-300">
              5
            </span>
            <div>
              <p className="font-montserrat font-bold text-[16px] text-[#505050]">
                Year of completion
              </p>
              <p className="font-montserrat font-bold text-[16px] text-[#3C2B98]">
                Target 04/2026
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
