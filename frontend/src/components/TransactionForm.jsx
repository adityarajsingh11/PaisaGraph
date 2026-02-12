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

  const titleOptions = [
    "Salary",
    "Freelance Work",
    "Bonus",
    "Gift Money",
    "Interest Income",
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
      className="
        bg-white 
        p-6 
        rounded-2xl 
        shadow-lg 
        border border-gray-200 
        h-full 
        flex 
        flex-col 
        gap-5
        transition-all
        hover:shadow-xl
      "
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 text-center tracking-wide">
        Add Transaction
      </h2>

      {/* Title Dropdown */}
      <CustomDropdown
        label="Title"
        options={titleOptions}
        value={form.title}
        onChange={(val) => setForm({ ...form, title: val })}
      />

      {/* Category Dropdown */}
      <CustomDropdown
        label="Category"
        options={categoryOptions}
        value={form.category}
        onChange={(val) => setForm({ ...form, category: val })}
      />

      {/* Amount */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Amount (₹)</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="
            w-full 
            p-3 
            border 
            border-gray-300 
            rounded-xl 
            bg-gray-50 
            focus:bg-white 
            focus:ring-2 
            focus:ring-indigo-500 
            transition
            outline-none
            shadow-sm
          "
          required
        />
      </div>

      {/* Type Dropdown */}
      <CustomDropdown
        label="Type"
        options={typeOptions}
        value={form.type === "income" ? "Income" : "Expense"}
        onChange={(val) => setForm({ ...form, type: val.toLowerCase() })}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="
          w-full 
          bg-gradient-to-r 
          from-indigo-600 
          to-purple-600 
          text-white 
          py-3 
          rounded-xl 
          font-semibold 
          shadow-md 
          hover:shadow-lg 
          hover:opacity-90 
          transition-all
        "
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
