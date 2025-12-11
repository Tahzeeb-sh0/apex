import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCTA() {
  return (
    <section className="w-full flex justify-center bg-transparent">
      <div
        className="
          w-full max-w-[1580px]
          rounded-t-[40px]
          px-[20px] md:px-[125px]
          py-[50px]
          flex flex-col items-center
          gap-[25px]
        "
        style={{ background: "#3C2B98" }}
      >
        {/* HEADING */}
        <h2 className="text-[42px] md:text-[39px] font-bold text-center text-white">
          Planning a new{" "}
          <span className="text-[#E5D535]">project in Anantapur?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-[19px] text-white opacity-80 text-center -mt-2">
          Share your requirements our team will respond within 1 working day.
        </p>

        {/* INPUT GROUP WITH BUTTON INSIDE */}
        <div className="w-full max-w-[550px] relative">
          {/* INPUT */}
          <input
            type="text"
            placeholder="Enter Your Message"
            className="
              w-full
              h-[50px]
              bg-transparent
              border border-white
             rounded-t-[12px]  /* round top */
      rounded-b-none
              px-4 pr-[140px]
              text-white
              placeholder:text-white/80
              focus:outline-none
            "
          />

          {/* BUTTON INSIDE INPUT */}
          <Link to="/submit-message">
            <button
              className="
      absolute
      right-0 top-0
      w-[120px]
      px-4 
      py-[10px]         /* 🔥 equal top-bottom padding */
      rounded-t-[12px]  /* round top */
      rounded-b-none    /* straight bottom */
      font-semibold
      text-[#F5F5F5]
      text-[14px]
      transition
      flex items-center justify-center
      h-[35px]  
      mt-2 mb-2    
      mr-1    
       /* NORMAL GRADIENT */
    bg-[linear-gradient(90deg,#E5D535_11.81%,#F5F5F5_154.97%)]

    /* HOVER FULL YELLOW (VIA GRADIENT) */
    hover:bg-[linear-gradient(90deg,#E5D535_0%,#E5D535_100%)]

    "
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
