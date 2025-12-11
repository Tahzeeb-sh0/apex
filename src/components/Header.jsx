import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-999 bg-white shadow-md rounded-bl-[20px] rounded-br-[20px]">
      <div
        className="
          w-full max-w-7xl
          mx-auto
          flex items-center justify-between
          py-2.5
          px-5 md:px-10 lg:px-[60px]
        "
      >
        {/* LOGO */}
        <img src="/logo.svg" alt="Apex Logo" className="h-12 object-contain" />


        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 text-[18px] font-medium text-[#455C7A]">
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
              className={`transition hover:text-[#3C2B98]
                ${pathname === path ? "text-[#3C2B98] font-semibold" : ""}
              `}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CALL BUTTON (DESKTOP ) */}
        <a
          href="tel:+91XXXXXXXXXX"
          className="
    hidden lg:flex
    items-center justify-center
    w-[111px] h-9
    pt-2 pb-2 px-5
    gap-2.5
    text-white font-semibold text-[14px]
    bg-[#3C2B98]
    rounded-tl-[10px] rounded-tr-[10px]
    rounded-bl-none rounded-br-none
    shadow hover:opacity-90 transition
  "
        >
          Call Now
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-[#455C7A]"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[400px] py-5" : "max-h-0 py-0"}
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
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}

          {/* MOBILE CALL BUTTON */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="
              text-white font-semibold 
              px-6 py-3 rounded-lg w-fit
              bg-[#3C2B98]
              shadow mt-2
            "
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
