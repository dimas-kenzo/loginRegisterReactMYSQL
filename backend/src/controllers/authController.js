const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required" });

    // allow login by email or username
    const where = email.includes("@") ? { email } : { username: email };

    const user = await User.findOne({ where });
    if (!user)
      return res.status(401).json({ error: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ error: "Invalid email or password" });

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Set HttpOnly cookie
    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour (sync with JWT_EXPIRES_IN)
      sameSite: "lax",
    };
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

    res.cookie("token", token, cookieOptions);
    return res.json({
      message: "Login success",
      user: { id: user.id, username: user.username },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "lax",
  });
  return res.json({ message: "Logged out successfully" });
};

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "username", "email"],
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json({ message: "Welcome to your dashboard!", user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};
