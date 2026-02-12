import { useState } from "react";
import { Lightbulb, RefreshCcw } from "lucide-react";
import api from "../utils/axiosConfig";
import { motion } from "framer-motion";

export default function SmartInsights() {
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(false);

  const loadInsights = async () => {
    if (loading) return;

    try {
      setLoading(true);
      setInsights("");

      const res = await api.get("/ai/insights", {
        withCredentials: true, // 🔥 JWT cookie
      });

      setInsights(res.data.insights || "No insights available.");
    } catch (err) {
      console.error("AI Insights Error:", err);
      setInsights("❌ AI Insights temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  };

  const formattedInsights =
    insights && insights.startsWith("❌")
      ? []
      : insights
          .split("\n")
          .filter((i) => i.trim() !== "")
          .map((line) => line.replace(/^\*|-/, "").trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-indigo-50 to-purple-50
                 p-6 rounded-2xl shadow-xl border border-indigo-100"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-700">
          <Lightbulb className="text-yellow-500" size={22} />
          Smart Insights
        </h2>

        <button
          onClick={loadInsights}
          disabled={loading}
          className="flex items-center gap-2 bg-indigo-600 text-white
                     px-3 py-1.5 rounded-lg text-sm shadow
                     hover:bg-indigo-700 transition
                     disabled:opacity-60"
        >
          <RefreshCcw size={15} />
          Generate
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-indigo-600 font-medium animate-pulse text-center py-4">
          🔍 Generating insights...
        </p>
      )}

      {/* ERROR */}
      {!loading && insights.startsWith("❌") && (
        <p className="text-red-500 text-center font-medium">{insights}</p>
      )}

      {/* INSIGHTS */}
      {!loading && formattedInsights.length > 0 && (
        <ul className="space-y-3">
          {formattedInsights.map((line, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200
                         p-3 rounded-lg shadow-sm text-gray-700
                         flex gap-3 items-start"
            >
              <span className="text-indigo-600 font-bold mt-1">•</span>
              <span>{line}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* EMPTY */}
      {!loading && !insights && (
        <p className="text-gray-500 text-center">
          Click <b>Generate</b> to get AI insights
        </p>
      )}
    </motion.div>
  );
}
