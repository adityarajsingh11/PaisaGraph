// import { useState } from "react";
// import api from "../utils/axiosConfig";

// function TransactionForm({ onAdd }) {
//   const [form, setForm] = useState({ title: "", category: "", amount: "", type: "expense" });

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     await api.post("/transactions", form); // wait for backend to confirm
//     setForm({ title: "", category: "", amount: "", type: "expense" });
//     onAdd(); // trigger reload after successful save
//   } catch (err) {
//     console.error("Error adding transaction:", err);
//   }
// };


//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-xl space-y-4">
//       <h2 className="text-lg font-semibold text-gray-700">Add Transaction</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//         className="w-full p-2 border rounded-lg"
//         required
//       />
//       <input
//         type="text"
//         placeholder="Category"
//         value={form.category}
//         onChange={(e) => setForm({ ...form, category: e.target.value })}
//         className="w-full p-2 border rounded-lg"
//         required
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={form.amount}
//         onChange={(e) => setForm({ ...form, amount: e.target.value })}
//         className="w-full p-2 border rounded-lg"
//         required
//       />
//       <select
//         value={form.type}
//         onChange={(e) => setForm({ ...form, type: e.target.value })}
//         className="w-full p-2 border rounded-lg"
//       >
//         <option value="income">Income</option>
//         <option value="expense">Expense</option>
//       </select>
//       <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
//         Add
//       </button>
//     </form>
//   );
// }
// export default TransactionForm;


import { useState } from "react";
import api from "../utils/axiosConfig";

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    amount: "",
    type: "expense",
  });

  // Common dropdown options
  const titleOptions = [
    "Salary",
    "Freelance Work",
    "Grocery Shopping",
    "Electric Bill",
    "Travel Expense",
    "Dining Out",
  ];

  const categoryOptions = [
    "Food",
    "Transport",
    "Bills",
    "Entertainment",
    "Health",
    "Other",
  ];

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
      className="bg-white p-6 shadow-lg rounded-2xl space-y-4 border border-gray-100"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Add Transaction
      </h2>

      {/* Title Input with Datalist */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Title
        </label>
        <input
          list="title-options"
          type="text"
          placeholder="Enter or select title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          required
        />
        <datalist id="title-options">
          {titleOptions.map((t, i) => (
            <option key={i} value={t} />
          ))}
        </datalist>
      </div>

      {/* Category Input with Datalist */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Category
        </label>
        <input
          list="category-options"
          type="text"
          placeholder="Enter or select category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          required
        />
        <datalist id="category-options">
          {categoryOptions.map((c, i) => (
            <option key={i} value={c} />
          ))}
        </datalist>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Amount (₹)
        </label>
        <input
          type="number"
          placeholder="Enter amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          required
        />
      </div>

      {/* Type Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Type
        </label>
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
