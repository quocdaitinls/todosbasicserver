import express from "express";
import {ACCESS_TOKEN} from "../../constant.js";
import User from "../../models/User.js";
import {cookieOptions} from "./utils/cookieOptions.js";
import {createJwtToken} from "./utils/createJwtToken.js";

const router = express.Router();

router.post("/api/auth/signin", async function (req, res) {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username});

        if (user && password === user.password) {
            const userJwt = createJwtToken(user);
            return res
                .status(200)
                .cookie(ACCESS_TOKEN, userJwt, cookieOptions())
                .send(user);
        } else {
            throw new Error("username or password incorrect");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({error: error.message});
    }
});

export {router as signinRouter};
