import mongoose from "mongoose";
import "dotenv/config.js";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB || "http://localhost:3000", {
      dbName: process.env.DB_NAME,
    });
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
};
