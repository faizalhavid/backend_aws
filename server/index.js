const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin",
  database: "express_react_aws_task",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: 200, message: "Succeed" });
});

app.get("/todos", (req, res) => {
  const sql = "SELECT * FROM todos";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Error executing query" });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log("Server started on port 5000");
});
