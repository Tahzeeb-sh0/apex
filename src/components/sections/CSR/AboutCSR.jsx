"use client";

export default function AboutCSR() {
  return (
    <section className="w-full py-16 bg-[#f5f5f5]">
      {/* Outer padding gives space left-right on mobile */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* White card */}
        <div className="grid md:grid-cols-2 gap-8 items-center rounded-[20px] bg-white p-5 sm:p-7">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0464B8] mb-4 sm:mb-6">
              About Apex CSR
            </h2>

            <div className="space-y-3 sm:space-y-4 text-[#3C2B98] leading-relaxed font-medium text-[14px] sm:text-[16px]">
              <p>
                Apex Constructions has always believed that construction is not just
                a business but a service to society.
              </p>

              <p>
                For more than two decades, Apex has taken an active role in supporting
                religious institutions, community spaces, and welfare organizations by
                offering free construction services, material support, and technical
                guidance for essential structures.
              </p>

              <p>
                These contributions include building prayer halls, dining halls,
                mandapams, fencing walls, sanitation facilities, and assisting temples,
                churches, masjids, goshalas and old age homes in their development
                activities.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center mt-4 md:mt-0">
            <img
              src="/CSR/aboutCSR.svg"
              alt="About CSR"
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px] h-auto rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
