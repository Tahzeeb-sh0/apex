import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu when navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed w-full z-[999] bg-white shadow-md rounded-b-[20px]">
      <div className="
        w-full max-w-7xl 
        mx-auto 
        flex items-center justify-between
        py-3
        px-4 sm:px-6 lg:px-10
      ">
        
        {/* LOGO */}
        <img
          src="/logo.svg"
          alt="Apex Logo"
          className="h-10 sm:h-12 object-contain"
        />

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 text-[17px] font-medium text-[#455C7A]">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Projects", "/projects"],
            ["CSR", "/csr"],
            ["Gallery", "/gallery"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className={`transition hover:text-[#3C2B98] ${
                pathname === path ? "text-[#3C2B98] font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CALL BUTTON */}
        <a
          href="tel:+91XXXXXXXXXX"
          className="
            hidden lg:flex items-center justify-center
            w-[110px] h-9
            text-white font-semibold text-[14px]
            bg-[#3C2B98]
            rounded-t-[10px]
            shadow hover:opacity-90 transition
          "
        >
          Call Now
        </a>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-[#455C7A]"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`
          lg:hidden overflow-hidden bg-white 
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[420px] py-4" : "max-h-0 py-0"}
        `}
      >
        <div className="px-6 flex flex-col gap-4 text-[17px] font-medium text-[#455C7A]">

          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Projects", "/projects"],
            ["CSR", "/csr"],
            ["Gallery", "/gallery"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="active:scale-95 transition"
            >
              {label}
            </Link>
          ))}

          {/* MOBILE CALL BUTTON */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="
              text-white font-semibold 
              px-6 py-3 mt-3
              w-fit rounded-lg
              bg-[#3C2B98]
              shadow active:scale-95 transition
            "
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
