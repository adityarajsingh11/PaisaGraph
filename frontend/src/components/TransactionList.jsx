function TransactionList({ transactions }) {
  if (!transactions.length)
    return <p className="text-gray-500 text-center py-4">No transactions yet.</p>;

  return (
    <div className="overflow-x-auto bg-white p-4 shadow rounded-xl">
      <table className="w-full text-sm text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Category</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Type</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t._id} className="border-t">
              <td className="p-2">{t.title}</td>
              <td className="p-2">{t.category}</td>
              <td className="p-2 font-medium">₹{t.amount}</td>
              <td className={`p-2 ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
                {t.type}
              </td>
              <td className="p-2">{new Date(t.date).toLocaleDateString("en-IN")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionList;
