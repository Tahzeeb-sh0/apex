// import React, { useState } from "react";
// import { FiX } from "react-icons/fi";

// export default function EnquiriesTable() {
//   const enquiries = [
//      {
//       name: "Rajesh Kumar",
//       phone: "+917876543210",
//       project: "Vyayjanthi Gardens",
//       message: "Interested in 3 BHK villa...",
//       date: "26 Nov 2025, 3:42 PM",
//       status: "Pending",
//     },
//     {
//       name: "Priya Sharma",
//       phone: "+916566432197",
//       project: "Vyayjanthi Gardens",
//       message: "Interested in 2 BHK villa...",
//       date: "24 Nov 2025, 10:11 PM",
//       status: "Pending",
//     },
//     {
//       name: "Priya Sharma",
//       phone: "+919886848216",
//       project: "Vyayjanthi Gardens",
//       message: "Interested in 3 BHK villa...",
//       date: "23 Nov 2025, 3:20 PM",
//       status: "Resolved",
//     },
//     {
//       name: "Sneha Reddy",
//       phone: "+919886848216",
//       project: "Vyayjanthi Gardens",
//       message: "Interested in 3 BHK villa...",
//       date: "23 Nov 2025, 3:20 PM",
//       status: "Resolved",
//     },
//     {
//       name: "Rajesh Kumar",
//       phone: "+917876543210",
//       project: "Vyayjanthi Gardens",
//       message: "Interested in 3 BHK villa...",
//       date: "23 Nov 2025, 3:20 PM",
//       status: "Resolved",
//     },
//     {
//       name: "Priya Sharma",
//       phone: "+916566432197",
//       project: "Vyayjanthi Gardens",
//       message: "Interested in 3 BHK villa...",
//       date: "23 Nov 2025, 3:20 PM",
//       status: "Resolved",
//     },
//   ];

//   const [selected, setSelected] = useState(null);
//   const [open, setOpen] = useState(false);

//   const openDetails = (row) => {
//     setSelected(row);
//     setOpen(true);
//   };

//   const closeDrawer = () => {
//     setOpen(false);
//     setTimeout(() => setSelected(null), 300);
//   };

//   return (
//     <>
//       {/* MAIN TABLE CARD */}
//       <div className="bg-white p-6 rounded-2xl shadow-sm w-full overflow-x-auto">

//         {/* HEADER */}
//         <h2 className="text-xl font-semibold text-[#3C2B98]">
//           Recent Enquiries
//         </h2>
//         <p className="text-gray-500 text-sm mb-6">Latest customer enquiries</p>

//         {/* TABLE */}
//         <table className="w-full min-w-[800px] border-collapse">

//           <thead>
//           <tr className="border-b border-gray-300">

//               <th className="text-left font-medium">Name</th>
//               <th className="text-left font-medium">Phone</th>
//               <th className="text-left font-medium">Project</th>
//               <th className="text-left font-medium">Message</th>
//               <th className="text-left font-medium">Date</th>
//               <th className="text-left font-medium">Status</th>
//               <th className="text-left font-medium">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {enquiries.map((row, index) => (
//               <tr
//                 key={index}
//                 className="bg-white border-b border-gray-200"
//               >
//                 <td className="py-4">{row.name}</td>
//                 <td>{row.phone}</td>
//                 <td>{row.project}</td>
//                 <td className="text-gray-600">{row.message}</td>
//                 <td className="text-gray-500">{row.date}</td>

//                 <td>
//                   <span
//                     className={
//                       row.status === "Pending"
//                         ? "text-red-500 font-medium"
//                         : "text-[#1450C0] font-medium"
//                     }
//                   >
//                     {row.status}
//                   </span>
//                 </td>

