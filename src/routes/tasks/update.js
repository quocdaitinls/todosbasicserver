import express from "express";
import mongoose from "mongoose";
import Task from "../../models/Task.js";
import requireAuth from "../../middlewares/requireAuth.js";

const router = express.Router();

router.put("/api/tasks/:id", requireAuth, async function (req, res) {
    const {id} = req.params;
    const {name, description, time, isDone} = req.body;
    try {
        const task = await Task.findOneAndUpdate(
            {_id: mongoose.Types.ObjectId(id)},
            {
                $set: {name, description, time, isDone},
            },
            {
                returnDocument: "after",
            }
        );

        res.status(200).send(task);
    } catch (error) {
        console.log(error);
        res.status(400).send({});
    }
});

export {router as updateTaskRouter};
