// import { useState } from "react";
// import api from "../utils/axiosConfig";

// export default function AIChat() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {
//     try {
//       setLoading(true);
//       const res = await api.post("/ai/chat", { question });
//       setAnswer(res.data.answer);
//     } catch (error) {
//       setAnswer("❌ AI unable to respond right now.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow mt-6 border">
//       <h2 className="text-xl font-semibold">AI Finance Advisor</h2>

//       <textarea
//         className="w-full border p-3 mt-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-400 outline-none"
//         placeholder="Ask anything about your expenses..."
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//       />

//       <button
//         onClick={askAI}
//         className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow"
//       >
//         {loading ? "Thinking..." : "Ask AI"}
//       </button>

//       <div className="mt-4 text-gray-900 whitespace-pre-wrap bg-gray-50 p-3 rounded-lg">
//         {answer}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import api from "../utils/axiosConfig";
import { Sparkles, SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);
      setAnswer("");

      const res = await api.post("/ai/chat", { question });
      setAnswer(res.data.answer);
    } catch (error) {
      setAnswer("❌ AI unable to respond right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={22} className="text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-800">
          AI Finance Advisor
        </h2>
      </div>

      {/* Textarea */}
      <textarea
        className="w-full border border-gray-300 p-3 rounded-lg bg-gray-50 
                   focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition min-h-[90px]"
        placeholder="Ask anything about your expenses, savings, planning..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* Ask button */}
      <button
        onClick={askAI}
        disabled={loading}
        className="mt-4 flex items-center justify-center gap-2 bg-indigo-600 
                   text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition shadow 
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Thinking..." : "Ask AI"} <SendHorizonal size={18} />
      </button>

      {/* Result */}
      <div className="mt-5">
        {loading && (
          <div className="text-indigo-600 font-medium animate-pulse">
            Analyzing your transactions...
          </div>
        )}

        {!loading && answer && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-indigo-50 border border-indigo-200 text-gray-800 
                       p-4 rounded-xl whitespace-pre-wrap shadow-sm"
          >
            {answer}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
