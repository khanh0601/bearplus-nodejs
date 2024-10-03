const pool = require('../config/db');

// Hàm lấy tất cả các forms
exports.getAllForms = async (req, res) => {
  const query = 'SELECT * FROM formsubmit';
  
  try {
    const results = await pool.query(query);
    // Trả về dữ liệu dưới dạng JSON
    res.status(200).json({ success: true, data: results.rows });
  } catch (err) {
    console.error('Error fetching data:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Hàm submit form
exports.submitForm = async (req, res) => {
  const { formName, formData } = req.body;

  // Kiểm tra nếu không có formName hoặc formData
  if (!formName || !formData) {
    return res.status(400).json({
      success: false,
      message: 'Form name and form fields are required'
    });
  }

  const query = 'INSERT INTO formsubmit (form_name, form_data) VALUES ($1, $2)';

  try {
    await pool.query(query, [formName, formData]);
    // Trả về JSON sau khi submit thành công
    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (err) {
    console.error('Error inserting data:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
