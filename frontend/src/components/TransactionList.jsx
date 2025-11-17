// import { useState } from "react";
// import api from "../utils/axiosConfig";
// import { motion, AnimatePresence } from "framer-motion";

// function TransactionList({ transactions, onChange }) {
//   const [selectedTransaction, setSelectedTransaction] = useState(null);
//   const [editData, setEditData] = useState({ title: "", category: "", amount: "", type: "" });
//   const [showModal, setShowModal] = useState(false);

//   const [deleteId, setDeleteId] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

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

//   const handleDeleteClick = (id) => {
//     setDeleteId(id);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = async () => {
//     try {
//       await api.delete(`/transactions/${deleteId}`);
//       setShowDeleteModal(false);
//       setDeleteId(null);
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
     


//       <table className="w-full text-sm table-fixed">
//         <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700">
//           <tr>
//             <th className="p-3 w-[20%] text-left">Title</th>
//             <th className="p-3 w-[20%] text-left">Category</th>
//             <th className="p-3 w-[15%] text-left">Amount</th>
//             <th className="p-3 w-[15%] text-left">Type</th>
//             <th className="p-3 w-[15%] text-left">Date</th>
//             <th className="p-3 w-[15%] text-center">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {transactions.map((t) => (
//             <tr
//               key={t._id}
//               className="border-b hover:bg-indigo-50 transition-all duration-200"
//             >
//               <td className="p-3 overflow-hidden text-ellipsis whitespace-nowrap">
//                 {t.title}
//               </td>

//               <td className="p-3 overflow-hidden text-ellipsis whitespace-nowrap">
//                 {t.category}
//               </td>

//               <td className="p-3 font-semibold text-gray-800">
//                 ₹{t.amount}
//               </td>

//               <td
//                 className={`p-3 capitalize font-semibold ${
//                   t.type === "income" ? "text-green-600" : "text-red-500"
//                 }`}
//               >
//                 {t.type}
//               </td>

//               <td className="p-3">
//                 {new Date(t.date).toLocaleDateString("en-IN")}
//               </td>

//               <td className="p-3 flex gap-2 justify-center">
//                 <button
//                   onClick={() => openEditModal(t)}
//                   className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 shadow-sm"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteClick(t._id)}
//                   className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-sm"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>



//       {/* ✏️ Edit Modal */}
//       <AnimatePresence>
//         {showModal && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               className="bg-white rounded-2xl shadow-lg p-6 w-96 relative"
//             >
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">
//                 Edit Transaction
//               </h2>

//               <div className="space-y-3">
//                 <input
//                   type="text"
//                   placeholder="Title"
//                   value={editData.title}
//                   onChange={(e) =>
//                     setEditData({ ...editData, title: e.target.value })
//                   }
//                   className="w-full border rounded-lg p-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Category"
//                   value={editData.category}
//                   onChange={(e) =>
//                     setEditData({ ...editData, category: e.target.value })
//                   }
//                   className="w-full border rounded-lg p-2"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Amount"
//                   value={editData.amount}
//                   onChange={(e) =>
//                     setEditData({ ...editData, amount: e.target.value })
//                   }
//                   className="w-full border rounded-lg p-2"
//                 />
//                 <select
//                   value={editData.type}
//                   onChange={(e) =>
//                     setEditData({ ...editData, type: e.target.value })
//                   }
//                   className="w-full border rounded-lg p-2"
//                 >
//                   <option value="income">Income</option>
//                   <option value="expense">Expense</option>
//                 </select>
//               </div>

//               <div className="flex justify-end mt-6 gap-3">
//                 <button
//                   onClick={closeModal}
//                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleUpdate}
//                   className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* 🗑️ Delete Confirmation Modal */}
//       <AnimatePresence>
//         {showDeleteModal && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ y: -50, opacity: 0, scale: 0.9 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: 50, opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.25 }}
//               className="bg-white rounded-2xl shadow-xl p-6 w-96 text-center"
//             >
//               <h2 className="text-lg font-semibold text-gray-800 mb-3">
//                 Confirm Deletion
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 Are you sure you want to delete this transaction? <br />
//                 <span className="text-red-500 font-medium">This action cannot be undone.</span>
//               </p>
//               <div className="flex justify-center gap-4">
//                 <button
//                   onClick={() => setShowDeleteModal(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={confirmDelete}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//                 >
//                   Yes, Delete
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default TransactionList;