//                 <td>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => openDetails(row)}
//                       className="border border-gray-400 text-gray-700
//     px-4 py-1
//     rounded-t-[12px] rounded-b-none
//     bg-white
//     text-sm sm:text-base
//     shadow-md text-center max-sm:w-full
//     hover:bg-gray-100
//     transition-all duration-300
//     hover:scale-[1.05] hover:shadow-xl
//     flex items-center gap-2"
//                     >
//                       View
//                     </button>

//                     {row.status === "Pending" && (
//                       <button className="
//                  text-white font-semibold
//     px-4 py-3
//     rounded-t-[12px] rounded-b-none
//     shadow-md text-center max-sm:w-full
//     bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
//     hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
//     transform transition-all duration-300
//     hover:scale-[1.05] hover:shadow-xl
//     flex items-center gap-3
//               ">
//                         Mark Resolved
//                       </button>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* PAGINATION */}
//         <div className="flex justify-center items-center gap-2 mt-5 text-sm">
//           <button className="text-gray-400 cursor-not-allowed">Prev</button>

//           <button className="w-7 h-7 bg-[#3C2B98] text-white rounded-md flex items-center justify-center">
//             1
//           </button>

//           <button className="text-gray-600">2</button>
//           <button className="text-gray-600">3</button>

//           <span>…</span>

//           <button className="text-gray-600">10</button>

//           <button className="text-gray-600">Next</button>
//         </div>
//       </div>

//       {/* ------------------------------------------------------ */}
//       {/* RIGHT SIDE DRAWER */}
//       {/* ------------------------------------------------------ */}
//       {selected && (
//         <div
//           className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40 transition-opacity duration-300 ${
//             open ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//           onClick={closeDrawer}
//         ></div>
//       )}

//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-xl z-50 p-6 overflow-y-auto transition-transform duration-300
//         ${open ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {selected && (
//           <>
//             {/* TITLE */}
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold">Enquiry Details</h2>
//               <FiX
//                 className="text-2xl cursor-pointer"
//                 onClick={closeDrawer}
//               />
//             </div>

//             {/* DETAILS */}
//             <div className="space-y-4 text-sm">

//               <div>
//                 <p className="text-gray-500">Name</p>
//                 <p className="font-medium">{selected.name}</p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Phone</p>
//                 <p className="font-medium">{selected.phone}</p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Project</p>
//                 <p className="font-medium">{selected.project}</p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Received</p>
//                 <p className="font-medium">{selected.date}</p>
//               </div>

//               {/* MESSAGE BOX */}
//               <div>
//                 <p className="text-gray-500 mb-1">Message</p>
//                 <textarea
//                   value={selected.message}
//                   readOnly
//                   className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 h-32 resize-none"
//                 ></textarea>
//               </div>

//               {/* STATUS */}
//               <div>
//                 <p className="text-gray-500 mb-1">Status</p>
//                 <select
//                   defaultValue={selected.status}
//                   className="w-full border border-gray-300 rounded-lg p-2"
//                 >
//                   <option>Pending</option>
//                   <option>Resolved</option>
//                 </select>
//               </div>

