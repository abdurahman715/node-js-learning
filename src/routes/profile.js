const express = require("express");
const profileRouter = express.Router();
const bcrypt = require("bcrypt");
const { userAuth } = require("../middleware/auth.js");
const { validateEditProfileData } = require("../utils/validation.js");
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }
    const loggedInuser = req.user;
    Object.keys(req.body).forEach((key) => (loggedInuser[key] = req.body[key]));
    await loggedInuser.save();
    res.send(`${loggedInuser.firstName},your profile updated successfully`);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});
profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    const loggedInuser = req.user;
    const newPassword = req.body.password;
    const newpasswordHash = await bcrypt.hash(password, 10);
    Object.keys(req.body).forEach((key) => loggedInuser[key]);
    await loggedInuser.save();
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});
module.exports = profileRouter;
flsdfjsfjsfs;
