const User = require("../models/user.models.js");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    // Token ko cookie ya header dono jagah check karo
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token)
      return res.status(401).json({ message: "Not authorized, no token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error.message);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

module.exports = protect;
