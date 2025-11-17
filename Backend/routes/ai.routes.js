import express from "express";
import { askAI, getSmartInsights } from "../controllers/ai.controller.js";
import protect from "../middleware/auth.js";  // <-- Correct import

const router = express.Router();

router.post("/chat", protect, askAI);
router.get("/insights", protect, getSmartInsights);

export default router;
