import { useState } from "react";
import api from "../utils/axiosConfig";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    const res = await api.post("/ai/chat", { question });
    setAnswer(res.data.answer);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="text-lg font-semibold">AI Finance Advisor</h2>

      <textarea
        className="w-full border p-2 mt-2 rounded"
        placeholder="Ask anything about your finances..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={askAI}
        className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded"
      >
        Ask AI
      </button>

      <div className="mt-3 text-gray-800 whitespace-pre-wrap">
        {answer}
      </div>
    </div>
  );
}
