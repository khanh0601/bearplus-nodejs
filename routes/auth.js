const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Secret key để mã hóa token (trong thực tế bạn nên sử dụng biến môi trường)
const secretKey = 'your_secret_key';

// Route đăng nhập để tạo token
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Đây chỉ là ví dụ đơn giản, bạn có thể thay bằng việc kiểm tra với database
    if (username === 'admin' && password === 'bearplus2024@') {
        // Tạo token (expiresIn là thời gian hết hạn của token)
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

        // Trả về token cho client
        return res.json({ token });
    }

    // Nếu thông tin không chính xác
    return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
