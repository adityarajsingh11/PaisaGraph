import express from "express";
import { body, validationResult } from "express-validator";
import protect from "../middleware/auth.js";
import {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getSummary,
} from "../controllers/transaction.controller.js";

const router = express.Router();

const validateTransaction = [
  body("type")
    .isIn(["income", "expense"])
    .withMessage("Type must be income or expense"),
  body("category").notEmpty().withMessage("Category is required"),
  body("amount")
    .isFloat({ gt: 0 })
    .withMessage("Amount must be a positive number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// ✅ Routes
router
  .route("/")
  .get(protect, getTransactions)
  .post(protect, validateTransaction, createTransaction);

router
  .route("/:id")
  .put(protect, validateTransaction, updateTransaction)
  .delete(protect, deleteTransaction);

router.post("/add", protect, validateTransaction, createTransaction);
router.get("/summary", protect, getSummary);

export default router;
