import { useState } from "react";
import api from "../utils/axiosConfig";
import CustomDropdown from "../components/CustomDropdown";


function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    amount: "",
    type: "income",
  });

  // ⭐ Essential Title Options
  const titleOptions = [
    // Income
    "Salary",
    "Freelance Work",
    "Bonus",
    "Gift Money",
    "Interest Income",

    // Expenses
    "Groceries",
    "Electric Bill",
    "Mobile Recharge",
    "Fuel",
    "Dining Out",
    "Shopping",
    "Medicines",
    "Travel Expense",
    "Subscription",
  ];

  // ⭐ Essential Categories Only
  const categoryOptions = [
    "Salary",
    "Freelancing",
    "Investments",
    "Gifts",

    "Food",
    "Transport",
    "Bills",
    "Health",
    "Shopping",
    "Travel",
    "Subscriptions",
    "Other",
  ];

  const typeOptions = ["Income", "Expense"];


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/transactions", form);
      setForm({ title: "", category: "", amount: "", type: "expense" });
      onAdd();
    } catch (err) {
      console.error("Error adding transaction:", err);
      alert("Failed to add transaction.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-lg rounded-xl space-y-4 border border-gray-200 h-full flex flex-col"
    >
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        Add Transaction
      </h2>

      {/* Title Input */}
      <CustomDropdown
        label="Title"
        options={titleOptions}
        value={form.title}
        onChange={(val) => setForm({ ...form, title: val })}
      />


      {/* Category Input */}
      <CustomDropdown
        label="Category"
        options={categoryOptions}
        value={form.category}
        onChange={(val) => setForm({ ...form, category: val })}
      />


      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount (₹)
        </label>
        <input
          type="number"
          placeholder="Enter amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-400 outline-none transition"
          required
        />
      </div>

      {/* Type */}

      <CustomDropdown
        label="Type"
        options={typeOptions}
        value={form.type === "income" ? "Income" : "Expense"}
        onChange={(val) => setForm({ ...form, type: val.toLowerCase() })}
      />


      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
