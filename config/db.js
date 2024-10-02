const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',  // Địa chỉ MySQL server
    user: 'root',       // Tên người dùng MySQL
    password: 'khanhkhanh123',       // Mật khẩu MySQL (nếu có)
    database: 'bearplus'  // Tên database
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = connection;
