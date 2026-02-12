import { FileDown, FileSpreadsheet, FileType } from "lucide-react";
import { exportToCSV } from "../utils/exportCSV";
import { exportToExcel } from "../utils/exportExcel";
import { exportToPDF } from "../utils/exportPDF";

export default function ExportButtons({ transactions }) {
  const buttons = [
    {
      label: "Export CSV",
      color: "from-green-500 to-emerald-600",
      icon: <FileDown size={18} />,
      onClick: () => exportToCSV(transactions),
    },
    {
      label: "Export Excel",
      color: "from-blue-500 to-indigo-600",
      icon: <FileSpreadsheet size={18} />,
      onClick: () => exportToExcel(transactions),
    },
    {
      label: "Export PDF",
      color: "from-red-500 to-rose-600",
      icon: <FileType size={18} />,
      onClick: () => exportToPDF(transactions),
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {buttons.map((btn, i) => (
        <button
          key={i}
          onClick={btn.onClick}
          className={`
            flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium
            bg-gradient-to-r ${btn.color}
            shadow-md hover:shadow-xl hover:scale-[1.03]
            transition-all duration-200
          `}
        >
          {btn.icon} {btn.label}
        </button>
      ))}
    </div>
  );
}
