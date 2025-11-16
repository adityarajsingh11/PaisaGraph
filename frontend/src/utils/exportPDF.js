import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportToPDF = (transactions) => {
  if (!transactions || transactions.length === 0) {
    alert("No transactions to export!");
    return;
  }

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Transaction Report", 14, 20);

  const tableColumn = ["Title", "Category", "Amount (₹)", "Type", "Date"];
  const tableRows = [];

  transactions.forEach((t) => {
    tableRows.push([
      t.title,
      t.category,
      t.amount,
      t.type,
      new Date(t.date).toLocaleDateString("en-IN"),
    ]);
  });

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 30,
    theme: "grid",
    headStyles: { fillColor: [88, 80, 236] }, // Indigo
    styles: { fontSize: 10 },
  });

  doc.save("transactions.pdf");
};
