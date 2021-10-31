export const cookieOptions = (req, time = 900000) => ({
    domain: req.get("origin").replace("https://", ""),
    sameSite: "none",
    secure: true,
    // httpOnly: true,
    expires: new Date(Date.now() + time * 1000),
});
