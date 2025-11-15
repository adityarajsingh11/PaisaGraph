import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      {/* Dropdown Toggle Button */}
      <button
        type="button"
        className="w-full flex justify-between items-center p-2.5 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
        onClick={() => setOpen(!open)}
      >
        <span className={value ? "text-gray-700" : "text-gray-400"}>
          {value || `Select ${label}`}
        </span>
        <ChevronDown size={18} className="text-gray-500" />
      </button>

      {/* Dropdown List */}
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto animate-fadeIn">
          {options.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className="px-3 py-2 hover:bg-indigo-100 cursor-pointer text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
