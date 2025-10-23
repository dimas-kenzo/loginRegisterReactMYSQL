const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { login, logout } = require("../controllers/authController");
const User = require("../models/user");
const rateLimit = require("express-rate-limit");

// Rate limit: 5 requests per menit
const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: "Too many login attempts, please try again later." },
});

// 🧾 REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validasi input
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Cek apakah email sudah ada
    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// 🔐 LOGIN
router.post("/login", loginLimiter, login);

// 🚪 LOGOUT
router.post("/logout", logout);

module.exports = router;
