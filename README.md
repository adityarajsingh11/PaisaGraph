# ⚡ PaisaGraph — Your Interactive AI-Powered Finance Buddy

![React](https://img.shields.io/badge/Frontend-React_19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![Gemini](https://img.shields.io/badge/AI-Gemini_1.5_Pro-purple?logo=google)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative)

**PaisaGraph** is your interactive, AI-powered finance buddy that not only tracks expenses but talks to you, guides you, and explains your financial habits in a friendly way. that helps users manage expenses, visualize spending patterns, generate insights, and make smarter decisions — now enhanced with **Gemini AI** for **Financial Insights** and **AI Assistant Support**.

---

## 🌟 Key Features

### 📊 **Spending Analytics & Dashboards**

Interactive charts built with **Recharts** to understand income, expenses, trends, and monthly summaries.

### ➕ **Transaction Management**

Add, edit, delete, filter and export transactions easily.

### 🤖 **Gemini AI Integration**

Powered by **Gemini 1.5 Pro**, PaisaGraph includes:

#### **2️⃣ AI Financial Insights**

Gemini automatically analyzes your transactions to generate:

* Spending patterns
* Budget warnings
* Top categories
* Trend changes
* Monthly financial summaries

#### **3️⃣ AI Chat Assistant**

A personal finance AI assistant that can answer questions like:

* “Is my spending increasing this month?”
* “Top 5 expenses?”
* “Give me financial suggestions?”

### 📁 **Export Reports**

Export data as:

* PDF (using jsPDF + AutoTable)
* Excel (using XLSX)

### 🔐 **Secure Authentication**

JWT token-based secure login/register system.

### ✨ **Modern UI/UX**

TailwindCSS + Framer Motion for clean animations and smooth interactions.

---

## 🧠 Tech Stack

### 🖥️ Frontend

* React 19
* Vite
* TailwindCSS 4
* Framer Motion
* React Router v7
* Axios
* Recharts
* jsPDF, AutoTable, XLSX
* Lucide Icons

### ⚙️ Backend

* Node.js + Express
* MongoDB + Mongoose
* JWT Authentication
* bcrypt for password hashing
* cookie-parser, cors, morgan
* express-validator
* @google/generative-ai (Gemini)

---

## 🤖 Gemini AI — How It Works

### **AI Insight Engine**

Backend sends user's monthly summary to Gemini to generate:

* Expense spikes
* Category insights
* Trends
* Savings recommendations

### **AI Chat Assistant**

User types queries → PaisaGraph sends context + transactions to Gemini → AI replies in natural language.

---

## 🗂️ Folder Structure

### **Frontend**

```
frontend/
├── public/
│   └── index.html
│
├── src/
│   ├── assets/                     # images/icons
│
│   ├── components/
│   │   ├── AIChat.jsx              # AI Chat UI
│   │   ├── graph/
│   │   │   ├── GraphSection.jsx
│   │   │   └── SpendingGraph.jsx
│   │   ├── ExportButtons.jsx
│   │   ├── SmartInsights.jsx       # AI Insights UI
│   │   ├── SummaryCards.jsx
│   │   ├── TransactionList.jsx
│   │   └── TransactionForm.jsx
│
│   ├── context/
│   │   └── UserContext.jsx
│
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Home.jsx
│   │   └── Profile.jsx
│
│   ├── utils/
│   │   ├── axiosConfig.js
│   │   ├── exportPDF.js
│   │   ├── exportExcel.js
│   │   └── exportCSV.js
│
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── index.css

```

### **Backend**

```
backend/
├── config/
│   └── db.js                # MongoDB connection
│
├── controllers/
│   ├── auth.controller.js   # register/login
│   ├── transaction.controller.js
│   └── ai.controller.js     # Gemini AI (Insights + Chat)
│
├── middleware/
│   └── auth.js              # JWT verification
│
├── models/
│   ├── User.js
│   └── Transaction.js
│
├── routes/
│   ├── auth.routes.js
│   ├── transaction.routes.js
│   └── ai.routes.js         # AI routes
│
├── utils/
│   ├── generateToken.js
│   └── helpers.js
│
├── .env
├── app.js                   # Express app setup
└── server.js                # (optional) start file

```

---

## ⚙️ Installation Guide

### 1️⃣ Clone Project

```
git clone https://github.com/adityarajsingh11/PaisaGraph.git
cd PaisaGraph
```

### 2️⃣ Backend Setup

```
cd backend
npm install
```

### Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_key
```

### Start Backend

```
npx nodemon app.js
```

### 3️⃣ Frontend Setup

```
cd ../frontend
npm install
npm run dev
```

### URLs

```
Frontend → http://localhost:5173
Backend → http://localhost:5000/api
```

---
## 🪪 License

### 📜 Open Source & Free Forever

PaisaGraph is proudly released under the **MIT License**, which means:

✅ You can use it anywhere — personal or commercial projects

✅ You can modify, enhance, or extend it freely

✅ You can distribute your own versions

🔓 No restrictions. No complications. Pure open‑source freedom.

> 💡 *If you build something amazing on top of PaisaGraph, feel free to share it with the community!*

---

## 🚀 Usage Flow

1. Login / Register
2. Add transactions
3. View dashboard insights
4. Ask AI questions
5. Export data (PDF / Excel)
6. Receive Gemini-powered financial analysis

---

## 💬 Contact

👨‍💻 **Aditya Raj Singh**  
📧 Email: [9555adityarajsingh@gmail.com](mailto:9555adityarajsingh@gmail.com)  
🐙 GitHub: [@adityarajsingh11](https://github.com/adityarajsingh11)  
💼 LinkedIn: [@adityarajsingh117](https://linkedin.com/in/adityarajsingh117)  
🐦 X (Twitter): [@_op_aditya_11](https://x.com/_op_aditya_11)