//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export default function EnquiriesTable() {
  const enquiries = [
    {
      name: "Rajesh Kumar",
      phone: "+917876543210",
      project: "Vyayjanthi Gardens",
      message: "Interested in 3 BHK villa...",
      date: "26 Nov 2025, 3:42 PM",
      status: "Pending",
    },
    {
      name: "Priya Sharma",
      phone: "+916566432197",
      project: "Vyayjanthi Gardens",
      message: "Interested in 2 BHK villa...",
      date: "24 Nov 2025, 10:11 PM",
      status: "Pending",
    },
    {
      name: "Priya Sharma",
      phone: "+919886848216",
      project: "Vyayjanthi Gardens",
      message: "Interested in 3 BHK villa...",
      date: "23 Nov 2025, 3:20 PM",
      status: "Resolved",
    },
    {
      name: "Sneha Reddy",
      phone: "+919886848216",
      project: "Vyayjanthi Gardens",
      message: "Interested in 3 BHK villa...",
      date: "23 Nov 2025, 3:20 PM",
      status: "Resolved",
    },
    {
      name: "Rajesh Kumar",
      phone: "+917876543210",
      project: "Vyayjanthi Gardens",
      message: "Interested in 3 BHK villa...",
      date: "23 Nov 2025, 3:20 PM",
      status: "Resolved",
    },
    {
      name: "Priya Sharma",
      phone: "+916566432197",
      project: "Vyayjanthi Gardens",
      message: "Interested in 3 BHK villa...",
      date: "23 Nov 2025, 3:20 PM",
      status: "Resolved",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const openDetails = (row) => {
    setSelected(row);
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
    setTimeout(() => setSelected(null), 300);
  };

  return (
    <>
      {/* OUTER RESPONSIVE WRAPPER (ADDED) */}
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 py-6">
        {/* MAIN TABLE CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-sm w-full overflow-x-auto">
          {/* HEADER */}
          <h2 className="text-xl font-semibold text-[#3C2B98]">
            Recent Enquiries
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Latest customer enquiries
          </p>

          {/* TABLE */}
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left font-medium py-3">Name</th>
                <th className="text-left font-medium">Phone</th>
                <th className="text-left font-medium">Project</th>
                <th className="text-left font-medium">Message</th>
                <th className="text-left font-medium">Date</th>
                <th className="text-left font-medium">Status</th>
                <th className="text-left font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((row, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td className="py-4">{row.name}</td>
                  <td>{row.phone}</td>
                  <td>{row.project}</td>
                  <td className="text-gray-600">{row.message}</td>
                  <td className="text-gray-500">{row.date}</td>

                  <td>
                    <span
                      className={
                        row.status === "Pending"
                          ? "text-red-500 font-medium"
                          : "text-[#1450C0] font-medium"
                      }
                    >
                      {row.status}
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openDetails(row)}
                        className="w-[95px] h-[40px] border border-gray-400 text-gray-700 px-4 py-1 rounded-t-[12px] rounded-b-none bg-white
                         text-sm sm:text-base shadow-md hover:bg-gray-100 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl flex items-center justify-center gap-2">
                        View
                      </button>

                      {row.status === "Pending" && (
                        <button
                          className="
                            text-white font-semibold px-4 py-3 
                            rounded-t-[12px] rounded-b-none shadow-md 
                            bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
                            hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
                            transition-all duration-300 hover:scale-[1.05]
                            hover:shadow-xl flex items-center gap-3"
                        >
                          Mark Resolved
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="flex justify-center items-center gap-2 mt-5 text-sm">
            <button className="text-gray-400 cursor-not-allowed">Prev</button>

            <button className="w-7 h-7 bg-[#3C2B98] text-white rounded-md flex items-center justify-center">
              1
            </button>

            <button className="text-gray-600">2</button>
            <button className="text-gray-600">3</button>

            <span>…</span>

            <button className="text-gray-600">10</button>

            <button className="text-gray-600">Next</button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {selected && (
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeDrawer}
        ></div>
      )}

      {/* RIGHT DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-xl z-50 p-6 overflow-y-auto transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {selected && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Enquiry Details</h2>
              <FiX className="text-2xl cursor-pointer" onClick={closeDrawer} />
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-500">Name</p>
                <p className="font-medium">{selected.name}</p>
              </div>

              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">{selected.phone}</p>
              </div>

              <div>
                <p className="text-gray-500">Project</p>
                <p className="font-medium">{selected.project}</p>
              </div>

              <div>
                <p className="text-gray-500">Received</p>
                <p className="font-medium">{selected.date}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Message</p>
                <textarea
                  value={selected.message}
                  readOnly
                  className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 h-32 resize-none"
                ></textarea>
              </div>

              <div>
                <p className="text-gray-500 mb-1">Status</p>
                <select
                  defaultValue={selected.status}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option>Pending</option>
                  <option>Resolved</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
