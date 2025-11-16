import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (transactions) => {
  const worksheet = XLSX.utils.json_to_sheet(
    transactions.map(t => ({
      Title: t.title,
      Category: t.category,
      Amount: t.amount,
      Type: t.type,
      Date: new Date(t.date).toLocaleDateString("en-IN"),
    }))
  );

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(blob, "transactions.xlsx");
};
