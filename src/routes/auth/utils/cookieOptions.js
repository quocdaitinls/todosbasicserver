export const cookieOptions = (req, time = 900) => ({
    domain: req.get("origin"),
    sameSite: "none",
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + time * 1000),
});
