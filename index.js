require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!"); // if successfully able to request then response is sended
});

app.get("/codeforces", (req, res) => {
  res.send("jha_rishi");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login kara do bhai</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`); // ye sun raha hai port ka requiremnt ko
});
