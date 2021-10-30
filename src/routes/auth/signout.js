import express from "express";
import {ACCESS_TOKEN} from "../../constant.js";

const router = express.Router();

router.post("/api/auth/signout", function (req, res) {
    req.session = null;

    res.status(200)
        .cookie(ACCESS_TOKEN, null, {
            expires: new Date(),
        })
        .send({});
});

export {router as signoutRouter};
