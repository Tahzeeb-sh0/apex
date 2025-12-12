import React, { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactDetailsPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    type: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";

    if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (!form.type.trim()) newErrors.type = "Please select a requirement type";

    if (!form.location.trim()) newErrors.location = "Location is required";

    if (!form.message.trim())
      newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log("FORM DATA:", form);
    }
  };

  return (
    <section className="relative w-full flex justify-center bg-[#F4F4F4] py-[40px] px-4">
      <div className="w-full max-w-[1280px] mt-16 flex flex-col justify-center lg:flex-row gap-[25px]">

        {/* LEFT SIDE CARD */}
        <div className="w-full lg:w-[540px] bg-white rounded-[8px] p-[30px] md:p-[40px] shadow flex flex-col gap-[20px]">

          <h2 className="text-[22px] md:text-[26px] font-semibold text-[#3C2B98]">
            Contact <span className="text-[#E5D535]">Details</span>
          </h2>

          {/* ADDRESS */}
          <div className="border border-gray-300 rounded-[6px] p-4 flex gap-3">
            <IoLocationOutline size={24} className="text-[#CD8C00] mt-[2px]" />
            <p className="text-[14px] text-[#014648] leading-snug font-semibold break-words">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Lakshmi+Sadanam,+Bellary+Bypass+Circle,+Anantapuramu+515004"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lakshmi Sadanam, Bellary Bypass Circle, <br />
                Anantapuramu – 515004 <br />
                anantapur.idn
              </a>
            </p>
          </div>

          {/* EMAIL */}
          <div className="border border-gray-300 rounded-[6px] p-4 flex gap-3">
            <TfiEmail size={22} className="text-[#CD8C00] mt-[2px]" />
            <p className="text-[14px] text-[#014648] font-semibold break-words">
              <a href="mailto:atpapex@gmail.com">atpapex@gmail.com</a>
            </p>
          </div>

          {/* INSTAGRAM */}
          <div className="border border-gray-300 rounded-[6px] p-4 flex gap-3">
            <FaInstagram size={22} className="text-[#CD8C00] mt-[2px]" />
            <p className="text-[14px] text-[#014648] font-semibold break-all">
              @apexconstructions_atp
            </p>
          </div>

          {/* WHATSAPP */}
          <div className="border border-gray-300 rounded-[6px] p-4 flex gap-3">
            <FaWhatsapp size={22} className="text-[#CD8C00] mt-[2px]" />
            <p className="text-[14px] text-[#014648] font-semibold break-all">
              @apexconstructions_officials
            </p>
          </div>

          {/* MAP — FULLY RESPONSIVE */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3859.4517809490058!2d77.58019797510781!3d14.687024785809614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQxJzEzLjMiTiA3N8KwMzQnNTguMCJF!5e0!3m2!1sen!2sin!4v1764656985527!5m2!1sen!2sin"
              className="w-full h-[260px] md:h-[320px] rounded-[8px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit} className="w-full lg:w-[540px]">
          <div className="bg-white rounded-[8px] p-[30px] md:p-[40px] shadow flex flex-col gap-[18px]">

            <h2 className="text-[22px] md:text-[26px] font-semibold text-[#3C2B98]">
              Enquiry <span className="text-[#E5D535]">Form</span>
            </h2>

            <p className="text-[16px] md:text-[18px] font-bold">Get in Touch</p>

            {/* FULL NAME */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={(e) =>
                  setForm({ ...form, fullName: e.target.value })
                }
                className="w-full h-[42px] border border-gray-300 rounded-[6px] px-3 text-[14px]"
              />
              {errors.fullName && (
                <span className="text-[12px] text-red-500">
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full h-[42px] border border-gray-300 rounded-[6px] px-3 text-[14px]"
              />
              {errors.phone && (
                <span className="text-[12px] text-red-500">{errors.phone}</span>
              )}
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full h-[42px] border border-gray-300 rounded-[6px] px-3 text-[14px]"
              />
              {errors.email && (
                <span className="text-[12px] text-red-500">
                  {errors.email}
                </span>
              )}
            </div>

            {/* TYPE */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium">
                Type of Requirement
              </label>
              <select
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value })
                }
                className="w-full h-[42px] border border-gray-300 rounded-[6px] px-3 text-[14px]"
              >
                <option value="">Select</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Institutional</option>
              </select>
              {errors.type && (
                <span className="text-[12px] text-red-500">{errors.type}</span>
              )}
            </div>

            {/* LOCATION */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium">
                Location/Site Details
              </label>
              <input
                type="text"
                placeholder="Enter location/site details"
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
                className="w-full h-[42px] border border-gray-300 rounded-[6px] px-3 text-[14px]"
              />
              {errors.location && (
                <span className="text-[12px] text-red-500">
                  {errors.location}
                </span>
              )}
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-1">
              <label className="text-[14px] font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full border border-gray-300 rounded-[6px] p-3 text-[14px]"
              ></textarea>
              {errors.message && (
                <span className="text-[12px] text-red-500">
                  {errors.message}
                </span>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="
                  h-[40px] w-[110px] 
                  text-white text-[14px]
                  rounded-t-[12px] rounded-b-none 
                  transition-all duration-300
                "
                style={{
                  background:
                    "linear-gradient(90deg, #3C2B98 0%, #F5F5F5 110%)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #3C2B98 0%, #3C2B98 100%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #3C2B98 0%, #F5F5F5 110%)")
                }
              >
                Submit
              </button>
            </div>

          </div>
        </form>

      </div>
    </section>
  );
}
