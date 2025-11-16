import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

export default function IncomePieChart({ transactions }) {
  const incomeData = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
      return acc;
    }, {});

  const pieData = Object.keys(incomeData).map((key) => ({
    name: key,
    value: incomeData[key],
  }));

  return (
    <div className="h-72">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={110}>
            {pieData.map((_, index) => (
              <Cell key={index} fill={`hsl(${index * 50}, 70%, 50%)`} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
