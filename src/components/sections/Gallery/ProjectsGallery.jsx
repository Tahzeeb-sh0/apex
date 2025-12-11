"use client";

import React, { useState } from "react";

const TABS = ["All", "Residential", "Commercial", "Industrial", "Interior"];

const PROJECTS = [
  { id: 1, src: "/Gallery/img1.svg", category: "Residential" },
  { id: 2, src: "/Gallery/img2.svg", category: "Residential" },
  { id: 3, src: "/Gallery/img3.svg", category: "Residential" },

  { id: 4, src: "/Gallery/img4.svg", category: "Commercial" },
  { id: 5, src: "/Gallery/img5.svg", category: "Commercial" },
  { id: 6, src: "/Gallery/img6.svg", category: "Commercial" },

  { id: 7, src: "/Gallery/img7.svg", category: "Industrial" },
  { id: 8, src: "/Gallery/img8.svg", category: "Industrial" },
  { id: 9, src: "/Gallery/img9.svg", category: "Industrial" },

  { id: 10, src: "/Gallery/img10.svg", category: "Interior" },
  { id: 11, src: "/Gallery/img11.svg", category: "Interior" },
  { id: 12, src: "/Gallery/img12.svg", category: "Interior" },
];

export default function ProjectsGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === activeTab);

  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-12 md:py-16">
      <div className="w-full max-w-[1300px] px-4 md:px-8">
        {/* ----------------------- TABS ----------------------- */}
        <div className="flex items-center gap-6 text-sm font-semibold text-[#555] mb-10 border-b border-black/5 pb-3">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 transition-all duration-200 ${
                activeTab === tab
                  ? "text-[#5f37c7]"
                  : "text-[#555] hover:text-[#5f37c7]"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute left-0 -bottom-px h-0.5 w-full bg-[#5f37c7] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* ----------------------- GRID ----------------------- */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="
               group bg-white px-1 rounded-t-2xl 
                shadow-[0_4px_18px_rgba(0,0,0,0.1)] 
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
                transition-all duration-300
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.src}
                  alt={project.category}
                  className="  w-full h-full object-cover rounded-t-xl 
                             transition-transform duration-500 scale-105"
                />
              <div
  className="
    absolute inset-0 
    bg-gradient-to-t from-[#3b2b988d] via-[#735fe41a] to-transparent
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
  "
></div>


                {/* SLIDING TEXT (BOTTOM → UP → BOTTOM) */}
<div
  className="
    absolute bottom-4 left-1/2
    text-white text-lg font-semibold

    opacity-0 -translate-x-[250%]
    group-hover:opacity-100 group-hover:-translate-x-1/2

    transition-all duration-600
  "
>
  {project.category}
</div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
