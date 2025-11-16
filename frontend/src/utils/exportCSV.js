export const exportToCSV = (transactions) => {
  const headers = ["Title", "Category", "Amount", "Type", "Date"];

  const rows = transactions.map(t => [
    t.title,
    t.category,
    t.amount,
    t.type,
    new Date(t.date).toLocaleDateString("en-IN")
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map(e => e.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.href = encodedUri;
  link.download = "transactions.csv";
  document.body.appendChild(link);
  link.click();
};
