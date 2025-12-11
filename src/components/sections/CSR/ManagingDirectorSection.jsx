"use client";

export default function ManagingDirectorSection() {
  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-12 sm:py-16">
      <div className="w-full max-w-[1200px] px-4 md:px-8 flex flex-col gap-10">

        {/* TOP HEADING */}
        <div className="text-center">
          <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-semibold text-[#3C2B98] leading-snug">
            Message from Our Managing Director
          </h2>
          <p className="text-[20px] sm:text-[24px] md:text-[32px] font-bold text-[#F3D32C] mt-1 leading-snug">
            B. Thirupalu, B.Tech (Civil)
          </p>
        </div>

        {/* WHITE CARD */}
        <div className="bg-white rounded-t-[40px] rounded-b-none shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-5 sm:px-10 py-8 sm:py-12">
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            
            {/* PHOTO */}
            <div className="flex justify-center w-full md:w-auto">
              <img
                src="/CSR/Director.svg"
                alt="Managing Director"
                className="w-[220px] sm:w-[260px] md:w-[300px] h-auto rounded-[14px] object-cover shadow-sm"
              />
            </div>

            {/* TEXT */}
            <div className="text-left text-[#444] text-[14px] sm:text-[15px] leading-relaxed">
              <p className="font-semibold text-[16px] sm:text-[18px] text-[#3C2B98]">
                Mr. B. Thirupalu
              </p>
              <p className="text-[13px] sm:text-[14px] text-[#121212] mb-3">
                Managing Director, Apex Groups
              </p>

              <p className="mb-3 text-[#555]">
                “Construction is a noble profession. Every brick laid has the power
                to impact lives. At Apex Constructions, we consider it our
                responsibility to help build the spiritual, cultural and social
                infrastructure of our community.
              </p>

              <p className="mb-3 text-[#555]">
                For years, we have supported temples, churches, masjids, old age
                homes and welfare centers—not for publicity, but out of gratitude
                to the society that shaped us.
              </p>

              <p className="text-[#505050]">
                We believe that true growth happens when businesses uplift the
                people around them.”
              </p>
            </div>

          </div>
        </div>

      
      </div>
    </section>
  );
}