import { useState } from "react";
import api from "../utils/axiosConfig";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Trash2 } from "lucide-react";

export default function TransactionList({ transactions, onChange }) {
  const [selected, setSelected] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    category: "",
    amount: "",
    type: "",
  });
  const [editModal, setEditModal] = useState(false);

  const [deleteId, setDeleteId] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  // =========================
  // EDIT HANDLERS
  // =========================
  const openEditModal = (t) => {
    setSelected(t);
    setEditData({
      title: t.title,
      category: t.category,
      amount: t.amount,
      type: t.type,
    });
    setEditModal(true);
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/transactions/${selected._id}`, editData);
      setEditModal(false);
      onChange();
    } catch (err) {
      alert("Failed to update transaction.");
    }
  };

  // =========================
  // DELETE HANDLERS
  // =========================
  const openDeleteModal = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await api.delete(`/transactions/${deleteId}`);
      setDeleteModal(false);
      onChange();
    } catch (err) {
      alert("Failed to delete transaction.");
    }
  };

  if (!transactions.length)
    return (
      <p className="text-gray-500 text-center py-6">
        No transactions added yet.
      </p>
    );

  return (
    <div className="overflow-x-auto bg-white/80 backdrop-blur shadow-xl rounded-2xl p-6 border border-gray-200">

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Transaction History</h2>

      {/* TABLE */}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-100 to-purple-100 text-gray-700">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, index) => (
            <tr
              key={t._id}
              className={`transition-all ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-indigo-50/70`}
            >
              <td className="p-3">{t.title}</td>
              <td className="p-3">{t.category}</td>
              <td className="p-3 font-semibold text-gray-800">₹{t.amount}</td>

              <td
                className={`p-3 font-semibold capitalize ${
                  t.type === "income" ? "text-green-600" : "text-red-500"
                }`}
              >
                {t.type}
              </td>

              <td className="p-3">
                {new Date(t.date).toLocaleDateString("en-IN")}
              </td>

              <td className="p-3 flex justify-center gap-3">
                <button
                  onClick={() => openEditModal(t)}
                  className="p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm transition"
                >
                  <Pencil size={16} />
                </button>

                <button
                  onClick={() => openDeleteModal(t._id)}
                  className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-sm transition"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ======================= */}
      {/* ✏️ EDIT MODAL */}
      {/* ======================= */}
      <AnimatePresence>
        {editModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white shadow-2xl p-6 rounded-2xl w-96"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Edit Transaction
              </h3>

              <div className="space-y-3">
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                  className="w-full border rounded-lg p-2.5"
                  placeholder="Title"
                />

                <input
                  type="text"
                  value={editData.category}
                  onChange={(e) =>
                    setEditData({ ...editData, category: e.target.value })
                  }
                  className="w-full border rounded-lg p-2.5"
                  placeholder="Category"
                />

                <input
                  type="number"
                  value={editData.amount}
                  onChange={(e) =>
                    setEditData({ ...editData, amount: e.target.value })
                  }
                  className="w-full border rounded-lg p-2.5"
                  placeholder="Amount"
                />

                <select
                  value={editData.type}
                  onChange={(e) =>
                    setEditData({ ...editData, type: e.target.value })
                  }
                  className="w-full border rounded-lg p-2.5"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setEditModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================= */}
      {/* 🗑️ DELETE MODAL */}
      {/* ======================= */}
      <AnimatePresence>
        {deleteModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-white rounded-2xl p-6 w-80 text-center shadow-2xl"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Delete Transaction?
              </h3>

              <p className="text-gray-600 mb-6">
                This action cannot be undone.
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setDeleteModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
