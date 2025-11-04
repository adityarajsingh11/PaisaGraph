import { useEffect, useState } from "react";
import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import api from "../utils/axiosConfig";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({ income: 0, expense: 0, balance: 0 });

 const load = async () => {
  try {
    const res = await api.get("/transactions");
    setTransactions(res.data.transactions || res.data.data || []);

    const summaryRes = await api.get("/transactions/summary");
    setSummary(summaryRes.data.summary || res.data.data || {});
  } catch (err) {
    console.error("Error loading dashboard:", err);
  }
};


  useEffect(() => {
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <Header />
      <SummaryCards {...summary} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <TransactionForm onAdd={load} />
        <div className="lg:col-span-2">
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
