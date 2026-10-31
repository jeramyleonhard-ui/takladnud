const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3107;

app.use(express.json());
app.use(express.static("public"));

const database = mysql.createPool({
  host: "10.200.210.117",
  port: 3306,
  user: "std07",
  password: "std07",
  database: "db_std07",
  waitForConnections: true,
  connectionLimit: 10,
});

app.get("/api/health", async (_req, res) => {
  try {
    await database.query("SELECT 1");
    res.json({ status: "ok", database: "connected" });
  } catch (error) {
    console.error("Database connection check failed:", error.message);
    res.status(503).json({ status: "error", database: "unavailable" });
  }
});

app.listen(3107, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
