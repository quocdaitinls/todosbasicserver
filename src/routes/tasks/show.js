import express from "express";
import Task from "../../models/Task.js";
import requireAuth from "../../middlewares/requireAuth.js";

const router = express.Router();

router.get("/api/tasks/:id", requireAuth, async function (req, res) {
    const {id} = req.params;
    try {
        const task = await Task.findById(id);
        res.status(200).send(task);
    } catch (error) {
        console.log(error);
        res.status(400).send({});
    }
});

export {router as showTaskRouter};
