import express from "express";
import Task from "../../models/Task.js";
import User from "../../models/User.js";
import mongoose from "mongoose";
import requireAuth from "../../middlewares/requireAuth.js";

const router = express.Router();

router.delete("/api/tasks/:id", requireAuth, async function (req, res) {
    const {id} = req.currentUser;
    const taskId = req.params.id;
    try {
        await User.updateOne(
            {_id: mongoose.Types.ObjectId(id)},
            {
                $pull: {
                    tasks: [taskId],
                },
            }
        );

        await Task.findOneAndDelete({
            _id: mongoose.Types.ObjectId(taskId),
        });

        res.status(200).send({taskId});
    } catch (error) {
        console.log(error);
        res.status(400).send({});
    }
});

export {router as deleteTaskRouter};
