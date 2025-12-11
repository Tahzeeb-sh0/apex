import React, { useState } from "react";
import { Link } from "react-router-dom";


const TABS = ["All", "Ongoing", "Completed", "Upcoming"];


const allProjects = [
  // 12 cards (3 rows) – status mix
  {
    title: "SLNS Villas(North)",
    location: "Alamuru Road, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/SLN-NORTH.jpg",
    status: "Completed",
  },
  {
    title: "SLN North Street View",
    location: "Reddyapalli, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/SLN-NORTH-STREET-VIEW.jpg",
    status: "Ongoing",
  },
  {
    title: "SLN East Street View",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/SLN-EAST-STREET-VIEW.jpg",
    status: "Upcoming",
  },
  {
    title: "SLNS Villas(West)",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/SLN-WEST.jpg",
    status: "Completed",
  },
  {
    title: "Gouthami Villas",
    location: "Reddyapalli, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/GOUTHAMI-VILLAS.jpg",
    status: "Ongoing",
  },
  {
    title: "Gouthami Villas(North)",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/GOUTHAMI-VILLAS-NORTHT.jpg",
    status: "Upcoming",
  },
  {
    title: "SLNS Villas(East)",
    location: "Alamuru Road, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/SLN-NORTH.jpg",
    status: "Completed",
  },
  {
    title: "Gouthami Villas(East)",
    location: "Reddyapalli, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/GOUTHAMI-VILLAS-EAST.jpg",
    status: "Ongoing",
  },
  {
    title: "Jayalakshmi Villas",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/JAYALAKSHMI-VILLAS.jpg",
    status: "Upcoming",
  },
  {
    title: "SLN Arival View",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/SLN-ARIAL-VIEW.jpg",
    status: "Completed",
  },
  {
    title: "Jayalakshmi Villas(East)",
    location: "Reddyapalli, Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/JAYALAKSHMI-VILLAS-EAST.jpg",
    status: "Ongoing",
  },
  {
    title: "Sri Chaitanya School",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/1.png",
    status: "Upcoming",
  },

  {
    title: "Bellary Road Project",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/BELLARY-ROAD.jpg",
    status: "Upcoming",
  },
  {
    title: "Arka Garden",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/ARKA_GARDEN.jpg",
    status: "Upcoming",
  },
  {
    title: "Apex Nivas",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/APEX-NIVAS.jpg",
    status: "Upcoming",
  },
  {
    title: "Apex Happy Homes(West)",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/APEX-HAPPY-HOMES-WEST.jpg",
    status: "Upcoming",
  },
  {
    title: "Apex Happy Homes(East)",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/APEX-HAPPY-HOMES-EAST.jpg",
    status: "Upcoming",
  },
  {
    title: "Apex Arcade",
    location: "Anantapuramu",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), project value approx. ₹20 Cr.",
    img: "/images/project-images/APEX-ARCADE.jpg",
    status: "Upcoming",
  },
];
export default function ProjectsGridSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects =
    activeTab === "All"
      ? allProjects
      : allProjects.filter((p) => p.status === activeTab);

  const itemsPerPage = 12;
  const totalPages = 5;
  const start = (currentPage - 1) * itemsPerPage;
  const visibleProjects = filteredProjects.slice(start, start + itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="w-full flex justify-center bg-white py-10 sm:py-16">
      <div className="w-full max-w-[1030px] px-3 sm:px-4 flex flex-col gap-[20px]">

        {/* ✅ TABS — horizontal scroll on small screens */}
        <div className="w-full h-[54px] flex items-end border-b border-gray-200 overflow-x-auto no-scrollbar">
          <div className="flex gap-5 sm:gap-8 text-[13px] sm:text-[14px] font-montserrat font-medium text-gray-500">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`
                  pb-[10px] pt-[14px] sm:pb-[13px] sm:pt-[16px]
                  border-b-3 whitespace-nowrap
                  ${
                    activeTab === tab
                      ? "text-[#3C2B98] border-b-[3px] border-[#3C2B98]"
                      : "border-b-[3px] border-transparent hover:text-[#3C2B98]"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ RESPONSIVE GRID */}
        <div className="w-full flex flex-col gap-[20px] sm:gap-[30px]">
          <div
            className="
              grid
              grid-cols-1 
              xs:grid-cols-2 
              lg:grid-cols-4
              gap-[20px] sm:gap-[30px]
            "
          >
            {visibleProjects.map((item, idx) => (
              <div
                key={idx}
                className="
                  group
                  w-full
                  bg-[#F5F5F5] 
                  rounded-tl-[10px] rounded-tr-[10px]
                  shadow-md flex flex-col overflow-hidden
                  h-[300px] sm:h-[315px]
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-full h-[150px] sm:h-[180px]
                      object-cover
                      rounded-tl-[10px] rounded-tr-[10px]
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="w-full p-[10px] flex flex-col justify-between gap-[8px] sm:gap-[10px]">
                  <div>
                    <h4 className="font-montserrat font-medium text-[14px] sm:text-[16px] leading-[100%] text-[#2E2E2E]">
                      {item.title}
                    </h4>

                    <p className="mt-1 font-montserrat text-[12px] sm:text-[13px] leading-[120%] text-gray-600">
                      {item.location}
                    </p>

                    <p className="mt-2 font-montserrat text-[10px] sm:text-[11px] leading-[140%] text-gray-600">
                      {item.desc}
                    </p>
                  </div>

                  <Link to="/projectdetail">
                    <button
                      className="
                        w-full h-[34px] sm:h-[36px]
                        flex items-center justify-center
                        text-white text-[12px] sm:text-[13px] font-montserrat font-medium
                        rounded-tl-[10px] rounded-tr-[10px]
                        bg-[linear-gradient(90deg,_#3C2B98_0%,_#F5F5F5_110.56%)]
                        transition-all duration-300
                        hover:bg-[#3C2B98]
                      "
                    >
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ PAGINATION → Mobile friendly spacing */}
        <div className="w-full flex justify-center mt-4 sm:mt-6">
          <div className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[14px] font-montserrat">
            
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-2 text-gray-500 hover:text-[#3C2B98] disabled:opacity-40"
              disabled={currentPage === 1}
            >
              {"<"}
            </button>

            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`
                  w-7 h-7 flex items-center justify-center
                  ${
                    currentPage === page
                      ? "rounded-full bg-[#3C2B98] text-white"
                      : "text-gray-600 hover:text-[#3C2B98]"
                  }
                `}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-2 text-gray-500 hover:text-[#3C2B98] disabled:opacity-40"
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
