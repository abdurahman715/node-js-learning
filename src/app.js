const express = require("express");
const app = express();
app.use(
  "/user",
  (req, res, next) => {
    console.log("Route one");
    next();
  },
  (req, res, next) => {
    console.log("Route two");
    next();
  },
  (req, res, next) => {
    console.log("Route 3");
    res.send("3rd response");
  }
);
app.listen(7777, () => {
  console.log("Server started running on port 7777");
});
