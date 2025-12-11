import React from 'react'

const Philosophy = () => {
  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-[50px]">
      <div className="w-full max-w-[1450px] px-5 md:px-[125px] flex flex-col gap-10">

        {/* TITLE */}
        <h2 className="text-center text-[36px] md:text-[41px] font-semibold text-[#3C2B98]">
          Apex CSR <span className="text-[#F3D32C]">Philosophy</span>
        </h2>

        {/* GRID */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">

          {/* CARD 1 */}
          <div className="bg-[#3C2B98] text-white rounded-t-xl p-6 shadow flex flex-col items-center text-center gap-3">
            <img src="/CSR/icon1.svg" alt="icon1" className="w-[45px] h-[45px]" />
            <h3 className="font-semibold text-[20px] leading-tight">Service to Society</h3>
            <p className="text-[15px] leading-snug opacity-90">
              We believe communities grow stronger when businesses contribute with responsibility.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#3C2B98] text-white rounded-t-xl p-6 shadow flex flex-col items-center text-center gap-3">
            <img src="/CSR/icon2.svg" alt="icon2" className="w-[45px] h-[45px]" />
            <h3 className="font-semibold text-[20px] leading-tight">Supporting Faith & Culture</h3>
            <p className="text-[15px] leading-snug opacity-90">
              Apex assists temples, churches, and masjids, uplifting cultural institutions.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#3C2B98] text-white rounded-t-xl p-6 shadow flex flex-col items-center text-center gap-3">
            <img src="/CSR/icon3.svg" alt="icon3" className="w-[45px] h-[45px]" />
            <h3 className="font-semibold text-[20px] leading-tight">Helping the Needy</h3>
            <p className="text-[15px] leading-snug opacity-90">
              We support construction at old age homes, kitchens, and welfare projects.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#3C2B98] text-white rounded-t-xl p-6 shadow flex flex-col items-center text-center gap-3">
            <img src="/CSR/icon4.svg" alt="icon4" className="w-[45px] h-[45px]" />
            <h3 className="font-semibold text-[20px] leading-tight whitespace-nowrap">
              Engineering for Good
            </h3>
            <p className="text-[15px] leading-snug opacity-90">
              We provide engineering support and manpower at zero cost for welfare.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Philosophy
