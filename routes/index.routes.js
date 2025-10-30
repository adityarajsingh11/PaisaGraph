// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     // Renders the home EJS view or sends a welcome JSON message
//     if (req.accepts('html')) {
//         return res.render('home'); 
//     }
//     res.json({ message: 'Welcome to the Personal Finance Tracker API' });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/auth");
const Transaction = require("../models/transaction.model");

router.get("/home", checkAuth, async (req, res) => {
  const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: -1 });
  res.render("home", { user: req.user, transactions });
});

module.exports = router;
