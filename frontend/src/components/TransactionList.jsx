// import { useState } from "react";
// import api from "../utils/axiosConfig";

// function TransactionList({ transactions, onChange }) {
//   const [selectedTransaction, setSelectedTransaction] = useState(null);
//   const [editData, setEditData] = useState({ title: "", category: "", amount: "", type: "" });
//   const [showModal, setShowModal] = useState(false);

//   const openEditModal = (t) => {
//     setSelectedTransaction(t);
//     setEditData({
//       title: t.title,
//       category: t.category,
//       amount: t.amount,
//       type: t.type,
//     });
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedTransaction(null);
//   };

//   const handleUpdate = async () => {
//     try {
//       await api.put(`/transactions/${selectedTransaction._id}`, editData);
//       closeModal();
//       onChange();
//     } catch (err) {
//       console.error("Error updating transaction:", err);
//       alert("Failed to update transaction.");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this transaction?")) return;
//     try {
//       await api.delete(`/transactions/${id}`);
//       onChange();
//     } catch (err) {
//       console.error("Error deleting transaction:", err);
//       alert("Failed to delete transaction.");
//     }
//   };

//   if (!transactions.length)
//     return <p className="text-gray-500 text-center py-4">No transactions yet.</p>;

//   return (
//     <div className="overflow-x-auto bg-white p-4 shadow rounded-xl relative">
//       <table className="w-full text-sm text-left border">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2">Title</th>
//             <th className="p-2">Category</th>
//             <th className="p-2">Amount</th>
//             <th className="p-2">Type</th>
//             <th className="p-2">Date</th>
//             <th className="p-2 text-center">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((t) => (
//             <tr
//               key={t._id}
//               className="border-t hover:bg-gray-50 transition-colors duration-150"
//             >
//               <td className="p-2">{t.title}</td>
//               <td className="p-2">{t.category}</td>
//               <td className="p-2 font-medium">₹{t.amount}</td>
//               <td
//                 className={`p-2 ${
//                   t.type === "income" ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {t.type}
//               </td>
//               <td className="p-2">
//                 {new Date(t.date).toLocaleDateString("en-IN")}
//               </td>
//               <td className="p-2 flex gap-2 justify-center">
//                 <button
//                   onClick={() => openEditModal(t)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(t._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Edit Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">
//               Edit Transaction
//             </h2>

//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 value={editData.title}
//                 onChange={(e) =>
//                   setEditData({ ...editData, title: e.target.value })
//                 }
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Category"
//                 value={editData.category}
//                 onChange={(e) =>
//                   setEditData({ ...editData, category: e.target.value })
//                 }
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 type="number"
//                 placeholder="Amount"
//                 value={editData.amount}
//                 onChange={(e) =>
//                   setEditData({ ...editData, amount: e.target.value })
//                 }
//                 className="w-full border rounded-lg p-2"
//               />
//               <select
//                 value={editData.type}
//                 onChange={(e) =>
//                   setEditData({ ...editData, type: e.target.value })
//                 }
//                 className="w-full border rounded-lg p-2"
//               >
//                 <option value="income">Income</option>
//                 <option value="expense">Expense</option>
//               </select>
//             </div>

//             <div className="flex justify-end mt-6 gap-3">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdate}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TransactionList;


import { useState } from "react";
import api from "../utils/axiosConfig";
import { motion, AnimatePresence } from "framer-motion";

function TransactionList({ transactions, onChange }) {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [editData, setEditData] = useState({ title: "", category: "", amount: "", type: "" });
  const [showModal, setShowModal] = useState(false);

  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openEditModal = (t) => {
    setSelectedTransaction(t);
    setEditData({
      title: t.title,
      category: t.category,
      amount: t.amount,
      type: t.type,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/transactions/${selectedTransaction._id}`, editData);
      closeModal();
      onChange();
    } catch (err) {
      console.error("Error updating transaction:", err);
      alert("Failed to update transaction.");
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await api.delete(`/transactions/${deleteId}`);
      setShowDeleteModal(false);
      setDeleteId(null);
      onChange();
    } catch (err) {
      console.error("Error deleting transaction:", err);
      alert("Failed to delete transaction.");
    }
  };

  if (!transactions.length)
    return <p className="text-gray-500 text-center py-4">No transactions yet.</p>;

  return (
    <div className="overflow-x-auto bg-white p-4 shadow rounded-xl relative">
      <table className="w-full text-sm text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Category</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Type</th>
            <th className="p-2">Date</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr
              key={t._id}
              className="border-t hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="p-2">{t.title}</td>
              <td className="p-2">{t.category}</td>
              <td className="p-2 font-medium">₹{t.amount}</td>
              <td
                className={`p-2 ${
                  t.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                {t.type}
              </td>
              <td className="p-2">
                {new Date(t.date).toLocaleDateString("en-IN")}
              </td>
              <td className="p-2 flex gap-2 justify-center">
                <button
                  onClick={() => openEditModal(t)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(t._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✏️ Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-lg p-6 w-96 relative"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Edit Transaction
              </h2>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Title"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={editData.category}
                  onChange={(e) =>
                    setEditData({ ...editData, category: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={editData.amount}
                  onChange={(e) =>
                    setEditData({ ...editData, amount: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                />
                <select
                  value={editData.type}
                  onChange={(e) =>
                    setEditData({ ...editData, type: e.target.value })
                  }
                  className="w-full border rounded-lg p-2"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="flex justify-end mt-6 gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🗑️ Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-xl p-6 w-96 text-center"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Confirm Deletion
              </h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this transaction? <br />
                <span className="text-red-500 font-medium">This action cannot be undone.</span>
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Yes, Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TransactionList;
