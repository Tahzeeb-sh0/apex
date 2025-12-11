// import React, { useState } from "react";
// import { FiEye, FiEyeOff } from "react-icons/fi";

// export default function UserSettings() {
//   const [showCurrent, setShowCurrent] = useState(false);
//   const [showNew, setShowNew] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);

//   return (
//     <div className="w-full min-h-screen bg-[#F5F7F8] p-4 sm:p-6">

//       {/* TITLE */}
//       <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
//         User Settings
//       </h2>

//       {/* GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//         {/* LEFT : PROFILE */}
//         <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[#3C2B98]">
//               Profile Information
//             </h3>

//             {/* PHOTO */}
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
//               <div>
//                 <p className="text-sm font-semibold">Upload Your Photo</p>
//                 <p className="text-xs text-gray-500">
//                   Your photo should be in PNG or JPG format
//                 </p>
//               </div>
//             </div>

//             <label className="text-sm">Full Name</label>
//             <input
//               type="text"
//               defaultValue="Ramesh"
//               className="w-full mt-1 mb-4  border border-gray-300 px-3 py-2 rounded-md text-sm outline-none"
//             />

//             <label className="text-sm">Email</label>
//             <input
//               type="email"
//               defaultValue="Ramesh@bellinfra.com"
//               className="w-full mt-1 mb-4 border border-gray-300 px-3 py-2 rounded-md text-sm outline-none"
//             />

//             <label className="text-sm">Phone Number</label>
//             <input
//               type="text"
//               defaultValue="9158331122"
//               className="w-full mt-1 mb-6 border border-gray-300 px-3 py-2 rounded-md text-sm outline-none"
//             />
//           </div>
// <button
//   className="
//     text-white font-semibold
//     py-2 
//     rounded-t-[12px] rounded-b-none
//     shadow-md max-sm:w-full
//     bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
//     hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]

//     transform transition-all duration-300 
//     hover:scale-[1.05] hover:shadow-xl
    
//     flex justify-center items-center gap-3   
//   "
// >
//   Save Changes
// </button>

//         </div>

//         {/* RIGHT : PASSWORD */}
//         <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[#3C2B98]">
//               Change Password
//             </h3>

//             {/* CURRENT PASSWORD */}
//             <label className="text-sm">Current Password</label>
//             <div className="relative mb-4">
//               <input
//                 type={showCurrent ? "text" : "password"}
//                 placeholder="Enter current password"
//                 className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm outline-none pr-10"
//               />
//               <span
//                 className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
//                 onClick={() => setShowCurrent(!showCurrent)}
//               >
//                 {showCurrent ? <FiEyeOff size={18} /> : <FiEye size={18} />}
//               </span>
//             </div>

//             {/* NEW PASSWORD */}
//             <label className="text-sm">New Password</label>
//             <div className="relative mb-4">
//               <input
//                 type={showNew ? "text" : "password"}
//                 placeholder="Enter new password"
//                 className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm outline-none pr-10"
//               />
//               <span
//                 className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
//                 onClick={() => setShowNew(!showNew)}
//               >
//                 {showNew ? <FiEyeOff size={18} /> : <FiEye size={18} />}
//               </span>
//             </div>

//             {/* CONFIRM PASSWORD */}
//             <label className="text-sm">Confirm Password</label>
//             <div className="relative mb-6">
//               <input
//                 type={showConfirm ? "text" : "password"}
//                 placeholder="confirm new password"
//                 className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm outline-none pr-10"
//               />
//               <span
//                 className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
//                 onClick={() => setShowConfirm(!showConfirm)}
//               >
//                 {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
//               </span>
//             </div>
//           </div>

//           <button className="
//     text-white font-semibold
//     py-2 
//     rounded-t-[12px] rounded-b-none
//     shadow-md max-sm:w-full
//     bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
//     hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]

//     transform transition-all duration-300 
//     hover:scale-[1.05] hover:shadow-xl
    
//     flex justify-center items-center gap-3  
//   ">
//             Update Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function UserSettings() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#F5F7F8] p-4 sm:p-6">

      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
        User Settings
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT : PROFILE */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3C2B98]">
              Profile Information
            </h3>

            {/* PHOTO */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>
                <p className="text-sm font-semibold">Upload Your Photo</p>
                <p className="text-xs text-gray-500">
                  Your photo should be in PNG or JPG format
                </p>
              </div>
            </div>

            <label className="text-sm">Full Name</label>
            <input
              type="text"
              defaultValue="Ramesh"
              placeholder="Enter full name"
              className="w-full mt-1 mb-4 border border-gray-300 px-3 py-2 rounded-md text-sm outline-none placeholder:text-gray-500"
            />

            <label className="text-sm">Email</label>
            <input
              type="email"
              defaultValue="Ramesh@bellinfra.com"
              placeholder="Enter email address"
              className="w-full mt-1 mb-4 border border-gray-300 px-3 py-2 rounded-md text-sm outline-none placeholder:text-gray-500"
            />

            <label className="text-sm">Phone Number</label>
            <input
              type="text"
              defaultValue="9158331122"
              placeholder="Enter phone number"
              className="w-full mt-1 mb-6 border border-gray-300 px-3 py-2 rounded-md text-sm outline-none placeholder:text-gray-500"
            />
          </div>

          <button
            className="
              text-white font-semibold
              py-2 rounded-t-[12px] rounded-b-none shadow-md max-sm:w-full
              bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
              hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
              transform transition-all duration-300 
              hover:scale-[1.05] hover:shadow-xl
              flex justify-center items-center gap-3
            "
          >
            Save Changes
          </button>
        </div>

        {/* RIGHT : PASSWORD */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3C2B98]">
              Change Password
            </h3>

            {/* CURRENT PASSWORD */}
            <label className="text-sm">Current Password</label>
            <div className="relative mb-4">
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm outline-none pr-10 placeholder:text-gray-500"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {showCurrent ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            {/* NEW PASSWORD */}
            <label className="text-sm">New Password</label>
            <div className="relative mb-4">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm outline-none pr-10 placeholder:text-gray-500"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <label className="text-sm">Confirm Password</label>
            <div className="relative mb-6">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm outline-none pr-10 placeholder:text-gray-500"
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>
          </div>

          <button className="
            text-white font-semibold py-2 rounded-t-[12px] rounded-b-none shadow-md max-sm:w-full
            bg-[linear-gradient(90deg,#3C2B98_10%,#F5F5F5_100%)]
            hover:bg-[linear-gradient(90deg,#3C2B98_0%,#3C2B98_90%)]
            transform transition-all duration-300 
            hover:scale-[1.05] hover:shadow-xl
            flex justify-center items-center gap-3
          ">
            Update Password
          </button>
        </div>

      </div>
    </div>
  );
}
