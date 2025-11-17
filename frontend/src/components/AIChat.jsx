import { useState } from "react";
import api from "../utils/axiosConfig";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    try {
      setLoading(true);
      const res = await api.post("/ai/chat", { question });
      setAnswer(res.data.answer);
    } catch (error) {
      setAnswer("❌ AI unable to respond right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6 border">
      <h2 className="text-xl font-semibold">AI Finance Advisor</h2>

      <textarea
        className="w-full border p-3 mt-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-400 outline-none"
        placeholder="Ask anything about your expenses..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={askAI}
        className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      <div className="mt-4 text-gray-900 whitespace-pre-wrap bg-gray-50 p-3 rounded-lg">
        {answer}
      </div>
    </div>
  );
}
