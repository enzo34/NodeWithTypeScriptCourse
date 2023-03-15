import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connect to database
export const connectionToDatabase = mongoose.connect(process.env.URL_MONGOOSE).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Error connecting to database: ", err);
});
