function SummaryCards({ income, expense, balance }) {
  const cards = [
    { title: "Income", amount: income, color: "text-green-600" },
    { title: "Expense", amount: expense, color: "text-red-600" },
    { title: "Balance", amount: balance, color: "text-blue-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {cards.map((c) => (
        <div
          key={c.title}
          className="p-4 bg-white shadow rounded-xl border border-gray-100"
        >
          <h3 className="text-sm font-semibold text-gray-500">{c.title}</h3>
          <p className={`text-2xl font-bold ${c.color}`}>₹{c.amount}</p>
        </div>
      ))}
    </div>
  );
}
export default SummaryCards;
