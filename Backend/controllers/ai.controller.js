// import { GoogleGenerativeAI } from "@google/generative-ai";
// import Transaction from "../models/transaction.model.js";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // 🧠 CHAT
// export const askAI = async (req, res) => {
//   try {
//     const { question } = req.body;

//     const userId = req.user._id;

//     const transactions = await Transaction.find({ userId }).sort({ date: 1 });

//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//     const prompt = `
//         You are a personal finance AI assistant for an Indian user.
//         Always follow these rules:
//         - All currency must be in ₹ (Indian Rupees), NEVER $.  
//         - Keep answers short and clear.
//         - Use user's transaction data only.
//         - If category names look similar (e.g., Food, foood), treat them as same.

//         User Question: ${question}

//         User's Transactions: ${JSON.stringify(transactions)}
//     `;


//     const result = await model.generateContent(prompt);

//     const output =
//       result.response.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "Unable to generate response.";

//     res.json({ answer: output });

//   } catch (err) {
//     console.error("AI CHAT ERROR:", err);
//     res.status(500).json({ message: "AI error" });
//   }
// };

// // 📊 SMART INSIGHTS
// export const getSmartInsights = async (req, res) => {
//   try {
//    const userId = req.user._id;

//     const transactions = await Transaction.find({ userId }).sort({ date: 1 });

//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//     const prompt = `
//         You are a financial analytics AI for an Indian user.
//         Important Rules:
//         - Always use currency symbol "₹" (Indian Rupees), never use "$".
//         - Keep insights short, crisp and helpful.
//         - Output EXACTLY 5 bullet points.
//         - Analyze trends, unusual spending, category-wise spikes, saving behaviour etc.

//         Transactions: ${JSON.stringify(transactions)}

//         Now generate 5 smart insights in bullet points.
//     `;


//     const result = await model.generateContent(prompt);

//     const output =
//       result.response.candidates?.[0]?.content?.parts?.[0]?.text ||
//       "No insights available.";

//     res.json({ insights: output });

//   } catch (err) {
//     console.error("INSIGHTS ERROR:", err);
//     res.status(500).json({ message: "Insights error" });
//   }
// };


import { GoogleGenerativeAI } from "@google/generative-ai";
import Transaction from "../models/transaction.model.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ----------------------------------
// 1. AI CHATBOT
// ----------------------------------
export const askAI = async (req, res) => {
  try {
    const { question } = req.body;
    const userId = req.user._id;

    const transactions = await Transaction.find({ userId }).sort({ date: 1 });

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

//     const prompt = `
// You are a personal finance AI assistant for an Indian user.
// Rules:
// - ALWAYS use ₹ for money (never $)
// - Keep answers short & accurate
// - Use ONLY the user’s transaction data
// - If categories look similar, treat them as same

// User Question: ${question}

// User Transactions: ${JSON.stringify(transactions)}
//     `;

    const prompt = `
You are a personal finance AI advisor for an Indian user.
You can ONLY answer using the transaction data given below.
If the user asks something not possible using the data, say:
"I don’t have enough data to answer that."

STRICT RULES:
- ALWAYS use "₹" for currency. Never use "$".
- NEVER create fake transactions.
- NEVER estimate values — calculate ONLY from provided data.
- If categories look similar (Food, foood, food), treat them as same.
- Be short, precise and helpful.
- When giving lists, always sort by most recent → oldest.

USER QUESTION:
${question}

USER TRANSACTIONS (array of objects):
${JSON.stringify(transactions)}

Now give the best possible answer based ONLY on these transactions.
`;


    const result = await model.generateContent(prompt);

    const output = result.response.text() || "Unable to generate response.";

    res.json({ answer: output });

  } catch (err) {
    console.error("AI CHAT ERROR:", err);
    res.status(500).json({ message: "AI error" });
  }
};


// ----------------------------------
// 2. SMART INSIGHTS
// ----------------------------------
export const getSmartInsights = async (req, res) => {
  try {
    const userId = req.user._id;

    const transactions = await Transaction.find({ userId }).sort({ date: 1 });

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

//     const prompt = `
// You are a financial analytic AI.
// Rules:
// - Use "₹" for currency
// - Output EXACTLY 5 bullet points
// - Show spending pattern, savings trend, warning signs, category spikes

// User Transactions: ${JSON.stringify(transactions)}

// Now generate insights:
//     `;

     const prompt = `
You are a financial analytics engine for an Indian user.

Your job is to analyze ONLY the user's transactions and generate EXACTLY 5 insights.

STRICT RULES:
- ALWAYS use "₹" (Indian Rupees).
- NEVER use "$".
- Output MUST be EXACTLY 5 bullet points.
- Each bullet must be short, crisp, and actionable.
- Do not invent transactions. Use ONLY the data provided.
- Identify trends such as:
  - Spending spikes
  - Category-wise increases
  - Savings patterns
  - Monthly comparisons
  - Unusual expenses
  - Highest spending category
  - Cash-flow warnings

USER TRANSACTIONS:
${JSON.stringify(transactions)}

Now generate EXACTLY 5 smart insights in bullet points.
`;

    const result = await model.generateContent(prompt);

    const output = result.response.text() || "No insights available.";

    res.json({ insights: output });

  } catch (err) {
    console.error("INSIGHTS ERROR:", err);
    res.status(500).json({ message: "Insights error" });
  }
};
