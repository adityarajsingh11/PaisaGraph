import { useState } from "react";
import IncomePieChart from "./graph/IncomePieChart";
import ExpensePieChart from "./graph/ExpensePieChart";
import DualIncomeExpenseGraph from "./graph/DualIncomeExpenseGraph";

export default function GraphSection({ transactions }) {
  const [activeTab, setActiveTab] = useState("incomePie");

  const tabs = [
    { id: "incomePie", label: "Income Pie" },
    { id: "expensePie", label: "Expense Pie" },
    { id: "dual", label: "Income vs Expense" },
  ];

  return (
  <div className="bg-white p-5 rounded-xl shadow-lg border h-full w-full flex flex-col">

    {/* Title */}
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-3 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold text-white text-center">
        Category Analytics
      </h2>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mb-4 flex-wrap justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
            ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border"
            }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Chart Area */}
    <div className="bg-gray-50 rounded-xl p-4 shadow-inner flex-1">
      {activeTab === "incomePie" && (
        <IncomePieChart transactions={transactions} />
      )}

      {activeTab === "expensePie" && (
        <ExpensePieChart transactions={transactions} />
      )}

      {activeTab === "dual" && (
        <DualIncomeExpenseGraph transactions={transactions} />
      )}
    </div>

  </div>
);

}
