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

const PORT = process.env.PORT || 4000;

const start = async () => {
    try {
        configRoutes(app);
        await connectDB();
        app.listen(PORT, () => {
            console.log("App is listening!");
        });
    } catch (error) {
        console.log(error);
    }
};

start();
