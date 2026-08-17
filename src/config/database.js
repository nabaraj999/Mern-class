import mongoose from "mongoose";
import config from "./config.js";

async function connectDB() {
    try {
   await mongoose.connect(config.mongoUri)
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

export default connectDB;