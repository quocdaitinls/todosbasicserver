import jwt from "jsonwebtoken";
import {JWT_KEY} from "../../../constant.js";

export const createJwtToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
        },
        JWT_KEY,
        {expiresIn: "6h"}
    );
};
