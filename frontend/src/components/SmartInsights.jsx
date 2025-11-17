// import { useEffect, useState } from "react";
// import api from "../utils/axiosConfig";

// export default function SmartInsights() {
//   const [insights, setInsights] = useState("");
//   const [loading, setLoading] = useState(false);

//   const loadInsights = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get("/ai/insights");
//       setInsights(res.data.insights);
//     } catch (err) {
//       console.error("AI Insights Error:", err);
//       setInsights("❌ Unable to generate insights.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadInsights();
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow mt-6 border">
//       <h2 className="text-xl font-semibold mb-3 text-gray-800">
//         Smart Insights
//       </h2>

//       {loading ? (
//         <p className="text-indigo-600 font-medium">Analyzing your expenses...</p>
//       ) : (
//         <ul className="list-disc ml-6 space-y-2 text-gray-700">
//           {insights
//             .split("\n")
//             .filter((item) => item.trim() !== "")
//             .map((line, idx) => (
//               <li key={idx}>{line.replace(/^\*|-/, "").trim()}</li>
//             ))}
//         </ul>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Lightbulb, RefreshCcw } from "lucide-react";
import api from "../utils/axiosConfig";
import { motion } from "framer-motion";

export default function SmartInsights() {
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);

  const loadInsights = async () => {
    try {
      setLoading(true);
      const res = await api.get("/ai/insights");
      setInsights(res.data.insights);
    } catch (err) {
      console.error("AI Insights Error:", err);
      setInsights("❌ Unable to generate insights.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInsights();
  }, []);

  const formattedInsights = insights
    .split("\n")
    .filter((item) => item.trim() !== "")
    .map((line) => line.replace(/^\*|-/, "").trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-xl border border-indigo-100"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-700">
          <Lightbulb className="text-yellow-500" size={22} /> Smart Insights
        </h2>

        <button
          onClick={loadInsights}
          className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm shadow hover:bg-indigo-700 transition active:scale-95"
        >
          <RefreshCcw size={15} /> Refresh
        </button>
      </div>

      {/* LOADING STATE */}
      {loading ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-indigo-600 font-medium animate-pulse text-center py-4"
        >
          🔍 Analyzing your financial patterns...
        </motion.p>
      ) : (
        <ul className="space-y-3">
          {formattedInsights.map((line, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm text-gray-700 flex gap-3 items-start hover:shadow-md transition"
            >
              <span className="text-indigo-600 font-bold mt-1">•</span>
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
