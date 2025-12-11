
import React from "react";
import { Link } from "react-router-dom";

export default function ApexCSR() {
  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-10">
      <div
        className="
          w-full max-w-full
          relative
          rounded-t-[40px]
          overflow-hidden
        "
      >
        {/* BACKGROUND */}
        <img
          src="/CSR.jpg"
          alt="CSR Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#3C2B98]/60"></div>

 {/* CONTENT */}
<div
  className="
    relative z-10
    flex items-center justify-center
    text-center text-white
    px-4 sm:px-6 md:px-10
    py-[60px] md:py-[70px] lg:py-[80px]
  "
>
  {/* INNER WRAPPER TO CONTROL WIDTH */}
  <div className="max-w-[900px] md:max-w-[800px] lg:max-w-[900px] mx-auto flex flex-col items-center gap-[24px]">
    {/* TEXT */}
    <h2
      className="
        font-normal leading-snug
        text-[22px]
        sm:text-[24px]
        md:text-[28px]
        lg:text-[32px]
      "
    >
      Apex also offers{" "}
      <span className="text-[#F3D32C] font-bold">
        free construction support to temples, churches, masjids and old age
        homes
      </span>{" "}
      as part of its social responsibility.
    </h2>

    <button
      className="
        text-[#F5F5F5]
        font-semibold
        px-8 py-3
        rounded-t-xl
        rounded-b-none
        shadow-md
        transition-all duration-300
        whitespace-nowrap
        bg-[linear-gradient(90deg,#E5D535_11.81%,#F5F5F5_154.97%)]
        hover:bg-[linear-gradient(90deg,#E5D535_0%,#E5D535_100%)]
      "
    >
      <Link to="/csr">View CSR Works</Link>
    </button>
  </div>
</div>


      </div>
    </section>
  );
}
