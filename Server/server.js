const express = require("express");
const mysql = require("mysql2/promise");
// const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "boda15king",
  database: "edulect",
});

app.post("/api/signup", async (req, res) => {
  try {
    const { user_fname, user_lname, email, password } = req.body;

    // Hash the password before storing it in the database
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user information into the database
    const sql = `INSERT INTO users (user_fname, user_lname, email, password) VALUES (?, ?, ?, ?)`;
    await pool.query(sql, [user_fname, user_lname, email, password]);

    return res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});
