import React from "react";

const similarProjects = [
  {
    title: "SLNS Villas",
    location: "Anantapur",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), approx. ₹20 Cr.",
    img: "/villa1.png",
  },
  {
    title: "SLNS Villas",
    location: "Anantapur",
    desc: "1,30,000 sq.ft campus (cellar + ground + 5 floors), approx. ₹20 Cr.",
    img: "/villa1.png",
  },
];

export default function EnquiryAndSimilarSection() {
  return (
    <section className="w-full bg-[#F8F8F8] py-20 flex justify-center">
      {/* ✅ MAIN CONTAINER */}
      <div className="w-full max-w-[1280px] px-[125px] flex gap-[50px]">
        {/* ================= LEFT CARD (ENQUIRY) ================= */}
        <div className="w-[490px] h-[475px] bg-white rounded-tl-[20px] rounded-tr-[20px] p-[30px]">
          <div className="w-[430px] h-[415px] flex flex-col gap-[20px]">
            <div>
              <h3 className="font-montserrat font-medium text-[24px] text-[#3C2B98]">
                Enquiry
              </h3>
              <p className="mt-1 font-inter font-medium text-[16px] text-[#595959]">
                Our team will contact you to confirm your enquiry
              </p>
            </div>

            {/* ✅ FORM */}
            <form className="w-full flex flex-col gap-[20px] mt-2">
              {/* FULL NAME */}
              <div className="w-full flex flex-col gap-[6px]">
                <label className="font-inter text-[14px] text-[#595959]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-[39px] border border-[#595959]/50 rounded-[8px] p-[10px] outline-none"
                />
              </div>

              {/* PHONE */}
              <div className="w-full flex flex-col gap-[6px]">
                <label className="font-inter text-[14px] text-[#595959]">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full h-[39px] border border-[#595959]/50 rounded-[8px] p-[10px] outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div className="w-full flex flex-col gap-[6px]">
                <label className="font-inter text-[14px] text-[#595959]">
                  Message (Optional)
                </label>
                <textarea
                  placeholder="For any special request"
                  className="w-full h-[103px] border border-[#595959]/50 rounded-[8px] p-[10px] outline-none resize-none"
                ></textarea>
              </div>

              {/* ✅ BUTTON */}
              <div className="w-full flex justify-end mt-2">
  <button
    type="submit"
    className="
      w-[127px] h-[20px]
      rounded-tl-[10px] rounded-tr-[10px]
      bg-gradient-to-r from-[#3C2B98] to-[#F5F5F5]
      text-white text-[12px] font-montserrat font-medium
      flex items-center justify-center
      transition-all duration-300
      hover:bg-[#3C2B98] hover:from-[#3C2B98] hover:to-[#3C2B98]
    "
  >
    Submit Enquiry
  </button>
</div>

            </form>
          </div>
        </div>

        {/* ================= RIGHT SIDE (SIMILAR PROJECTS) ================= */}
        <div className="w-[490px] h-[387px] flex flex-col gap-[30px]">
          {/* ✅ TITLE */}
          <h3 className="font-inter font-medium text-[24px] text-[#3C2B98]">
            Similar <span className="font-bold text-[#E5D535]">Projects</span>
          </h3>

          {/* ✅ PROJECT CARDS */}
          <div className="flex gap-[37px]">
            {similarProjects.map((item, idx) => (
              <div
                key={idx}
                className="w-[226.5px] h-[328px] bg-white rounded-tl-[10px] rounded-tr-[10px] shadow-sm overflow-hidden"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />

                {/* CONTENT */}
                <div className="p-3 flex flex-col justify-between h-[148px]">
                  <div>
                    <h4 className="font-montserrat font-medium text-[16px] text-[#2E2E2E]">
                      {item.title}
                    </h4>
                    <p className="font-inter text-[13px] text-gray-600">
                      {item.location}
                    </p>
                    <p className="mt-1 font-inter text-[12px] text-gray-600 leading-tight">
                      {item.desc}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
                      w-[206.5px] h-[36px]
                      rounded-tl-[10px] rounded-tr-[10px]
                      text-white font-montserrat text-[13px]
                      bg-[linear-gradient(90deg,_#3C2B98_0%,_#F5F5F5_110.56%)]
                      transition-all duration-300
      hover:bg-[#3C2B98] hover:from-[#3C2B98] hover:to-[#3C2B98]
                    "
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
