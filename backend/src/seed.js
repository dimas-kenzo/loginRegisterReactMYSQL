const bcrypt = require("bcrypt");
const User = require("./models/user");
const { sequelize, testConnection } = require("./config/db");
require("dotenv").config();

(async () => {
  try {
    await testConnection();
    await sequelize.sync({ force: true });
    console.log(">= tables created");

    const passwordHash = await bcrypt.hash("123456", 10);
    await User.create({
      username: "admin",
      email: "admin@example.com",
      password: passwordHash,
    });
    console.log(">= seed user created: admin@example.com / 123456");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
