import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProjectForm from "../AdminPanel/EditProjectForm";

const projectList = [
  {
    name: "Vyayjanthi Gardens",
    sub: "Premium Villas in Anantapur",
    category: "Villas",
    location: "Anantapur, Kalyandurgam Road",
    status: "Completed",
    statusColor: "bg-blue-100 text-blue-600",
    visible: true,
    visibleText: "Visible",
    created: "12 Nov 2025 16:32",
    updated: "20 Nov 2025",
  },
  {
    name: "Tapovanam Residency",
    sub: "Modern Apartments with Amenities",
    category: "Apartments",
    location: "Tapovanam, Anantapur",
    status: "Ongoing",
    statusColor: "bg-green-100 text-green-600",
    visible: true,
    visibleText: "Visible",
    created: "5 Nov 2025 09:20",
    updated: "18 Nov 2025",
  },
  {
    name: "Karthik Villas",
    sub: "Premium Villas in Anantapur",
    category: "Villas",
    location: "Kalyanadurgam Road",
    status: "Upcoming",
    statusColor: "bg-orange-100 text-orange-600",
    visible: true,
    visibleText: "Visible",
    created: "15 Nov 2025 16:32",
    updated: "19 Nov 2025",
  },
  {
    name: "SkyLine",
    sub: "Luxury High Rise Living",
    category: "Apartments",
    location: "Kalyanadurgam Road",
    status: "Upcoming",
    statusColor: "bg-orange-100 text-orange-600",
    visible: false,
    visibleText: "Hidden",
    created: "15 Nov 2025 16:32",
    updated: "19 Nov 2025",
  },
  {
    name: "Karthik Villas",
    sub: "Premium Villas in Anantapur",
    category: "Villas",
    location: "Kalyanadurgam Road",
    status: "Upcoming",
    statusColor: "bg-orange-100 text-orange-600",
    visible: false,
    visibleText: "Hidden",
    created: "15 Nov 2025 16:32",
    updated: "19 Nov 2025",
  },
  {
    name: "Palm Grove Villas",
    sub: "Elegant 3BHK & 4BHK Villas",
    category: "Villas",
    location: "Tapovanam",
    status: "Upcoming",
    statusColor: "bg-orange-100 text-orange-600",
    visible: false,
    visibleText: "Hidden",
    created: "15 Nov 2025 16:32",
    updated: "19 Nov 2025",
  },
];

export default function AllProjects() {
  const [projects] = useState(projectList);
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);

  return (
    <>
   

    <div className="w-full p-4 md:p-6 lg:p-10 bg-[#F5F7F8] min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">All Projects</h1>
          <p className="text-gray-500">View, manage, and publish your real estate projects.</p>
        </div>

  <button
  onClick={() => navigate("/admin/add-project")}
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
  <span className="text-lg font-semibold">+</span>
  Add New Project
</button>



      </div>

      {/* FILTERS */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-5">
        <input
          type="text"
          placeholder="Search by project name, type, or location..."
          className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm mb-4 focus:ring-2 focus:ring-gray-50 outline-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-[#121212]">Category</label>
            <select className="w-full border border-gray-200 py-2 px-3 rounded-lg text-sm">
              <option>All</option>
              <option>Villas</option>
              <option>Apartments</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-[#121212]">Status</label>
            <select className="w-full border border-gray-200 py-2 px-3 rounded-lg text-sm">
              <option>All</option>
              <option>Completed</option>
              <option>Ongoing</option>
              <option>Upcoming</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-[#121212]">Location</label>
            <select className="w-full border border-gray-200 py-2 px-3 rounded-lg text-sm">
              <option>All</option>
              <option>Anantapur</option>
              <option>Tapovanam</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-[#121212]">Created Date</label>
            <select className="w-full border border-gray-200 py-2 px-3 rounded-lg text-sm">
              <option>All Time</option>
              <option>Last 30 days</option>
              <option>Last 6 months</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className=" px-5 py-2 
    rounded-t-[12px] rounded-b-none text-white
    shadow-md text-center max-sm:w-full
    bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
    hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
    transform transition-all duration-300 
    hover:scale-[1.05] hover:shadow-xl
    flex items-center gap-3">Apply Filters</button>

          <button className="border border-gray-400 text-gray-700
    px-5 py-2
    rounded-t-[12px] rounded-b-none
    bg-white
    text-sm sm:text-base
    shadow-md text-center max-sm:w-full
    hover:bg-gray-100
    transition-all duration-300 
    hover:scale-[1.05] hover:shadow-xl
    flex items-center gap-2">Reset</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-6 bg-white rounded-xl shadow-sm overflow-auto ">
        <table className="w-full text-sm min-w-[1200px]">
          <thead>
            <tr className="text-[#121212] border-b border-gray-200 bg-white">
              <th className="p-4"></th>
              <th className="p-4 text-left">Project Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Visible</th>
              <th className="p-4 text-left">Created Date</th>
              <th className="p-4 text-left">Last Updated</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((p, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">

                <td className="py-4 px-3">
                  <input type="checkbox" className="w-4 h-4 accent-gray-400 cursor-pointer" />
                </td>

                <td className="py-4 px-3">
                  <div className="font-semibold text-[#121217]">{p.name}</div>
                  <div className="text-[#595959] text-xs">{p.sub}</div>
                </td>

                <td className="p-4">{p.category}</td>
                <td className="py-4 px-2 text-[#595959]">{p.location}</td>

                <td className="py-4 px-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${p.statusColor}`}>
                    {p.status}
                  </span>
                </td>

                <td className="py-4 px-3">
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={p.visible} className="sr-only peer" />
                      <div className="w-10 h-5 bg-[#7F7F7F] peer-checked:bg-[#009632] rounded-full"></div>
                      <div className="absolute left-0.5 top-0.5 h-4 w-4 bg-white rounded-full shadow transition-all peer-checked:translate-x-5"></div>
                    </label>
                    <span className={`text-sm ${p.visible ? "text-green-600" : "text-gray-500"}`}>
                      {p.visibleText}
                    </span>
                  </div>
                </td>

                <td className="py-4 px-2 text-gray-700">{p.created}</td>

                <td className="py-4 px-3 text-gray-700">
                  <span className="text-xs text-[#595959]">
                    Updated: {p.updated}
                  </span>
                </td>

                <td className="py-4 px-3">
                  <div className="flex gap-3">
                    <img
                      src="/Icons/Edit.svg"
                      className="w-4 cursor-pointer"
                      onClick={() => setEditData(p)}
                    />
                    <img src="/Icons/view.svg" className="w-4 cursor-pointer" />
                    <img src="/Icons/Copy.svg" className="w-4 cursor-pointer" />
                    <img src="/Icons/Delete.svg" className="w-4 cursor-pointer" />
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
       </div>
    
   {/* EDIT MODAL */}
     {editData && (
  <>
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
    <EditProjectForm data={editData} onClose={() => setEditData(null)} />
  </>
)}

      
   </>
  );
}

















