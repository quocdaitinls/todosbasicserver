export const cookieOptions = (time = 900) => ({
    sameSite: "none",
    secure: true,
    httpOnly: true,
    expires: new Date(Date.now() + time * 1000),
});
