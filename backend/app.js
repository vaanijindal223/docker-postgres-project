const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "testdb",
  port: 5432,
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
