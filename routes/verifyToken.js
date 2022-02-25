const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (!authHeader) {
        return res.status(401).json("Login first");
    } else {
        const token= authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {

            if (err) {
                return res.status(403).json("Not valid");
            }
            req.user = user;
            next();
        });
    };
    };

    const verifyTokenAuth = (req, res, next) => {
        verifyToken(req, res, () => {
            if (req.user.id === req.params.id || req.user.isAdmin) {
                next();
            } else {
                res.status(403).json("Not valid");
            }
        });
    };
    const verifyTokenisAdmin = (req, res, next) => {
        verifyToken(req, res, () => {
            if (req.user.isAdmin) {
                next();
            } else {
                res.status(403).json("Not Admin");
            }
        });
    };
    module.exports = {
        verifyToken,
        verifyTokenAuth,
        verifyTokenisAdmin
    };
