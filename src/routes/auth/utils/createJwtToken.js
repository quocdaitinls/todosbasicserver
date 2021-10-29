import jwt from "jsonwebtoken";

export const createJwtToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
        },
        process.env.JWT_KEY,
        {expiresIn: "6h"}
    );
};
