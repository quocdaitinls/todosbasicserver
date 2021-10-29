import express from "express";
import User from "../../models/User.js";
import {createJwtToken} from "./utils/createJwtToken.js";

const router = express.Router();

router.post("/api/auth/signup", async function (req, res) {
    const {name, username, password} = req.body;
    try {
        const findUser = await User.findOne({username});
        if (findUser) {
            throw new Error("username existed");
        } else {
            const newUser = await User.create({name, username, password});
            const userJwt = createJwtToken(newUser);
            req.session = {
                jwt: userJwt,
            };
            res.status(201).send(newUser);
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({error: error.message});
    }
});

export {router as signupRouter};
