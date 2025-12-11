import { div } from "framer-motion/client";
import React from "react";
import {
  FaRegUser,
  FaTools,
  FaBalanceScale,
  FaCalculator,
  FaDraftingCompass,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const item = [
  {
    id: 1,
    icon: <FaTools size={32} color="#E5D535" />,
    title: "Project Engineer",
    dec: " Oversees project execution, ensures quality standards.",
  },
  {
    id: 2,
    icon: <FaRegUser size={32} color="#E5D535" />,
    title: "Site Engineers",
    dec: " Manages on-site activities, coordinates with teams.",
  },
  {
    id: 3,
    icon: <FaBalanceScale size={32} color="#E5D535" />,
    title: "Quantity Surveyor",
    dec: "Estimates project costs, manages budgets.",
  },
  {
    id: 4,
    icon: <FaCalculator size={32} color="#E5D535" />,
    title: "Accounts & Admin",
    dec: " Handles financial transactions, administrative tasks.",
  },
  {
    id: 5,
    icon: <FaDraftingCompass size={32} color="#E5D535" />,
    title: "Survey & Planning",
    dec: "Conducts land surveys, prepares layout plans.",
  },
];

export default function ManagingDirectorSection() {
  return (
    <section className="w-full flex  justify-center bg-[#F4F4F4] py-[30px]">
      <div className="w-full max-w-[1380px] px-[20px] md:px-[125px] flex flex-col items-center gap-[20px]">
        {/* ---- TITLE ---- */}
        <h2 className="text-[32px] md:text-[42px] font-montserrat font-semibold text-[#3C2B98] text-center">
          Managing <span className="text-[#E5D535]">Director</span>
        </h2>

        {/* ---- MAIN CARD ---- */}
        <div
          className="
            w-full 
            max-w-[1180px]
            bg-white 
            
            rounded-t-[30px]
            flex flex-col md:flex-row 
            items-center 
            justify-between
            gap-[30px]
            p-[40px] md:px-[40px] md:py-[40px]
            mb-12
          "
        >
          {/* TEXT LEFT */}
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <h3 className="font-montserrat font-semibold text-[20px] text-[#3C2B98]">
                Mr. B. Thirupalu
              </h3>
              <p className="text-[#121212] font-montserrat text-[15px] leading-tight">
                Managing Director, Apex Groups
              </p>
            </div>

            <p className="font-montserrat text-[18px] md:text-[19px] text-[#505050] leading-[130%] max-w-[900px]">
              A Civil Engineering graduate (B.Tech, 1995), Mr. Thirupalu worked
              with reputed construction companies before starting Apex
              Construction in 1997 and Apex Infra Projects in 2019. Under his
              leadership the group has delivered over two million sq.ft of
              quality residential and institutional spaces in and around
              Anantapur, supported by a dynamic in-house engineering team.
            </p>

            {/* BUTTON */}
            <Link to="/projects" className="w-full md:w-fit">
              <button
                className="
      mt-3
      h-[42px]
      px-6
      rounded-t-[12px]
      rounded-b-none
      border border-[#3C2B98]
      text-[#3C2B98]
      font-medium
      
      text-[13px] sm:text-[14px]
      
      w-full md:w-fit      /* 👉 MOBILE FULL WIDTH */
      text-center          /* 👉 CENTER TEXT */
      
      transition-all duration-300
      hover:bg-[#3C2B98] hover:text-white
    "
              >
                View Projects Executed Under His Leadership
              </button>
            </Link>
          </div>

          {/* IMAGE RIGHT */}
          <img
            src="/director.png"
            alt="Managing Director"
            className="w-[150px] h-[200px] object-cover rounded-t-[12px]
              rounded-b-none"
          />
        </div>

        {/* ---- ROLE CARDS ---- */}
        <div
          className="
          w-full 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
          gap-[20px]
        "
        >
          {item.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#3C2B98] text-white rounded-t-[15px] rounded-b-none h-[170px] p-5  flex flex-col items-center text-center gap-3 shadow"
              >
                {item.icon}
                <h4 className="font-montserrat font-semibold text-[17px]">
                  {item.title}
                </h4>
                <p className="text-[13px] opacity-90 leading-tight">
                  {item.dec}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
