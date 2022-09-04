export {};
const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || null;

  if (!mongoURI) {
    console.log("Mongo URI is not defined in env file".red.underline.bold);
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected".blue.underline.bold);
  } catch (err) {
    console.log(err.message.red.underline.blue);
    process.exit(1);
  }
};

module.exports = { connectDB };
