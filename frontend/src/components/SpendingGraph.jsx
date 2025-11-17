// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// export default function SpendingGraph({ data }) {
//   return (
//     <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-200">
//       <h2 className="text-lg font-semibold mb-3 text-gray-800">Expenses Trend</h2>

//       <ResponsiveContainer width="100%" height={280}>
//         <LineChart data={data}>
//           <Line type="monotone" dataKey="amount" stroke="#4f46e5" strokeWidth={3} />
//           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          
//           {/* FIX THIS */}
//           <XAxis dataKey="name" />

//           <YAxis />
//           <Tooltip />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SpendingGraph({ data }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Expenses Trend</h2>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="amount" 
            stroke="#6366f1" 
            strokeWidth={3} 
            dot={{ r: 4, strokeWidth: 2 }}
          />

          <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />

          <XAxis 
            dataKey="name"
            axisLine={false}      // ❌ removes black line
            tickLine={false}      // ❌ removes black tick marks
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />

          <YAxis 
            axisLine={false}      // ❌ removes black line
            tickLine={false}      // ❌ removes black tick marks
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />

          <Tooltip 
            contentStyle={{ 
              background: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb"
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
