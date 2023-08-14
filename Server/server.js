const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const authRoutes = require("./routes/auth");
const corusesRoutes = require("./routes/courses");
const departmentRoutes = require("./routes/department");
const registerRoutes = require("./routes/register");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const port = 5000;

// const secretKey = process.env.JWT_SECRET_KEY;

app.use("/api", departmentRoutes);

app.use("/api", corusesRoutes);

app.use("/api", registerRoutes);

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});
