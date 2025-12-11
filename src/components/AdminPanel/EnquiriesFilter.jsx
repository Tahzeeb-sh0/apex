import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function EnquiryFilter() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [project, setProject] = useState("All");

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setProject("All");
  };

  return (
    <div className="w-full bg-[#F5F7F8]  p-4 sm:p-6">

      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
        All Enquiries
      </h2>

      {/* COUNTS */}
      <div className="text-sm text-gray-500 mb-4">
        Total: 124&nbsp;&nbsp; Pending: 8&nbsp;&nbsp; Resolved: 116
      </div>

      {/* FILTER CARD */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm space-y-5">

        {/* SEARCH BAR */}
        <div className="w-full relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search by name, Phone, or Project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full border border-gray-300 rounded-lg 
              py-2.5 pl-10 pr-3 
              focus:ring-2 focus:ring-gray-50 focus:outline-none
              text-sm sm:text-base
            "
          />
        </div>

        {/* FILTER ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* STATUS FILTER */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Status</p>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="
                w-full border border-gray-300 rounded-lg py-2 px-3
                focus:ring-2 focus:ring-gray-50 focus:outline-none
                text-sm
              "
            >
              <option>All</option>
              <option>Pending</option>
              <option>Resolved</option>
            </select>
          </div>

          {/* PROJECT FILTER */}
          <div>
            <p className="text-sm text-gray-600 mb-1">Project</p>
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="
                w-full border border-gray-300 rounded-lg py-2 px-3
                focus:ring-2 focus:ring-gray-50 focus:outline-none
                text-sm
              "
            >
              <option>All</option>
              <option>Project A</option>
              <option>Project B</option>
            </select>
          </div>

          {/* BUTTONS RIGHT SIDE */}
          <div className="flex justify-end items-end gap-3 w-full sm:w-auto sm:col-span-1 col-span-full">

            <button
              className="
                 text-white font-semibold
    px-6 py-3 
    rounded-t-[12px] rounded-b-none
    shadow-md text-center max-sm:w-full
    bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
    hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
    transform transition-all duration-300 
    hover:scale-[1.05] hover:shadow-xl
    flex items-center gap-3
              "
            >
              Apply Filters
            </button>

          <button
  onClick={resetFilters}
  className="
    border border-gray-400 text-gray-700
    px-6 py-3
    rounded-t-[12px] rounded-b-none
    bg-white
    text-sm sm:text-base
    shadow-md text-center max-sm:w-full
    hover:bg-gray-100
    transition-all duration-300 
    hover:scale-[1.05] hover:shadow-xl
  "
>
  Reset
</button>


          </div>

        </div>
      </div>
    </div>
  );
}
