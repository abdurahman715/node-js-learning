const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address " + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a Strong password " + value);
        }
      },
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    photoUrl: {
      type: String,
      default:
        "https://tse1.mm.bing.net/th/id/OIP.4UCrznStgWiVvp7xwVvK_wHaIy?rs=1&pid=ImgDetMain&o=7&rm=3",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid image URL " + value);
        }
      },
    },
    about: {
      type: String,
      default: "This is dummy about",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
