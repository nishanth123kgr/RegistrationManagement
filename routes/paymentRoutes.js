const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/paymentController');


router.post('/', paymentController.handlePaymentFormSubmission);

module.exports = router;