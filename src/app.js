const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Home page");
});
app.post("/form", (req, res) => {
  res.send("Data saved successfully");
});
app.delete("/data", (req, res) => {
  res.send("Data deleted successfully");
});
app.listen(7777, () => {
  console.log("Server started running on port 7777");
});
