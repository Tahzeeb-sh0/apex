import React, { useState } from "react";
import { FiMenu, FiX, FiChevronRight,  } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false); 
  const [mobileOpen, setMobileOpen] = useState(false); 
  const navigate = useNavigate();

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden fixed top-4 left-4 z-[70] text-white bg-[#3C2B98] p-2 rounded-md"
        onClick={() => setMobileOpen(true)}
      >
        <FiMenu size={22} />
      </button>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg z-[80] flex flex-col
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* HEADER */}
        <div className="bg-[#3C2B98] text-white p-5 flex items-center justify-between relative">
          {!collapsed && <img src="/ApexLogo.svg" alt="Logo" className="w-28" />}

          {/* Collapse Button */}
          <button
            className="hidden md:flex absolute right-3 top-5"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FiChevronRight
              size={22}
              className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
            />
          </button>

          {/* Mobile Close */}
          <FiX
            size={22}
            className="absolute right-4 top-4 md:hidden cursor-pointer"
            onClick={() => setMobileOpen(false)}
          />
        </div>

        {/* MENU */}
        <nav className="mt-0 text-md text-[#121217]">
          <MenuItem
            iconImg="/Icons/Dashboard.svg"
            label="Dashboard"
            collapsed={collapsed}
            onClick={() => navigate("/admin/dashboard")}
          />

          <MenuItem
            iconImg="/Icons/projects.svg"
            label="Projects"
            collapsed={collapsed}
            onClick={() => navigate("/admin/projects")}
          />

          <MenuItem
            iconImg="/Icons/addprojects.svg"
            label="Add Project"
            collapsed={collapsed}
            onClick={() => navigate("/admin/add-project")}
          />

          <MenuItem
            iconImg="/Icons/Enquiries1.svg"
            label="Enquiries"
            collapsed={collapsed}
            onClick={() => navigate("/admin/enquiries")}
          />

          <MenuItem
            iconImg="/Icons/settings.svg"
            label="Settings"
            collapsed={collapsed}
            onClick={() => navigate("/admin/settings")}
          />
        </nav>
      </aside>
    </>
  );
}

function MenuItem({ icon, iconImg, label, onClick, collapsed }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 px-5 py-3 cursor-pointer 
                 hover:bg-[#3C2B98] group border-b border-gray-200"
    >
      {iconImg ? (
        <img
          src={iconImg}
          className="w-10 h-10 group-hover:brightness-0 group-hover:invert"
          alt={label}
        />
      ) : (
        <div className="text-gray-700 text-lg group-hover:text-white">{icon}</div>
      )}

      {!collapsed && (
        <p className="text-gray-800 text-[15px] font-medium group-hover:text-white">
          {label}
        </p>
      )}
    </div>
  );
}
