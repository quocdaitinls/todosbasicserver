import express from "express";
import Task from "../../models/Task.js";
import User from "../../models/User.js";
import requireAuth from "../../middlewares/requireAuth.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/api/tasks", requireAuth, async function (req, res) {
    const {id} = req.currentUser;
    try {
        const user = await User.findById(id);
        const tasks = await Task.find({
            _id: {
                $in: user.tasks.map((taskId) =>
                    mongoose.Types.ObjectId(taskId)
                ),
            },
        });
        res.status(200).send(tasks);
    } catch (error) {
        console.log(error);
        res.status(400).send({});
    }
});

export {router as getTasksRouter};
