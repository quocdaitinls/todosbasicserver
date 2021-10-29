import express from "express";
import User from "../../models/User.js";

const router = express.Router();

router.get("/api/auth/currentuser", async function (req, res) {
    const {id} = req.currentUser;

    try {
        if (!id) throw new Error("user not signed in");
        const user = await User.findById(id);
        res.status(200).send(user);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({});
    }
});

export {router as currentuserRouter};
