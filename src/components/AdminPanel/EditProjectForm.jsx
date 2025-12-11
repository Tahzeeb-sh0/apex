import React from "react";

export default function EditProjectForm({ data, onClose }) {
  if (!data) return null; 

  return (
    <div className="fixed inset-0 bg-White bg-opacity-40 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-lg p-6 space-y-6 overflow-y-auto max-h-[100vh]">

        {/* HEADER */}
        <div className="flex justify-between items-center pb-3 ">
          <h2 className="text-lg font-semibold">Edit Project – {data.name}</h2>
          <button className="text-gray-500 hover:text-black" onClick={onClose}>✖</button>
        </div>

        {/* BASIC INFORMATION SECTION */}
        <BasicInformationSection data={data} />

        {/* FOOTER */}
        <div className="flex justify-end gap-3 pt-4">
          <button onClick={onClose} className="border border-gray-400 text-gray-700
    px-4 py-2
    rounded-t-[12px] rounded-b-none
    bg-white
    text-sm sm:text-base
    shadow-md text-center max-sm:w-full
    hover:bg-gray-100
    transition-all duration-300 
    hover:scale-[1.05] hover:shadow-xl">
            Cancel
          </button>
          <button className="  text-white font-semibold
    px-4 py-2 
    rounded-t-[12px] rounded-b-none
    shadow-md text-center max-sm:w-full
    bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
    hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
    transform transition-all duration-300 
    hover:scale-[1.05] hover:shadow-xl
    flex items-center gap-3">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

/* BASIC INFO SECTION */
const BasicInformationSection = ({ data }) => {
  if (!data) return null;

  return (
<div className="space-y-6">

  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="text-sm font-medium text-[#121212]">Project Name</label>
      <input
        defaultValue={data.name}
        className="w-full border border-gray-300 rounded-md p-2 text-gray-700 placeholder-[#595959]"
        placeholder="Enter project name"
      />
    </div>

    <div>
      <label className="text-sm font-medium text-gray-[#121212]">
        Project Tagline / Short Description
      </label>
      <input
        defaultValue={data.sub}
        className="w-full border border-gray-300 rounded-md p-2 text-gray-700 placeholder-[#595959]"
        placeholder="Enter project tagline"
      />
      <p className="text-xs text-gray-500 mt-1">
        Shown on website listing and hero section.
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="text-sm font-medium text-[#121212]">Project Type</label>
      <select className="w-full border border-gray-300 rounded-md p-2 text-gray-700">
        <option className="text-gray-400">Select Type</option>
        <option>Residential</option>
        <option>Commercial</option>
      </select>
    </div>

    <div>
      <label className="text-sm font-medium text-[#121212]">Category</label>
    <select className="w-full border border-gray-300 rounded-md p-2">
          <option>Select Category</option>
           <option>Villas</option>
        </select>
      <p className="text-xs text-gray-500">Used for labels on website.</p>
    </div>
  </div>

  <div>
    <label className="text-sm font-medium text-[#121212]">
      Project Status <span className="text-red-600">*</span>
    </label>
    <select className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 text-gray-700">
      <option>Draft</option>
      <option>Published</option>
      <option>Hidden</option>
    </select>
  </div>

</div>

  );
};
