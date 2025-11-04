// import express from "express";
// import protect from "../middleware/auth.js";
// import Transaction from "../models/transaction.model.js";

// const router = express.Router();

// router.get("/home", protect, async (req, res) => {
//   try {
//     const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: -1 });
//     res.render("home", { user: req.user, transactions });
//   } catch (error) {
//     console.error("Error fetching transactions:", error.message);
//     res.status(500).json({ message: "Server error while fetching transactions" });
//   }
// });

// export default router;

import express from "express";
import protect from "../middleware/auth.js";

const router = express.Router();

router.get("/home", protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}`, success: true });
});

export default router;
