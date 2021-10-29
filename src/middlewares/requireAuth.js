const requireAuth = (req, res, next) => {
    if (!req.currentUser) {
        return res.status(401).send({error: "not signed in."});
    } else {
        next();
    }
};

export default requireAuth;
