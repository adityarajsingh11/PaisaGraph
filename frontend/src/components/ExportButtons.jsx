import { exportToCSV } from "../utils/exportCSV";
import { exportToExcel } from "../utils/exportExcel";
import { exportToPDF } from "../utils/exportPDF";

export default function ExportButtons({ transactions }) {
  return (
    <div className="flex gap-3 mb-4">
      
      <button
        onClick={() => exportToCSV(transactions)}
        className="px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Export CSV
      </button>

      <button
        onClick={() => exportToExcel(transactions)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Export Excel
      </button>

      <button
        onClick={() => exportToPDF(transactions)}
        className="px-4 py-2 bg-red-600 text-white rounded-lg"
      >
        Export PDF
      </button>

    </div>
  );
}
