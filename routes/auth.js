const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Secret key để mã hóa token (trong thực tế bạn nên sử dụng biến môi trường)
const secretKey = ' 9e7eaf218cf578c6f98c9e4fbb0e8a173b8573fdc488e4cc09e8f5f92385741df52b2ffbf2154ba2f5871d34d238134e6f5e2ba4fc0d5cdb48b29540f3b6e50';

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
