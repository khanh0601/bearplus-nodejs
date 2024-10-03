const pool = require('../config/db');

exports.getAllForms = async (req, res) => {
  const query = 'SELECT * FROM formsubmit';
  
  try {
    const results = await pool.query(query);
    // Trả về dữ liệu JSON
    res.status(200).json(results.rows);
  } catch (err) {
    console.error('Error fetching data:', err);
    return res.status(500).send('Internal Server Error');
  }
};

exports.submitForm = async (req, res) => {
    const { formName, formData } = req.body;
  
    // Kiểm tra nếu không có formName hoặc formData
    if (!formName || !formData) {
      return res.status(400).send({
        error: true,
        message: 'Form name and form fields are required'
      });
    }
  
    const query = 'INSERT INTO formsubmit (form_name, form_data) VALUES ($1, $2)';
  
    try {
      await pool.query(query, [formName, formData]);
      res.status(200).send('Form submitted successfully');
    } catch (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Internal Server Error');
    }
  };
  
