
import { useEffect, useState } from "react";
import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SpendingGraph from "../components/SpendingGraph";
import GraphSection from "../components/GraphSection";
import ExportButtons from "../components/ExportButtons";
import SmartInsights from "../components/SmartInsights";
import AIChat from "../components/AIChat";
import { motion } from "framer-motion";
import api from "../utils/axiosConfig";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });

  const loadTransactions = async () => {
    try {
      const res = await api.get("/transactions");
      const arr = (res.data.transactions || res.data.data || []).sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      setTransactions(arr);
    } catch (err) {
      console.error("Error loading transactions:", err);
    }
  };

  const loadSummary = async () => {
    try {
      const res = await api.get("/transactions/summary");
      setSummary({
        income: res.data.data?.income || 0,
        expense: res.data.data?.expense || 0,
        balance: res.data.data?.balance || 0,
      });
    } catch (err) {
      console.error("Error loading summary:", err);
    }
  };

  const loadAll = async () => Promise.all([loadTransactions(), loadSummary()]);

  useEffect(() => {
    loadAll();
  }, []);

  const handleAddTransaction = async () => loadAll();

  const graphData = [...transactions]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((t) => ({
      name: t.title,
      amount: Number(t.amount),
    }));

  const tableData = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-x-hidden w-full">

      {/* 🔥 FIXED HEADER */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Add padding to avoid overlap below the header */}
      <div className="pt-24 px-4 md:px-8 pb-8">

        {/* SUMMARY CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <SummaryCards {...summary} />
        </motion.div>

        {/* SPENDING GRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📉 Spending Overview
          </h2>
          <SpendingGraph data={graphData} />
        </motion.div>

        {/* FORM + CATEGORY GRAPHS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

          {/* LEFT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <TransactionForm onAdd={handleAddTransaction} />
          </motion.div>

          {/* RIGHT CATEGORY GRAPHS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 h-full"
          >
            <GraphSection transactions={transactions} />
          </motion.div>
        </div>

        {/* SMART INSIGHTS + AI CHAT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <SmartInsights />
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <AIChat />
          </div>
        </motion.div>

        {/* EXPORT + TABLE */}
        <div className="mt-12">
          <ExportButtons transactions={tableData} />

          <div className="mt-5">
            <TransactionList transactions={tableData} onChange={loadAll} />
          </div>
        </div>

      </div>
    </div>
  );
}
