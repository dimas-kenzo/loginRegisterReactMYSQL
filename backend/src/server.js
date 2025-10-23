const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { sequelize, testConnection } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS: adjust origin to your frontend URL during development
app.use(
  cors({
    origin: ["http://localhost:5173"], // change to your frontend origin
    credentials: true,
  })
);

app.get("/", (req, res) => res.json({ message: "Auth API running" }));
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);

(async () => {
  await testConnection();
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
})();
