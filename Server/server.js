const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const port = 5000;

// const secretKey = process.env.JWT_SECRET_KEY;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "boda15king",
  database: "edulect",
});

app.get("/api/courses", async (req, res) => {
  try {
    const sql = "SELECT DISTINCT department FROM Courses";
    const [rows, fields] = await pool.query(sql); // Using await to execute the query
    res.json(rows);
  } catch (err) {
    console.error("Error fetching courses:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const { user_fname, user_lname, email, password } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user information into the database
    const sql = `INSERT INTO users (user_fname, user_lname, email, password) VALUES (?, ?, ?, ?)`;
    await pool.query(sql, [user_fname, user_lname, email, hashedPassword]);

    return res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "An internal server error occurred" });
  }
});

app.post("/api/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  pool.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          res.send(result);
        } else {
          res.send({ message: "Wrong email/password combination!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
});

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});
