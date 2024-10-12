const express = require("express");
require("dotenv").config();

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/twitter", (req, res) => {
  res.send("hello twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login in chai aur code</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${process.env.PORT}`);
});
