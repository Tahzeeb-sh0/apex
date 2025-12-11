import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiImage, FiX } from "react-icons/fi";

/*
   MAIN WRAPPER — ADD PROJECT PAGE
*/
export default function AddProjectSection() {
  const [open, setOpen] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
   
   
  });

  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5] p-4 md:p-8 px-4 sm:px-4 lg:px-8 xl:px-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Add New Project</h2>
         <p className="text-sm text-gray-500 whitespace-nowrap">
  Create and configure a new real estate project.
</p>

        </div>
<div className="w-full flex justify-start sm:justify-end mt-6">

  <div className="flex flex-wrap gap-3">

   
   {/* SAVE AS DRAFT */}
<button
  className="
    border border-gray-400 text-gray-700
    px-6 py-1
    rounded-t-[12px] rounded-b-none
    bg-white
    text-sm sm:text-base
    shadow-md text-center max-sm:w-full
    hover:bg-gray-100
    transition-all duration-300 
    hover:scale-[1.05] hover:shadow-xl
    flex items-center gap-2
  "
>
  <img src="/Icons/save.svg" alt="save" className="w-4 h-4" />
  <span>Save as Draft</span>
</button>

{/* SAVE & PUBLISH */}
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
  <img src="/Icons/publish.svg" alt="publish" className="w-4 h-4" />
  <span>Save & Publish</span>
</button>


  </div>
</div>

      </div>

      {/* ACCORDION SECTIONS */}
      <div className="bg-[#F5F5F5] rounded-xl  p-4 md:p-6 space-y-4">

        <Accordion label="Section A" title="Basic Information" open={open.A} onClick={() => toggle("A")}>
          <BasicInformationSection />
        </Accordion>

        <Accordion label="Section B" title="Project Overview" open={open.B} onClick={() => toggle("B")}>
          <ProjectOverviewSection />
        </Accordion>

        <Accordion label="Section C" title="Location Details" open={open.C} onClick={() => toggle("C")}>
          <LocationDetailsSection />
        </Accordion>

         <Accordion label="Section D" title="Gallery Manager" open={open.D} onClick={() => toggle("D")}>
          <GalleryManagerSection />
        </Accordion>

       

      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   REUSABLE ACCORDION COMPONENT
