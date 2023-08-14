const express = require("express");
const pool = require("../config");

const router = express.Router();

router.get("/:department", async (req, res) => {
  try {
    const department = req.params.department;
    const sql = "SELECT course_name FROM courses WHERE department = ?";
    const [rows, fields] = await pool.query(sql, [department]);
    res.json(rows);
  } catch (err) {
    console.error("Error fetching courses:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
