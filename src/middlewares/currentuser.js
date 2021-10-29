import jwt from "jsonwebtoken";
import {JWT_KEY} from "../constant.js";

const currentUser = (req, res, next) => {
    req.currentUser = {};
    if (!req.session?.jwt) {
        return next();
    }

    try {
        const payload = jwt.verify(req.session.jwt, JWT_KEY);
        req.currentUser = payload;
    } catch (error) {
        console.log(error);
    }

    next();
};

export default currentUser;
