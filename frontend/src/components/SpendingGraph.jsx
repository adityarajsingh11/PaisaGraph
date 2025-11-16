import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SpendingGraph({ data }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Expenses Trend</h2>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="amount" stroke="#4f46e5" strokeWidth={3} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          
          {/* FIX THIS */}
          <XAxis dataKey="name" />

          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
