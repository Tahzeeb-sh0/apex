import React from "react";
import {
  FaFileAlt,
  FaClipboardList,
  FaRegHandshake,
  FaCalculator,
} from "react-icons/fa";
import { motion } from "framer-motion";

const item = [
  {
    id: 1,
    img: "/carbon_document-requirements0.svg",
    title: "Understanding\nRequirements",
    dec1: "Meeting, site visit,",
    dec2: "budget discussion",
  },
  {
    id: 2,
    img: "/carbon_document-requirements.svg",
    title: "Understanding\nRequirements",
    dec1: "Meeting, site visit,",
    dec2: "budget discussion",
  },
  {
    id: 3,
    img: "/carbon_document-requirements2.svg",
    title: "Understanding\nRequirements",
    dec1: "Meeting, site visit,",
    dec2: "budget discussion",
  },
  {
    id: 3,
    img: "/carbon_document-requirements3.svg",
    title: "Understanding\nRequirements",
    dec1: "Meeting, site visit,",
    dec2: "budget discussion",
  },

];

export default function ApproachProcess() {
  return (
    <section className="w-full flex justify-center bg-[#F5F5F5] py-[50px] px-4">
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-[30px]">
        {/* ---- TITLE OUTSIDE THE CARD ---- */}
        <h2
          className="
          text-center 
          font-montserrat font-semibold
          text-[26px] sm:text-[30px] md:text-[38px]
        "
        >
          <span className="text-[#3C2B98]">Approach & </span>
          <span className="text-[#E5D535]">Process</span>
        </h2>

        {/* ---- WHITE CARD ---- */}
        <div
          className="
            w-full max-w-[1130px]
            bg-white
            rounded-t-[40px]
            shadow-md
            px-[20px] py-[25px]
            sm:px-[30px] sm:py-[35px]
            md:px-[40px] md:py-[40px]
          "
        >
          {/* GRID */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-4 
              gap-[25px] sm:gap-[30px]
              text-center
              place-items-center
            "
          >
            {item.map((item) => {
              return (
                <div className="flex flex-col items-center gap-2">
                  <img src={item.img} alt="" />
                  <h4 className="text-[#3C2B98] font-montserrat font-semibold text-[15px] sm:text-[16px]">
                    {item.title}
                  </h4>
                  <p className="text-[#505050] text-[12px] sm:text-[13px] leading-tight">
                   {item.dec1} <br />{item.dec2}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
