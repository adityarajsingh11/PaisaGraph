import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connect from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import indexRoutes from "./routes/index.routes.js";

// ✅ Import the middleware correctly
import protect from "./middleware/auth.js";
import aiRoutes from "./routes/ai.routes.js";



dotenv.config();
connect();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Public routes (no auth needed)
app.use("/api/user", userRoutes);
app.use("/api", indexRoutes);
app.use("/api/ai", aiRoutes);

// ✅ Protected routes
app.use("/api/transactions", protect, transactionRoutes);

// ✅ Root endpoint
app.get("/", (req, res) => {
  res.send("PaisaGraph Backend Running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
