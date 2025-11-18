# ⚡ PaisaGraph — Personal Finance Tracker

![React](https://img.shields.io/badge/Frontend-React_19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative)

**PaisaGraph** is a full-stack personal finance tracker that helps users log transactions, visualize spending with interactive graphs, export reports, and manage budgets — built with **React 19**, **Node.js**, **Express**, and **MongoDB**.

---

## 🌟 Key Features

* 📊 **Interactive Spending Graphs** — Visualize income & expenses over time using Recharts.
* ➕ **Transaction Management** — Add, edit, and delete income/expense entries.
* 📁 **Export Reports** — Export transactions to PDF and Excel (jsPDF, xlsx).
* 🔐 **Authentication** — JWT-based auth with password hashing (bcrypt).
* 🧾 **Validation & Logging** — Request validation and logging with express-validator and morgan.
* 🤖 **AI Utilities (optional)** — Backend includes `@google/generative-ai` for future AI features.
* ✨ **Modern UI/UX** — Built with TailwindCSS and Framer Motion animations.

---

## 🧠 Tech Stack

### 🖥️ Frontend

* React 19
* Vite (development)
* TailwindCSS 4
* Framer Motion
* React Router v7
* Recharts (charts)
* Axios (API requests)
* jsPDF + jspdf-autotable (PDF export)
* xlsx (Excel export)
* lucide-react (icons)

### ⚙️ Backend

* Node.js + Express
* MongoDB + Mongoose
* JWT + Bcrypt for authentication
* Express-Validator for input validation
* Morgan for logging
* CORS & cookie-parser
* Optional: `@google/generative-ai` for AI features

---

## 🗂️ Folder Structure

### Frontend

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/         # images, icons
│   ├── components/     # reusable UI components
│   ├── context/        # auth & user context
│   ├── hooks/          # custom hooks
│   ├── screens/        # pages (Dashboard, Login, Register, Profile)
│   ├── routes/         # App routes
│   ├── config/         # axios, socket config
│   ├── utils/          # helpers (formatters, validators)
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

### Backend

```
backend/
├── controllers/       # request handlers
├── models/            # Mongoose schemas (User, Transaction, Category)
├── routes/            # Express routes (auth, transactions, reports)
├── middleware/        # auth, error handling
├── utils/             # helpers (jwt, formatters)
├── config/            # db connection, env loader
├── app.js             # Express app
├── server.js          # server entry (or start with `node app.js`)
└── package.json
```

---

## 🧰 Prerequisites

* Node.js v18 or later
* npm (or pnpm)
* MongoDB (local or Atlas)
* .env file with required environment variables

---

## ⚙️ Installation & Setup

Follow these steps to run PaisaGraph locally.

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/PaisaGraph.git
cd PaisaGraph
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with the following variables:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_api_key    # optional, for AI features
```

Start the backend server:

```bash
# from backend/
npx nodemon app.js
# or
node app.js
```

> If your entry file is `server.js`, run `node server.js` instead.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

### 4. Access the App

```
Frontend → http://localhost:5173
Backend  → http://localhost:5000
```

---

## 🚀 Usage Guide

1. Register or Login
2. Add categories and transactions
3. View spending graphs and summaries on the Dashboard
4. Export monthly reports to PDF / Excel
5. (Optional) Enable AI features if API key provided

---

## 🧪 API Endpoints (Example)

> Base URL: `http://localhost:5000/api`

* `POST /auth/register` — register a new user
* `POST /auth/login` — login and receive JWT
* `GET /transactions` — get user transactions (protected)
* `POST /transactions` — create a transaction (protected)
* `PUT /transactions/:id` — update a transaction (protected)
* `DELETE /transactions/:id` — delete a transaction (protected)
* `GET /reports/monthly` — monthly summary & aggregates (protected)

---

## ♻️ Common Scripts

### Backend

```bash
# start with nodemon (dev)
npx nodemon app.js
# or
node app.js
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

---

## 🪪 License

This project is available under the **MIT License**. Feel free to use and modify.

---

## 💬 Contact

If you want me to expand this README (add screenshots, CI/CD, deployment steps, example .env, or a complete API doc), tell me what you'd like next and I'll update the file.

**Author:** You (PaisaGraph project)
