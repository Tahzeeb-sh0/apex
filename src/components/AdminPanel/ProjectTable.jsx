import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProjectForm from "../AdminPanel/EditProjectForm";

const projects = [
  {
    name: "Vyayjanthi Gardens",
    sub: "Premium Villas in Anantapur",
    category: "Villas",
    location: "Anantapur, Kalyandurgam Road",
    status: "Completed",
    statusColor: "bg-blue-100 text-blue-600",
    visible: true,
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
    created: "5 Nov 2025 09:20",
    updated: "18 Nov 2025",
  },
  {
    name: "Karthik Villas",
    sub: "Premium Villas in Anantapur",
    category: "Villas",
    location: "Kalyandurgam Road",
    status: "Upcoming",
    statusColor: "bg-orange-100 text-orange-600",
    visible: false,
    created: "15 Nov 2025 16:32",
    updated: "19 Nov 2025",
  },
];

export default function ProjectTable() {
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);

  return (
    //  Added uniform left-right padding & margin
    <div className="w-full px-4 sm:px-6 lg:px-10 my-4">

      <div className="w-full p-4 sm:p-6 bg-white rounded-xl shadow-sm">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Project Status</h2>
            <p className="text-sm text-gray-500">Monitor project completion status</p>
          </div>

          <button
            onClick={() => navigate("/admin/projects")}
            className="text-white font-semibold
              px-5 py-2 rounded-t-[12px] rounded-b-none
              shadow-md text-center max-sm:w-full
              bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
              hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
              transform transition-all duration-300 
              hover:scale-[1.05] hover:shadow-xl
              flex items-center gap-3"
          >
            View All
          </button>
        </div>

        {/* TABLE */}
        <div className="w-full overflow-hidden">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="text-[#121212] text-sm border-b border-gray-200">
                <th className="py-3 text-left">Project Name</th>
                <th className="py-3 text-left">Category</th>
                <th className="py-3 text-left">Location</th>
                <th className="py-3 text-left">Status</th>
                <th className="py-3 text-left">Visible</th>
                <th className="py-3 text-left">Created Date</th>
                <th className="py-3 text-left">Last Updated</th>
                <th className="py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((p, index) => (
                <tr key={index} className="hover:bg-gray-50 text-sm border-b border-gray-200">

                  <td className="py-4">
                    <div className="font-semibold text-gray-800">{p.name}</div>
                    <div className="text-gray-500 text-xs">{p.sub}</div>
                  </td>

                  <td className="py-4 text-gray-700">{p.category}</td>
                  <td className="py-4 text-gray-700">{p.location}</td>

                  <td className="py-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${p.statusColor}`}>
                      {p.status}
                    </span>
                  </td>

                  <td className="py-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={p.visible} className="sr-only peer" />
                      <div className="w-10 h-5 bg-[#7F7F7F] rounded-full peer peer-checked:bg-[#009632]"></div>
                      <div className="absolute left-0.5 top-0.5 h-4 w-4 bg-white rounded-full shadow transition-all peer-checked:translate-x-5"></div>
                    </label>
                  </td>

                  <td className="py-4 text-gray-700">{p.created}</td>

                  <td className="py-4 text-gray-700">
                    <span className="text-xs">Updated: {p.updated}</span>
                  </td>

                  <td className="py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src="/Icons/Edit.svg"
                        className="w-5 cursor-pointer"
                        onClick={() => setEditData(p)}
                      />
                      <img src="/Icons/view.svg" className="w-5 cursor-pointer" />
                      <img src="/Icons/Copy.svg" className="w-5 cursor-pointer" />
                      <img src="/Icons/Delete.svg" className="w-5 cursor-pointer" />
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EDIT MODAL */}
        {editData && (
          <EditProjectForm data={editData} onClose={() => setEditData(null)} />
        )}
      </div>
    </div>
  );
}
