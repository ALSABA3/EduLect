const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../config");

const router = express.Router();

router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (!user.length) {
      return res.status(401).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({ message: "Signin successful" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
});

module.exports = router;
