const path = require("path");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const User = require("../models/User");

async function run() {
  try {
    await mongoose.connect(
      "mongodb+srv://Russ:poiu0987@cluster0.bmwvl6w.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to DB.");

    // Resetting
    await Promise.all([User.collection.drop()]);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

run().catch(console.dir);
