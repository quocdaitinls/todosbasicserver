import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import {configRoutes} from "./configRoutes.js";

import {MONGO_URI, PORT} from "./constant.js";

dotenv.config();

const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDb.");
    } catch (error) {
        console.log(error);
    }
};

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
