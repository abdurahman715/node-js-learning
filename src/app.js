const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");
app.use(express.json());
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  // const user = new User({
  //   firstName: "Muhammed",
  //   lastName: "Abdurahman ck",
  //   email: "abdurahmanck715@gmail.com",
  //   password: 12345,
  //   gender: "Male",
  // });
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await User.find({ email: userEmail });
    if (user.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server started running on port 7777");
    });
  })
  .catch((err) => {
    console.err("Database cannot be connected");
  });