------------------------------------------------------------------ */
const Accordion = ({ label, title, open, onClick, children }) => (
  <div className="border border-gray-300 rounded-md">
    <button onClick={onClick} className="w-full flex justify-between items-center p-3">
      <div className="flex items-center gap-4">
        <span className="px-3 py-1 bg-[#F5F5F5] text-gray-700 text-sm rounded">{label}</span>
        <span className="text-sm font-medium">{title}</span>
      </div>
      {open ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
    </button>

    {open && <div className="p-4 border-t border-gray-300 bg-gray-50">{children}</div>}
  </div>
);

/* ------------------------------------------------------------------
   SECTION A — BASIC INFORMATION
------------------------------------------------------------------ */
const BasicInformationSection = () => (
  <div className="space-y-6">

    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="text-sm font-medium">Project Name</label>
        <input placeholder="e.g., Vyjayanthy Gardens" className="w-full border border-gray-300 rounded-md p-2" />
      </div>

      <div>
        <label className="text-sm font-medium">Project Tagline / Short Description</label>
        <input placeholder="e.g., Premium Villas in Anantapur" className="w-full border border-gray-300 rounded-md p-2" />
        <p className="text-xs text-gray-500 mt-1">Shown on website listing and hero section.</p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="text-sm font-medium">Project Type</label>
        <select className="w-full border border-gray-300 rounded-md p-2">
          <option>Select Type</option>
           <option>Residential</option>
        <option>Commercial</option>
        </select>
      </div>
      

      <div>
        <label className="text-sm font-medium">Category</label>
        <select className="w-full border border-gray-300 rounded-md p-2">
          <option>Select Category</option>
           <option>Villas</option>
        </select>
        <p className="text-xs text-gray-500">Used for labels on website.</p>
      </div>
    </div>



    <div>
      <label className="text-sm font-medium">Project Status <span className="text-red-600">*</span></label>
      <select className="w-full md:w-1/2 border border-gray-300 rounded-md p-2">
        <option>Draft</option>
        <option>Published</option>
        <option>Hidden</option>
      </select>

      <ul className="text-xs text-[#000000] mt-2 space-y-1">
        <li>• Draft – Not visible</li>
        <li>• Published – Live</li>
        <li>• Hidden – Direct link only</li>
      </ul>
    </div>

  </div>
);

/* ------------------------------------------------------------------
   SECTION B — PROJECT OVERVIEW
------------------------------------------------------------------ */
const ProjectOverviewSection = () => (
  <div className="space-y-8">

    {/* SUMMARY DESCRIPTION */}
    <div>
      <label className="text-sm font-medium">
        Summary Description <span className="text-red-500">*</span>
      </label>

      {/* Toolbar */}
      <div className="flex items-center gap-4 border border-gray-300 rounded-t-md bg-[#F5F5F5] px-3 py-2 mt-1">
        <button className="font-bold text-sm">B</button>
        <button className="italic text-sm">I</button>
        <button className="text-sm">•</button>
        <button className="text-sm">🔗</button>
      </div>

      {/* Textarea */}
      <textarea
        rows={4}
        className="w-full border border-gray-300 rounded-b-md p-3 text-sm focus:outline-none"
        placeholder="Vyjayanthi Gardens is a premium gated villa community spread across 4.02 acres, offering 2 & 3 BHK homes with 14+ amenities in Anantapur..."
      />
    </div>

    {/* PROJECT HIGHLIGHTS */}
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Project Highlights</span>

        <button className="text-sm text-blue-700 hover:underline">
          + Add Highlight
        </button>
      </div>

      <p className="border border-gray-200 rounded-md p-3 text-center text-xs text-gray-500 mt-1">
        No highlights added yet. Click "Add Highlight" to add one.
      </p>
    </div>

    {/* LAND AREA + TOTAL UNITS */}
    <div className="grid md:grid-cols-2 gap-8">

      <div>
        <label className="text-sm font-medium">Total Land Area</label>

        <div className="grid grid-cols-3 gap-3 mt-1">
          <select className="col-span-2 border border-gray-300 rounded-md p-2 text-sm">
            <option>Select Type</option>
          </select>

          <select className="border border-gray-300 rounded-md p-2 text-sm">
            <option>Acres</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Total Units</label>
        <input
          placeholder="e.g., 56 units"
          className="w-full border border-gray-300 rounded-md p-2 text-sm mt-1"
        />
        <p className="text-xs text-gray-500 mt-1">Total number of villas/plots in the project.</p>
      </div>

    </div>

    {/* POSSESSION YEAR + RERA */}
    <div className="grid md:grid-cols-2 gap-8">

      <div>
        <label className="text-sm font-medium">Possession Year / Date</label>

        <input
          placeholder="e.g., 2026"
          className="w-full border border-gray-300 rounded-md p-2 text-sm mt-1"
        />

        <p className="text-xs text-gray-500 mt-1">
          Shown on website as project possession timeline.
        </p>
      </div>

      <div>
        <label className="text-sm font-medium">RERA Registered?</label>

        <div className="flex gap-8 mt-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="rera" /> Yes
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="radio" name="rera" /> No
          </label>
        </div>
      </div>

    </div>
  </div>
);


/* ------------------------------------------------------------------
   SECTION C — LOCATION DETAILS
------------------------------------------------------------------ */
const LocationDetailsSection = () => (
  <div className="space-y-6">

    {/* Address */}
    <div>
      <label className="text-sm font-medium">
        Address <span className="text-red-600">*</span>
      </label>

      <textarea
        rows={3}
        placeholder="Opposite Intel College / Delhi Public School, Kalyanaduragam Road, Anantapur."
        className="w-full border border-gray-300 rounded-md p-3 text-sm"
      ></textarea>
    </div>

    {/* Google Maps Link + Embed */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Google Maps Link */}
      <div>
        <label className="text-sm font-medium">Google Maps Link</label>
        <input
          type="text"
          placeholder="https://maps.app.goo.gl/..."
          className="border border-gray-300 rounded-md p-2.5 w-full text-sm"
        />
      </div>

      {/* Map Embed Code */}
      <div>
        <label className="text-sm font-medium">Map Embedded Code (iframe)</label>

        <textarea
          rows={3}
          placeholder='<iframe src="https://google.com/maps/embed?..." width="600" height="450"></iframe>'
          className="border border-gray-300 rounded-md p-3 w-full text-sm"
        ></textarea>

        <p className="text-xs text-gray-500 mt-1">
          Paste the embed code from Google Maps to show the interactive map on the location page.
        </p>
      </div>
    </div>

  </div>
);

/* ------------------------------------------------------------------
   SECTION D — GALLERY MANAGER (Image + Video Tabs)
------------------------------------------------------------------ */
const GalleryManagerSection = () => {
  const [activeTab, setActiveTab] = useState("image");

  const [images, setImages] = useState([{ id: 1 }]);

  const addImage = () => {
    setImages([...images, { id: Date.now() }]);
  };

  const removeImage = (id) => {
    if (id === 1) return;
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">

        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab("image")}
            className={`pb-1 border-b-2 flex items-center gap-1 ${
              activeTab === "image"
                ? "border-teal-700 text-[#3C2B98] font-medium"
                : "border-transparent text-gray-600"
            }`}
          >
            <FiImage size={16} /> Image
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`pb-1 border-b-2 ${
              activeTab === "video"
                ? "border-teal-700 text-[#3C2B98] font-medium"
                : "border-transparent text-gray-600"
            }`}
          >
            🎬 Video
          </button>
        </div>

        {activeTab === "image" && (
          <button onClick={addImage} className="text-sm text-[#3C2B98] hover:underline">
            + Add Image
          </button>
        )}

      </div>

      <hr />

      {/* IMAGE TAB */}
      {activeTab === "image" && (
        <div className="grid md:grid-cols-2 gap-6">

          {images.map((item) => (
            <div key={item.id} className="border border-gray-300 rounded-lg p-4 bg-[#F5F5F5] space-y-4">

              <div className="w-full h-[300px] border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
                <FiImage size={60} className="text-gray-400" />
              </div>

              <div>
                <label className="text-sm font-medium">Image URL</label>
                <input type="text" placeholder="URL" className="border rounded-md p-2 w-full mt-1" />
              </div>

              <div>
                <label className="text-sm font-medium">Category</label>
                <select className="border rounded-md p-2 w-full mt-1">
                  <option>Select Category</option>
                  <option>Exterior</option>
                  <option>Interior</option>
                  <option>Amenities</option>
                  <option>Master Plan</option>
                </select>
              </div>

              {item.id !== 1 && (
                <div className="flex justify-end">
                  <button onClick={() => removeImage(item.id)} className="text-sm text-red-600 hover:underline flex gap-1 items-center">
                    <FiX size={16} /> Remove Image
                  </button>
                </div>
              )}

            </div>
          ))}

        </div>
      )}

      {/* VIDEO TAB */}
      {activeTab === "video" && <VideoSection />}

    </div>
  );
};
/* ------------------------------------------------------------------
   VIDEO SECTION (Under Gallery → Video Tab)
------------------------------------------------------------------ */
const VideoSection = () => {
  const [videos, setVideos] = useState([{ id: 1 }]);

  const addVideo = () => {
    setVideos([...videos, { id: Date.now() }]);
  };

  const removeVideo = (id) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-end">
        <button onClick={addVideo} className="text-sm text-green-700 hover:underline">
          + Add Video
        </button>
      </div>

      {videos.map((item) => (
        <div key={item.id} className="border border-gray-300 rounded-lg p-4 bg-[#F5F5F5] space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm font-medium">Title</label>
              <input type="text" placeholder="e.g., Project Walkthrough" className="border rounded-md p-2 w-full mt-1" />
            </div>

            <div>
              <label className="text-sm font-medium">Category</label>
              <select className="border bg-[#F5F5F5] rounded-md p-2 w-full mt-1">
                <option>Select Category</option>
                <option>Walkthrough</option>
                <option>Amenities</option>
                <option>Location</option>
                <option>Drone View</option>
              </select>
            </div>

          </div>

          <div>
            <label className="text-sm font-medium">Video URL (YouTube / Vimeo / MP4)</label>
            <input type="text" placeholder="https://youtube.com/watch?v=..." className="border rounded-md p-2 w-full mt-1" />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea rows="4" placeholder="Optional Description" className="border rounded-md p-3 w-full mt-1"></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm">Show in Gallery</label>
          </div>

          <div className="flex justify-end">
            <button onClick={() => removeVideo(item.id)} className="text-red-600 text-sm hover:underline flex items-center gap-1">
              <FiX size={16} /> Remove Video
            </button>
          </div>

        </div>
      ))}

    </div>
  );
};


