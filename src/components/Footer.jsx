"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <footer className="w-full bg-[#3C2B98] rounded-t-[40px] px-6 sm:px-10 lg:px-[125px] lg:pt-[45px] pb-3.5">
          {/* MAIN CONTENT */}
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 text-white">
            {/* COLUMN 1 */}
            <div className="flex-2 flex flex-col gap-5  w-[500px]">
              <div className="flex mt-2">
                <img
                  src="/ApexLogo.svg"
                  alt="Apex Logo"
                  className="  h-[60px] object-contain"
                />
              </div>

              <p className="text-white/90 text-[14px] leading-relaxed min-w-[500px]">
                From residential apartments to institutional campuses and modern
                villas, Apex Constructions & Infra Projects delivers quality,
                on-time projects with hands-on engineering leadership.
              </p>

              <div className="flex gap-3 mt-2">
                {[<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />].map(
                  (Icon, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 flex items-center justify-center bg-[#FFE45B] text-white rounded-md text-[18px]"
                    >
                      {Icon}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex-1 border-white/20 ">
              <h3 className="text-[20px] font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-[14px] text-white/90">
                {[
                  {
                    id: 1,
                    tag: "Home",
                    link: "/",
                  },
                  {
                    id: 2,
                    tag: "About Us",
                    link: "/about",
                  },
                  {
                    id: 3,
                    tag: "Projects",
                    link: "/projects",
                  },
                  {
                    id: 4,
                    tag: "CSR",
                    link: "/csr",
                  },
                  {
                    id: 5,
                    tag: "Gallery",
                    link: "/gallery",
                  },
                  {
                    id: 6,
                    tag: "Contact Us",
                    link: "/contact",
                  },
                ].map((obj) => (
                  <li key={obj.id}>
                    <a
                      href={obj.link}
                      className="hover:text-[#FFE45B] transition"
                    >
                      {obj.tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="flex-1 border-white/20 ">
              <h3 className="text-[20px] font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4 text-[14px] text-white/90 max-w-[350px]">
                <li className="flex gap-2 items-start">
                  <FaPhoneAlt className="text-[#FFE45B] text-[18px] mt-0.5" />
                  <span>
                    <a href="tel:+919849140626">+91 9849140626</a>/
                    <a href="tel:+918453189999">+91 8453189999</a>
                  </span>
                </li>

                <li className="flex gap-2 items-start">
                  <MdEmail className="text-[#FFE45B] text-[18px] mt-0.5" />
                  <span>
                    <a href="mailto:atpapex@gmail.com">atpapex@gmail.com</a>
                  </span>
                </li>

                <li className="flex gap-2 items-start">
                  <FaMapMarkerAlt className="text-[#FFE45B] text-[18px] mt-0.5" />
                  <span>
                    Opp. Githam College, Anantapur, <br /> Andhra Pradesh
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="border-t border-white/20 mt-10 pt-4 text-center text-[14px] text-white/70">
            © {new Date().getFullYear()} All Rights Reserved |{" "}
            <span className="text-[#FFE45B] p-1">
              <a href="https://www.k7codelabs.com/">K7CodeLabs</a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
