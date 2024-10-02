const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Định tuyến để submit form
router.post('/submit', formController.submitForm);
router.get('/all', formController.getAllForms);
module.exports = router;
