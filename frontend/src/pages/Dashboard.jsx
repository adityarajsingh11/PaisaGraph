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

import api from "../utils/axiosConfig";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });

  // Load all transactions
  const loadTransactions = async () => {
    try {
      const res = await api.get("/transactions");
      let arr = res.data.transactions || res.data.data || [];

      // Sort oldest → newest
      arr = arr.sort((a, b) => new Date(a.date) - new Date(b.date));

      setTransactions(arr);
    } catch (err) {
      console.error("Error loading transactions:", err);
    }
  };

  // Load summary
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

  // Load everything
  const loadAll = async () => {
    await Promise.all([loadTransactions(), loadSummary()]);
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleAddTransaction = async () => {
    await loadAll();
  };

  // Line graph data (oldest → newest)
  const graphData = [...transactions]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((t) => ({
      name: t.title,
      amount: Number(t.amount),
    }));

  // Transaction table (newest → oldest)
  const tableData = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      {/* HEADER */}
      <Header />

      {/* SUMMARY CARDS */}
      <div className="mt-6">
        <SummaryCards {...summary} />
      </div>

      {/* TOP SPENDING GRAPH */}
      <div className="mt-8 bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Spending Overview
        </h2>
        <SpendingGraph data={graphData} />
      </div>

      {/* MAIN SECTION */}
      {/* MAIN SECTION: FORM LEFT | GRAPHS RIGHT */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 items-stretch">

  {/* LEFT: Form - fixed width */}
  <div className="h-full">

    <TransactionForm onAdd={handleAddTransaction} />
  </div>

  {/* RIGHT: GraphSection TAKES FULL REMAINING WIDTH */}
  <div className="lg:col-span-2 h-full flex">
    <GraphSection transactions={transactions} />
  </div>

</div>


      {/* TRANSACTION TABLE */}
      <div className="mt-8">
        <ExportButtons transactions={tableData} />
        <SmartInsights />
        <AIChat />

        <TransactionList transactions={tableData} onChange={loadAll} />
      </div>
    </div>
  );
}

export default Dashboard;
