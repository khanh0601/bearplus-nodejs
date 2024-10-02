const connection = require('../config/db');
exports.getAllForms = (req, res) => {
  const query = 'SELECT * FROM formsubmit';
  
  connection.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching data:', err);
          return res.status(500).send('Internal Server Error');
      }

      // Trả về dữ liệu JSON
      res.status(200).json(results);
  });
};
exports.submitForm = (req, res) => {
  const { formName, formData } = req.body;

  // Kiểm tra nếu không có formName hoặc formFields
  if (!formName || !formData)  {
      return res.status(400).send({
          error: true,
          message: 'Form name and form fields are required, and form fields must be a non-empty array'
      });
  }

  // Chuỗi dữ liệu các trường form cách nhau bằng dấu phẩy
  // const formData = formFields.join(',');

  const query = 'INSERT INTO formsubmit (form_name, form_data) VALUES (?, ?)';
  connection.query(query, [formName, formData], (err, result) => {
      if (err) {
          console.error('Error inserting data:', err);
          return res.status(500).send('Internal Server Error');
      }
      res.status(200).send('Form submitted successfully');
  });
};

