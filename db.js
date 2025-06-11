const { Pool } = require("pg");

const pool = new Pool({
  user: "ewvansc",
  password: "JHxGcnqQymjq9l1bLAxLP3f0lafGNf4Z",
  host: "dpg-d14s6g95pdvs73but700-a",
  database: "galacticpizza",
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.on("connect", () => {
  console.log("Connected to database");
});

module.exports = pool;
