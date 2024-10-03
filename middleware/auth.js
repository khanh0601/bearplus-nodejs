const jwt = require('jsonwebtoken');

// Middleware để xác thực token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    // Xác thực token
    jwt.verify(token.split(" ")[1], 'your_secret_key', (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Lưu thông tin người dùng vào request để dùng sau
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
