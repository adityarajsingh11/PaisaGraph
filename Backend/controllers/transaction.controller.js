const Transaction = require('../models/transaction.model');

// ✅ Create Transaction (with proper IST handling)
const createTransaction = async (req, res) => {
  try {
    const userId = req.user._id;
    const { type, category, amount, description, title, date } = req.body;

    // ✅ If user provides a date, use it. Otherwise, use current IST time.
    let transactionDate;
    if (date) {
      transactionDate = new Date(date);
    } else {
      // Create UTC time, then shift it to IST
      const nowUTC = new Date();
      const istOffsetMs = 5.5 * 60 * 60 * 1000; // 5 hours 30 mins
      transactionDate = new Date(nowUTC.getTime() + istOffsetMs);
    }

    const newTransaction = new Transaction({
      userId,
      type,
      category,
      amount,
      title: title || category || "Untitled",
      notes: description,
      date: transactionDate,
    });

    await newTransaction.save();

    // ✅ Redirect to home after creation
    res.redirect("/api/home");

  } catch (error) {
    console.error("Create Transaction Error:", error.message);
    res.status(500).json({ message: 'Server error while creating transaction' });
  }
};


// ✅ Get all transactions
const getTransactions = async (req, res) => {
  try {
    const userId = req.user._id;
    const transactions = await Transaction.find({ userId }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    console.error("Get Transactions Error:", error.message);
    res.status(500).json({ message: 'Server error while fetching transactions' });
  }
};


// ✅ Update transaction
const updateTransaction = async (req, res) => {
  try {
    const userId = req.user._id;
    const transactionId = req.params.id;

    const transaction = await Transaction.findOneAndUpdate(
      { _id: transactionId, userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found or unauthorized' });
    }

    res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      data: transaction,
    });

  } catch (error) {
    console.error("Update Transaction Error:", error.message);
    res.status(500).json({ message: 'Server error while updating transaction' });
  }
};


// ✅ Delete transaction
const deleteTransaction = async (req, res) => {
  try {
    const userId = req.user._id;
    const transactionId = req.params.id;

    const transaction = await Transaction.findOneAndDelete({ _id: transactionId, userId });

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found or unauthorized' });
    }

    res.status(200).json({
      success: true,
      message: 'Transaction deleted successfully',
    });
  } catch (error) {
    console.error("Delete Transaction Error:", error.message);
    res.status(500).json({ message: 'Server error while deleting transaction' });
  }
};


// ✅ Get Summary
const getSummary = async (req, res) => {
  try {
    const userId = req.user._id;
    const { start, end } = req.query;

    const match = { userId };

    if (start || end) {
      match.date = {};
      if (start) match.date.$gte = new Date(start);
      if (end) {
        const endDate = new Date(end);
        endDate.setHours(23, 59, 59, 999);
        match.date.$lte = endDate;
      }
    }

    const agg = await Transaction.aggregate([
      { $match: match },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        }
      }
    ]);

    let income = 0, expense = 0;
    agg.forEach(a => {
      if (a._id === 'income') income = a.total;
      if (a._id === 'expense') expense = a.total;
    });

    const balance = income - expense;

    res.json({ success: true, data: { income, expense, balance } });
  } catch (error) {
    console.error("Summary error:", error);
    res.status(500).json({ message: 'Server error while calculating summary' });
  }
};


module.exports = {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getSummary,
};
