import express from "express";
import { body, validationResult } from "express-validator";
import { registerUser, loginUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post(
  "/register",
  body("email").isEmail().withMessage("Invalid email"),
  body("password").isLength({ min: 6 }),
  body("username").isLength({ min: 3 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  registerUser
);

router.post(
  "/login",
  body("username").isLength({ min: 3 }),
  body("password").isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  loginUser
);

export default router;
