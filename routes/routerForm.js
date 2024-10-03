const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const authenticateToken = require('../middleware/auth');
// Định tuyến để submit form
router.post('/submit', formController.submitForm);
router.get('/all', authenticateToken, formController.getAllForms);
module.exports = router;
