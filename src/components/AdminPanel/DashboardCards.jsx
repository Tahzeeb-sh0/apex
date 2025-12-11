import React from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Total Projects",
    value: 24,
    subtitle: "+2 this month",
    icon: "/Icons/project.svg",
    link: "/admin/projects",
  },
  {
    id: 2,
    title: "Active Projects",
    value: 18,
    subtitle: "Currently running",
    icon: "/Icons/Activeproject.svg",
    link: "/admin/projects",
  },
  {
    id: 3,
    title: "Upcoming Projects",
    value: 2,
    subtitle: "Pending completion",
    icon: "/Icons/upcoming.svg",
    link: "/admin/projects",
  },
  {
    id: 4,
    title: "CSR",
    value: 12,
    subtitle: "Needs response",
    icon: "/Icons/Enquiries.svg",
    link: "/admin/enquiries",
  },
];

export default function DashboardCards() {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 mt-4"> {/* Added padding L/R */}

      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Admin!
          </h2>
          <p className="text-sm text-gray-500">
            Here&apos;s an overview of today&apos;s project activity.
          </p>
        </div>

        {/* Add New Project Button */}
        <button
          onClick={() => navigate("/admin/add-project")}
          className="mt-4 sm:mt-0 px-4 py-2 rounded-lg text-white text-sm sm:text-base 
          bg-gradient-to-r from-[#3C2B98] to-[#8B5CF6] shadow-md hover:opacity-90"
        >
          + Add New Project
        </button>
      </div>

      {/* CARDS SECTION */}
      <div
        className="
          grid 
          grid-cols-1
          xs:grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-4
          gap-4 
          mt-6
        "
      >
        {cards.map((c) => (
          <div
            key={c.id}
            className="
              bg-white 
              rounded-xl 
              p-4 
              sm:p-5 
              md:p-6 
              lg:p-6 
              shadow-sm 
              hover:shadow-md 
              transition
            "
          >
            <div className="flex justify-between items-start">
              <div>
                <div
                  className="
                    text-sm 
                    sm:text-base 
                    md:text-lg 
                    font-bold 
                    text-[#121217]
                  "
                >
                  {c.title}
                </div>

                <div
                  className="
                    text-2xl 
                    sm:text-3xl 
                    md:text-4xl 
                    lg:text-4xl 
                    font-semibold 
                    text-[#3C2B98] 
                    mt-3
                  "
                >
                  {c.value}
                </div>

                <div
                  className="
                    text-[11px] 
                    sm:text-xs 
                    md:text-sm 
                    text-[#595959] 
                    mt-2
                  "
                >
                  {c.subtitle}
                </div>
              </div>

              <div className="bg-[#e8f0ee] p-2 rounded-md">
                <img
                  src={c.icon}
                  alt=""
                  className="
                    w-5 h-5 
                    sm:w-6 sm:h-6 
                    md:w-7 md:h-7 
                    lg:w-8 lg:h-8
                  "
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => navigate(c.link)}
                className="
                  text-sm 
                  sm:text-[15px] 
                  md:text-base 
                  text-[#3C2B98] 
                  hover:underline
                "
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
