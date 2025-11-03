import { useState } from "react";
import api from "../utils/axiosConfig";

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", category: "", amount: "", type: "expense" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/transactions", form);
    onAdd();
    setForm({ title: "", category: "", amount: "", type: "expense" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-xl space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Add Transaction</h2>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full p-2 border rounded-lg"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="w-full p-2 border rounded-lg"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="w-full p-2 border rounded-lg"
        required
      />
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="w-full p-2 border rounded-lg"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        Add
      </button>
    </form>
  );
}
export default TransactionForm;
