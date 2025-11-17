// function SummaryCards({ income, expense, balance }) {
//   const cards = [
//     { title: "Income", amount: income, color: "text-green-600" },
//     { title: "Expense", amount: expense, color: "text-red-600" },
//     { title: "Balance", amount: balance, color: "text-blue-600" },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//       {cards.map((c) => (
//         <div
//           key={c.title}
//           className="p-4 bg-white shadow rounded-xl border border-gray-100"
//         >
//           <h3 className="text-sm font-semibold text-gray-500">{c.title}</h3>
//           <p className={`text-2xl font-bold ${c.color}`}>₹{c.amount}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default SummaryCards;


import { Wallet, ArrowUpCircle, ArrowDownCircle } from "lucide-react";

export default function SummaryCards({ income, expense, balance }) {
  const cards = [
    {
      title: "Income",
      amount: income,
      icon: <ArrowUpCircle className="text-green-600" size={28} />,
      textColor: "text-green-700",
      bg: "bg-green-50",
    },
    {
      title: "Expense",
      amount: expense,
      icon: <ArrowDownCircle className="text-red-600" size={28} />,
      textColor: "text-red-700",
      bg: "bg-red-50",
    },
    {
      title: "Balance",
      amount: balance,
      icon: <Wallet className="text-indigo-600" size={28} />,
      textColor: "text-indigo-700",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="
            rounded-2xl border border-gray-200 bg-white 
            shadow-sm hover:shadow-md transition 
            p-5 flex items-center gap-4 cursor-pointer
          "
        >
          {/* Icon */}
          <div className={`p-3 ${card.bg} rounded-xl`}>
            {card.icon}
          </div>

          {/* Details */}
          <div>
            <p className="text-sm text-gray-500 font-medium">{card.title}</p>

            <p className={`text-2xl font-bold mt-1 ${card.textColor}`}>
              ₹{card.amount.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
