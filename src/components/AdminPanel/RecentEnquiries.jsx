import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecentEnquiries() {
  const navigate = useNavigate();

  const enquiries = [
    {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      project: "Vyayasanthi Gardens",
      date: "11-9-2025",
      status: "Pending",
    },
    {
      name: "Priya Sharma",
      phone: "+91 96566 32197",
      project: "Tapovanam Plots",
      date: "11-18-2025",
      status: "Pending",
    },
    {
      name: "Sneha Reddy",
      phone: "+91 98754 32168",
      project: "Karthik Villa",
      date: "11-18-2025",
      status: "Resolved",
    },
  ];

  return (
    // ⬇️ Added padding + margin both sides
    <div className="w-full px-4 sm:px-6 lg:px-10 my-4">

      <div className="bg-white p-6 rounded-xl shadow-sm">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-[#3C2B98]">Recent Enquiries</h3>
            <p className="text-gray-500 text-sm">Latest customer enquiries</p>
          </div>

          {/* View All Button */}
          <button
            onClick={() => navigate("/admin/enquiries")}
            className="
              text-white font-semibold
              px-5 py-2 
              rounded-t-[12px] rounded-b-none
              shadow-md text-center max-sm:w-full
              bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
              hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
              transform transition-all duration-300 
              hover:scale-[1.05] hover:shadow-xl
              flex items-center gap-3
            "
          >
            View All
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">

            <thead>
              <tr className="text-[#121212] text-sm border-b border-gray-300">
                <th className="p-3 font-medium">Name</th>
                <th className="p-3 font-medium">Phone</th>
                <th className="p-3 font-medium">Project</th>
                <th className="p-3 font-medium">Date</th>
                <th className="p-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((e, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition ${
                    index !== enquiries.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <td className="p-3">{e.name}</td>
                  <td className="p-3">{e.phone}</td>
                  <td className="p-3">{e.project}</td>
                  <td className="p-3">{e.date}</td>
                  <td className="p-3">
                    <span
                      className={`text-sm font-medium ${
                        e.status === "Pending" ? "text-red-500" : "text-[#1450C0]"
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}
