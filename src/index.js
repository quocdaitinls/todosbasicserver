import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import {configRoutes} from "./configRoutes.js";

dotenv.config();

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDb.");
    } catch (error) {
        console.log(error);
    }
};

const start = async () => {
    try {
        configRoutes(app);
        await connectDB();
        app.listen(4000, () => {
            console.log("Listening on port 4000!");
        });
    } catch (error) {
        console.log(error);
    }
};

start();
