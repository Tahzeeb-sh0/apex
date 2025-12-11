"use client";

export default function Listing() {
  const data = [
    {
      sr: "1",
      name: "Sri Jayalakshmi Matha Annapoorna Mandiram",
      type: "Temple",
      support: "Construction of dining hall, kitchen improvements, mandapam work",
    },
    {
      sr: "2",
      name: "Sivalayam Temple – Anantapuramu",
      type: "Temple",
      support: "Renovation, flooring, and compound wall work",
    },
    {
      sr: "3",
      name: "Sri Rama Temple – Local Area",
      type: "Temple",
      support: "Provided support for hall expansion, plastering & painting",
    },
    {
      sr: "4",
      name: "Local Masjid",
      type: "Masjid",
      support: "Repair works, flooring and minor civil works",
    },
    {
      sr: "5",
      name: "Church Community Hall",
      type: "Church",
      support: "Church structural support, flooring & minor construction work",
    },
    {
      sr: "6",
      name: "Old Age Home – Anantapuramu",
      type: "Welfare",
      support: "Toilet construction, waterline support, flooring",
    },
    {
      sr: "7",
      name: "Goshala / Cow Shelter",
      type: "Community",
      support: "Shed work, boundary wall assistance",
    },
    {
      sr: "8",
      name: "Village Community Mandapam",
      type: "Public Welfare",
      support: "Complete reconstruction support for event hall",
    },
    {
      sr: "9",
      name: "Religious Yatra Support Structures",
      type: "Temple / Public",
      support: "Temporary shed construction & utility support",
    },
  ];

  return (
    <section className="w-full flex justify-center bg-[#F4F4F4] py-14">
      <div className="w-full max-w-[1150px] px-5 ">

        {/* Title */}
        <h2 className="text-center text-[28px] sm:text-[34px] md:text-[38px] font-semibold text-[#3C2B98] mb-6">
          CSR Project <span className="text-[#F3D32C]">Listing</span>
        </h2>

        {/* Table Box */}
        <div className="border border-[#D0D0D0] bg-white rounded-lg overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-12 bg-[#3C2B98] text-white font-semibold text-[15px] p-2">
            <div className="col-span-1 py-3 text-center">Sr. No.</div>
            <div className="col-span-4 py-3 pl-3">Organization / Temple / Place Name</div>
            <div className="col-span-2 py-3 text-center">Type</div>
            <div className="col-span-5 py-3 pl-3">CSR Support Provided</div>
          </div>

          {/* Rows */}
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 border-b border-[#E5E5E5] text-[14px] sm:text-[15px] text-[#121212] p-2"
            >
              <div className="col-span-1 py-4 text-center">{item.sr}</div>
              <div className="col-span-4 py-4 font-semibold  pl-3">{item.name}</div>
              <div className="col-span-2 py-4 text-center text-[#3C2B98] font-medium">
                {item.type}
              </div>
              <div className="col-span-5 py-4 text-[#3C2B98] pl-3">{item.support}</div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
