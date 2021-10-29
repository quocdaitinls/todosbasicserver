import express from "express";
import Task from "../../models/Task.js";
import requireAuth from "../../middlewares/requireAuth.js";
import User from "../../models/User.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/api/tasks", requireAuth, async function (req, res) {
    const {id} = req.currentUser;
    const {name, description, time} = req.body;
    try {
        const newTask = await Task.create({
            name,
            description,
            time,
        });

        await User.findOneAndUpdate(
            {_id: mongoose.Types.ObjectId(id)},
            {$push: {tasks: newTask._id}}
        );

        res.status(201).send(newTask);
    } catch (error) {
        console.log(error);
        res.status(400).send({});
    }
});

export {router as createTaskRouter};
