const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Abdurahman:qwerzxcv@cluster0.bxqhu0q.mongodb.net/devTinder"
  );
};
module.exports = connectDB;
