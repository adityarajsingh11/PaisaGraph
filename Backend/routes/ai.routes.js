import express from "express";
import { askAI, getSmartInsights } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/chat", askAI);         // AI chatbot
router.get("/insights", getSmartInsights);  // Smart Insights

export default router;
