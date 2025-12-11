import React from "react";

export default function ToggleSwitch({ checked = false }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input defaultChecked={checked} type="checkbox" className="sr-only peer" />
      <div className="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-green-500 transition" />
      <span className="absolute left-1 top-1 w-3.5 h-3.5 bg-white rounded-full transition peer-checked:translate-x-5" />
    </label>
  );
}
