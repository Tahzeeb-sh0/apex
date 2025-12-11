import React from "react";
import { Bell, LogOut, Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full  flex items-center justify-between px-6 py-5 bg-white border-b border-gray-200">

      {/* SEARCH BAR */}
      <div className="flex-1">
        <div className="w-full max-w-5xl border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2">
          
          <Search className="w-4 h-4 text-gray-500" />

          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="flex items-center gap-7 ml-6">

        <Bell className="w-5 h-5 text-black cursor-pointer" />

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <span className="text-gray-700 text-sm hidden sm:block">Admin</span>
        </div>

        <button className="flex items-center gap-1 text-red-500">
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Logout</span>
        </button>

      </div>
    </div>
  );
}
