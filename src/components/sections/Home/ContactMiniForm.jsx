import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactMiniForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    project: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    project: "",
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", phone: "", project: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
      valid = false;
    }

    if (!form.project.trim()) {
      newErrors.project = "Project type is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log("Form Data:", form);
    }
  };

  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-[40px] px-[5px]">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-[1200px]
          bg-white mt-10
          rounded-t-[24px] 
          rounded-b-none 
          px-[10px] md:px-[125px]
          py-[40px]
          flex flex-col
          gap-[10px]
          shadow-sm
        "
      >
        {/* FIRST ROW — NAME + PHONE */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[10px]">

          {/* NAME */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] text-black/70 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="
                w-full h-[45px]
                border border-[#E0E0E0]
                rounded-[8px]
                px-3
                text-[14px]
                focus:outline-none
              "
            />
            {errors.name && (
              <span className="text-red-500 text-[12px]">{errors.name}</span>
            )}
          </div>

          {/* PHONE */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] text-black/70 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="
                w-full h-[45px]
                border border-[#E0E0E0]
                rounded-[8px]
                px-3
                text-[14px]
                focus:outline-none
              "
            />
            {errors.phone && (
              <span className="text-red-500 text-[12px]">{errors.phone}</span>
            )}
          </div>
        </div>

        {/* SECOND ROW — PROJECT TYPE */}
        <div className="w-full flex flex-col gap-1 mt-[5px]">
          <label className="text-[14px] text-black/70 font-medium">
            Project Type
          </label>
          <input
            type="text"
            placeholder="Enter Project Type"
            value={form.project}
            onChange={(e) =>
              setForm({ ...form, project: e.target.value })
            }
            className="
              w-full h-[45px]
              border border-[#E0E0E0]
              rounded-[8px]
              px-3
              text-[14px]
              focus:outline-none
            "
          />
          {errors.project && (
            <span className="text-red-500 text-[12px]">{errors.project}</span>
          )}
        </div>

        {/* BUTTON */}
        <div className="w-full flex justify-end mt-[10px]">
          <button
            type="submit"
            className="
              h-[45px] px-8
              rounded-t-[12px]
              rounded-b-none
              text-[15px]
              font-medium
              text-white
              transition-all duration-300

              bg-[linear-gradient(90deg,#3C2B98_0%,#F5F5F5_110%)]
              hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_100%)]
            "
          >
            Send
          </button>
        </div>

      </form>
    </section>
  );
}
