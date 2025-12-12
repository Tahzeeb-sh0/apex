import React, { useState } from "react";

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
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ---------------- VALIDATION ----------------
  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Enquiry submitted successfully!");
      console.log("FORM DATA:", form);
    }
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-16 sm:py-20 flex justify-center">
      <div
        className="
          w-full max-w-[1280px] px-4 sm:px-[40px] lg:px-[125px]
          flex flex-col lg:flex-row gap-[40px] lg:gap-[50px]
        "
      >
        {/* ================= LEFT CARD (ENQUIRY) ================= */}
        <div
          className="
            w-full lg:w-[490px] bg-white
            rounded-tl-[20px] rounded-tr-[20px]
            p-[24px] sm:p-[30px]
          "
        >
          <div className="w-full flex flex-col gap-[20px]">
            <div>
              <h3 className="font-montserrat font-medium text-[22px] sm:text-[24px] text-[#3C2B98]">
                Enquiry
              </h3>
              <p className="mt-1 font-inter text-[14px] sm:text-[16px] text-[#595959]">
                Our team will contact you to confirm your enquiry
              </p>
            </div>

            {/* ---------------- FORM ---------------- */}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-[20px] mt-2"
            >
              {/* FULL NAME */}
              <div className="flex flex-col gap-[6px]">
                <label className="font-inter text-[14px] text-[#595959]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className="w-full h-[39px] border border-[#595959]/50 rounded-[8px] p-[10px]"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-[12px]">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* PHONE */}
              <div className="flex flex-col gap-[6px]">
                <label className="font-inter text-[14px] text-[#595959]">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="w-full h-[39px] border border-[#595959]/50 rounded-[8px] p-[10px]"
                />
                {errors.phone && (
                  <span className="text-red-500 text-[12px]">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* MESSAGE OPTIONAL */}
              <div className="flex flex-col gap-[6px]">
                <label className="font-inter text-[14px] text-[#595959]">
                  Message (Optional)
                </label>
                <textarea
                  placeholder="For any special request"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full h-[103px] border border-[#595959]/50 rounded-[8px] p-[10px] resize-none"
                />
              </div>

              {/* BUTTON */}
              <div className="w-full flex justify-end mt-2">
                <button
                  type="submit"
                  className="
                    w-[120px] h-[36px]
                    rounded-tl-[10px] rounded-tr-[10px]
                    bg-gradient-to-r from-[#3C2B98] to-[#F5F5F5]
                    text-white text-[12px] font-montserrat font-medium
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
        <div className="w-full lg:w-[490px] flex flex-col gap-[25px]">
          {/* TITLE */}
          <h3 className="font-inter font-medium text-[22px] sm:text-[24px] text-[#3C2B98]">
            Similar <span className="font-bold text-[#E5D535]">Projects</span>
          </h3>

          {/* PROJECT CARDS */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 gap-[20px] lg:gap-[37px]
            "
          >
            {similarProjects.map((item, idx) => (
              <div
                key={idx}
                className="
                  w-full bg-white rounded-tl-[10px] rounded-tr-[10px]
                  shadow-sm overflow-hidden
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-3 flex flex-col justify-between h-[150px]">
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

                  {/* VIEW BUTTON */}
                  <button
                    className="
                      w-full h-[36px]
                      rounded-tl-[10px] rounded-tr-[10px]
                      text-white font-montserrat text-[13px]
                      bg-gradient-to-r from-[#3C2B98] to-[#F5F5F5]
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
