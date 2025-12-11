import React from "react";

const galleryImages = [
  "/g1.png",
  "/project2.png",
  "/project1.png",
  "/project2.png",
  "/project1.png",
  "/g1.png",
];

export default function ProjectGallerySection() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#F8F8F8]">
      <div className="w-full max-w-[1030px] flex flex-col gap-[30px] px-4">

        {/* ✅ TITLE */}
        <h2 className="text-center font-montserrat font-medium text-[36px] leading-[100%]">
          <span className="text-[#3C2B98]">Project </span>
          <span className="text-[#E5D535] font-bold">Gallery</span>
        </h2>

        {/* ✅ IMAGE GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="
                relative
                w-full h-[215px]
                rounded-tl-[20px] rounded-tr-[20px]
                overflow-hidden
                bg-white
                group
              "
            >
              {/* IMAGE */}
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />

              {/* ✅ GRADIENT OVERLAY */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                "
                style={{
                  background:
                    "linear-gradient(180deg, rgba(60, 43, 152, 0) 3.79%, rgba(60, 43, 152, 0.4) 64.27%)",
                }}
              ></div>

              {/* ✅ BOTTOM SLIDE TEXT */}
              <div
                className="
                  absolute bottom-[-40px] left-0 w-full
                  text-center text-white font-montserrat font-medium
                  text-[14px]
                  py-2
                  transition-all duration-300
                  group-hover:bottom-0
                "
              >
                View Full Project
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
