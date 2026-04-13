const jwt = require('jsonwebtoken');

const algorithm = process.env.JWT_ALGORITHM;
const expiresIn = process.env.JWT_EXPIRESIN;
const secretKey = process.env.JWT_SECRETKEY;

// Create JWT
issueAccessToken = () => (req, res, next) => {
    const payload = {
        sub: res.locals.ctx.userId
    };

    const options = { algorithm, expiresIn };

    const callback = (error, token) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }

        res.locals.ctx.accessToken = token;
        next();
    };

    jwt.sign(payload, secretKey, options, callback);
};

// Send JWT
sendAccessToken = (message = "Success", status = 200) => (req, res) => {
    res.status(status).json({ message, token: res.locals.ctx.accessToken });
};

// Verify JWT
authenticateUser = () => (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.substring(7);

    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    const callback = (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: "Token invalid" });
        }

        res.locals.ctx.accessPayload = decoded;
        res.locals.ctx.userId = decoded.sub;
        next();
    };

    jwt.verify(token, secretKey, callback);
};
