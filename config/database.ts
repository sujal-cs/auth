// Create a database connection 

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("Connected to MongoDB locally");
  } catch (error) {
    console.log("Error connecting MonogDB");
    console.log(error);
  }
}

export default connectDB;
