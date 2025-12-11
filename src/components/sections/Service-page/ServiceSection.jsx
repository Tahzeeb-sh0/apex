import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Residential Construction",
    desc: "Crafting homes that reflect your vision, from concept to completion.",
    img: "/residential.png",
  },
  {
    title: "Commercial & Institutional Buildings",
    desc: "Delivering functional and inspiring spaces for businesses and institutions.",
    img: "/residential.png",
  },
  {
    title: "Infra & Layout Development",
    desc: "Building the foundations for thriving communities and efficient infrastructure.",
    img: "/residential.png",
  },
  {
    title: "Pre-Construction Services",
    desc: "Strategic planning and preparation to ensure project success from the outset.",
    img: "/residential.png",
  },
  {
    title: "Project Management & Turnkey Execution",
    desc: "Seamless management and execution, delivering projects on time and within budget.",
    img: "/residential.png",
  },
];

export default function ServiceSection() {
  return (
    <section className="w-full flex justify-center py-16 sm:py-20 bg-[#F5F5F5]">
      <div className="w-full max-w-[1120px] px-4 sm:px-8">

        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-montserrat font-bold text-[26px] sm:text-[36px] leading-tight text-[#3C2B98]">
            Our Services
          </h2>

          <p className="mt-4 font-montserrat text-[14px] sm:text-[16px] leading-relaxed text-gray-600 max-w-[900px] mx-auto">
            With over two decades of experience in Anantapur and surrounding
            regions, we combine practical engineering, hands-on supervision and
            transparent communication to deliver projects that perform well for
            years.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 justify-items-center">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`
                group
                w-full sm:w-[500px]
                bg-white rounded-t-4xl drop-shadow-md
                flex flex-col sm:flex-row 
                p-4 sm:p-6 transition-all duration-500
                ${idx === 4 ? "sm:col-span-2 sm:mx-auto" : ""}
              `}
            >
              <div className="flex flex-col justify-between py-3">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="p-1">{item.desc}</p>

                <Link to="/projects">
                  <button
                    className="
                      mt-3 h-[42px] px-6 
                      rounded-t-[12px] rounded-b-none 
                      border border-[#3C2B98]
                      text-[#3C2B98] font-medium text-[13px] sm:text-[14px]
                      transition-all duration-300 
                      group-hover:bg-[#3C2B98] group-hover:text-white
                    "
                  >
                    View Projects
                  </button>
                </Link>
              </div>

              {/* UPDATED RESPONSIVE IMAGE */}
              <div className="overflow-hidden h-[185px] w-full sm:w-[500px] rounded-t-2xl my-3">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
