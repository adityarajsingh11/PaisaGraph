import { GoogleGenerativeAI } from "@google/generative-ai";
import Transaction from "../models/transaction.model.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🧠 CHAT
export const askAI = async (req, res) => {
  try {
    const { question } = req.body;

    const transactions = await Transaction.find().sort({ date: 1 });

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      You are a financial assistant AI.
      User Question: ${question}
      User Transactions: ${JSON.stringify(transactions)}
      Use **only** this data.
      Answer short + useful.
    `;

    const result = await model.generateContent(prompt);

    const output =
      result.response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Unable to generate response.";

    res.json({ answer: output });

  } catch (err) {
    console.error("AI CHAT ERROR:", err);
    res.status(500).json({ message: "AI error" });
  }
};

// 📊 SMART INSIGHTS
export const getSmartInsights = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: 1 });

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro" });

    const prompt = `
      You are a finance analytics engine.
      Analyze the user's spending pattern.

      Transactions: ${JSON.stringify(transactions)}

      Write EXACTLY 5 bullet-point insights.
    `;

    const result = await model.generateContent(prompt);

    const output =
      result.response.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No insights available.";

    res.json({ insights: output });

  } catch (err) {
    console.error("INSIGHTS ERROR:", err);
    res.status(500).json({ message: "Insights error" });
  }
};
