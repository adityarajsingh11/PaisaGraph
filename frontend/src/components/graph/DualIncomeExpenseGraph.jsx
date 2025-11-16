import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function DualIncomeExpenseGraph({ transactions }) {

  const processed = transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((t) => ({
      date: new Date(t.date).toLocaleDateString("en-IN"),
      income: t.type === "income" ? Number(t.amount) : 0,
      expense: t.type === "expense" ? Number(t.amount) : 0,
    }));

  return (
    <div className="h-80">
      <ResponsiveContainer>
        <LineChart data={processed}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="income" stroke="#16a34a" strokeWidth={3} />
          <Line type="monotone" dataKey="expense" stroke="#dc2626" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
