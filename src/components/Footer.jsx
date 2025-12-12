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
        <footer className="w-full bg-[#3C2B98] rounded-t-[40px] px-6 sm:px-10 lg:px-[125px] lg:pt-[45px] pb-6">

          {/* MAIN CONTENT */}
          <div className="w-full max-w-7xl mx-auto 
              flex flex-col md:flex-row justify-between 
              gap-10 md:gap-16 text-white">

            {/* COLUMN 1 */}
            <div className="flex-2 flex flex-col gap-5 w-full md:w-[500px]">
              <div className="flex mt-5">
                <img
                  src="/ApexLogo.svg"
                  alt="Apex Logo"
                  className="h-[55px] md:h-[60px] object-contain"
                />
              </div>

              <p className="text-white/90 text-[14px] leading-relaxed 
                  md:min-w-[500px] w-full">
                From residential apartments to institutional campuses and modern
                villas, Apex Constructions & Infra Projects delivers quality,
                on-time projects with hands-on engineering leadership.
              </p>

              <div className="flex gap-3 mt-2">
                    <div
                      className="
                        w-8 h-8 flex items-center justify-center 
                        bg-[#FFE45B] text-white rounded-md text-[18px]
                      "
                    >
                     <a href=""><FaFacebookF /></a>
                    </div>
                    <div
                      className="
                        w-8 h-8 flex items-center justify-center 
                        bg-[#FFE45B] text-white rounded-md text-[18px]
                      "
                    >
                     <a href="https://www.instagram.com/actrofiteinfotech"><FaInstagram /></a>
                    </div>
                    <div
                      className="
                        w-8 h-8 flex items-center justify-center 
                        bg-[#FFE45B] text-white rounded-md text-[18px]
                      "
                    >
                      <a href="https://www.linkedin.com/company/actrofite-infotech-private-limited/"><FaLinkedinIn /></a>
                    </div>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex-1">
              <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
                Quick Links
              </h3>

              <ul className="space-y-2 md:space-y-3 text-[14px] text-white/90">
                {[
                  { tag: "Home", link: "/" },
                  { tag: "About Us", link: "/about" },
                  { tag: "Projects", link: "/projects" },
                  { tag: "CSR", link: "/csr" },
                  { tag: "Gallery", link: "/gallery" },
                  { tag: "Contact Us", link: "/contact" },
                ].map((obj, index) => (
                  <li key={index}>
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
            <div className="flex-1">
              <h3 className="text-[18px] md:text-[20px] font-semibold mb-3">
                Contact Us
              </h3>

              <ul className="space-y-3 md:space-y-4 text-[14px] text-white/90 max-w-[350px]">
                <li className="flex gap-2 items-start">
                  <FaPhoneAlt className="text-[#FFE45B] text-[18px] mt-[2px]" />
                  <span className="leading-snug">
                    <a href="tel:+919849140626">+91 9849140626</a> /{" "}
                    <a href="tel:+918453189999">+91 8453189999</a>
                  </span>
                </li>

                <li className="flex gap-2 items-start">
                  <MdEmail className="text-[#FFE45B] text-[18px] mt-[2px]" />
                  <span>
                    <a href="mailto:atpapex@gmail.com">atpapex@gmail.com</a>
                  </span>
                </li>

                <li className="flex gap-2 items-start">
                  <FaMapMarkerAlt className="text-[#FFE45B] text-[18px] mt-[2px]" />
                  <span className="leading-snug">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Lakshmi+Sadanam,+Bellary+Bypass+Circle,+Anantapuramu+515004"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lakshmi Sadanam, Bellary Bypass Circle,
                      <br />
                      Anantapuramu – 515004
                      <br />
                      anantapur.idn
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="border-t border-white/20 mt-8 pt-4 
              text-center text-[12px] md:text-[14px] text-white/70">
            © {new Date().getFullYear()} All Rights Reserved and developed by  |
            <span className="text-[#FFE45B] p-1">
              <a href="https://actrofiteinfotech.com/">Actrofite Infotech Pvt Ltd</a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
