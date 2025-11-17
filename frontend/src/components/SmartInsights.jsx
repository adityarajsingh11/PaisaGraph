import { useEffect, useState } from "react";
import api from "../utils/axiosConfig";

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

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6 border">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">
        Smart Insights
      </h2>

      {loading ? (
        <p className="text-indigo-600 font-medium">Analyzing your expenses...</p>
      ) : (
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {insights
            .split("\n")
            .filter((item) => item.trim() !== "")
            .map((line, idx) => (
              <li key={idx}>{line.replace(/^\*|-/, "").trim()}</li>
            ))}
        </ul>
      )}
    </div>
  );
}
