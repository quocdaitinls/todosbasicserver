import express from "express";
import {ACCESS_TOKEN} from "../../constant.js";
import {cookieOptions} from "./utils/cookieOptions.js";

const router = express.Router();

router.post("/api/auth/signout", function (req, res) {
    req.session = null;

    res.status(200).cookie(ACCESS_TOKEN, null, cookieOptions(0)).send({});
});

export {router as signoutRouter};
