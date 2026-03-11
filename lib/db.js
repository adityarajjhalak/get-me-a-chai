import mongoose from "mongoose";
const MONGO_URI = process.env.MONGODB_URI;
let isConnected = false;
const connectToDB = async () => {
 
    if (isConnected) return;
    if (!MONGO_URI) {
        throw new Error("MONGO_URI is not defined in environment variables");
    }
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("Connected to MongoDB");
};
export default connectToDB;