import jwt from "jsonwebtoken";
import {JWT_KEY} from "../constant.js";

const currentUser = (req, res, next) => {
    const accessToken = req.headers.authorization?.split(" ")[1];
    req.currentUser = {};
    if (!accessToken) {
        return next();
    }

    try {
        const payload = jwt.verify(accessToken, JWT_KEY);
        req.currentUser = payload;
    } catch (error) {
        console.log(error);
    }

    next();
};

export default currentUser;
