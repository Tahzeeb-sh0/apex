import React from "react";
import Sidebar from "./AdminPanel/Sidebar";
import Topbar from "./AdminPanel/Topbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex w-full h-screen bg-[#F5F7F8]">

      {/* SIDEBAR FIXED */}
      <div className="w-64 fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* RIGHT SECTION */}
      <div className="ml-64 w-[calc(100%-16rem)] flex flex-col">

        {/* TOPBAR FIXED */}
        <div className="sticky top-0 z-40">
          <Topbar />
        </div>

        {/* MAIN PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>

    </div>
  );
}
