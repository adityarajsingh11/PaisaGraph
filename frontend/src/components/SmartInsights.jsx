import { useEffect, useState } from "react";
import api from "../utils/axiosConfig";

export default function SmartInsights() {
  const [insights, setInsights] = useState("");

  useEffect(() => {
    loadInsights();
  }, []);

  const loadInsights = async () => {
    const res = await api.get("/ai/insights");
    setInsights(res.data.insights);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="text-lg font-semibold mb-2">Smart Insights</h2>
      <pre className="text-gray-700 whitespace-pre-wrap">{insights}</pre>
    </div>
  );
}
