// import { useState } from "react";
// import IncomePieChart from "./graph/IncomePieChart";
// import ExpensePieChart from "./graph/ExpensePieChart";
// import DualIncomeExpenseGraph from "./graph/DualIncomeExpenseGraph";
// import { motion } from "framer-motion";

// export default function GraphSection({ transactions }) {
//   const [activeTab, setActiveTab] = useState("incomePie");

//   const tabs = [
//     { id: "incomePie", label: "Income Pie" },
//     { id: "expensePie", label: "Expense Pie" },
//     { id: "dual", label: "Income vs Expense" },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 h-full flex flex-col"
//     >
//       {/* Header */}
//       <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-3 rounded-xl shadow mb-5">
//         <h2 className="text-lg font-semibold text-white text-center tracking-wide">
//           Category Analytics
//         </h2>
//       </div>

//       {/* Tabs */}
//       <div className="flex gap-3 mb-5 justify-center flex-wrap">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm
//               ${
//                 activeTab === tab.id
//                   ? "bg-indigo-600 text-white shadow-md scale-105"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }
//             `}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Chart Area */}
//       <div className="bg-gray-50 rounded-xl p-4 shadow-inner flex-1">
//         {activeTab === "incomePie" && (
//           <IncomePieChart transactions={transactions} />
//         )}
//         {activeTab === "expensePie" && (
//           <ExpensePieChart transactions={transactions} />
//         )}
//         {activeTab === "dual" && (
//           <DualIncomeExpenseGraph transactions={transactions} />
//         )}
//       </div>
//     </motion.div>
//   );
// }


import { useState } from "react";
import IncomePieChart from "./graph/IncomePieChart";
import ExpensePieChart from "./graph/ExpensePieChart";
import DualIncomeExpenseGraph from "./graph/DualIncomeExpenseGraph";
import { motion } from "framer-motion";

export default function GraphSection({ transactions }) {
  const [activeTab, setActiveTab] = useState("incomePie");

  const tabs = [
    { id: "incomePie", label: "Income Pie" },
    { id: "expensePie", label: "Expense Pie" },
    { id: "dual", label: "Income vs Expense" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-6 
                 border border-gray-100 
                 backdrop-blur-xl bg-opacity-90 
                 flex flex-col h-full"
    >
      {/* Title */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600
                   p-3 rounded-xl shadow-md mb-6"
      >
        <h2 className="text-lg font-semibold text-white text-center tracking-wide">
          Category Analytics 📊
        </h2>
      </motion.div>

      {/* TAB BUTTONS */}
      <div className="flex gap-3 mb-6 justify-center flex-wrap">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
                ${
                  active
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-300"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {tab.label}
            </motion.button>
          );
        })}
      </div>

      {/* CHART CONTAINER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-50 rounded-xl 
                   p-4 shadow-inner flex-1 border border-gray-100"
      >
        {activeTab === "incomePie" && (
          <IncomePieChart transactions={transactions} />
        )}
        {activeTab === "expensePie" && (
          <ExpensePieChart transactions={transactions} />
        )}
        {activeTab === "dual" && (
          <DualIncomeExpenseGraph transactions={transactions} />
        )}
      </motion.div>
    </motion.div>
  );
}
