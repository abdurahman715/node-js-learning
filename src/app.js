const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/products", (req, res) => {
  res.send("Products page");
});
app.listen(7777, () => {
  console.log("Server started running on port 7777");
});
