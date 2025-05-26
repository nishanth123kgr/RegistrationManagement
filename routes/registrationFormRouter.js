const registrationFormController = require('../controllers/registrationFormController');

const express = require('express');
const router = express.Router();

// Route to handle form submission
router.get('/', (req, res) => {
    res.render('registrationForm');
}
);

router.post('/', registrationFormController.handleRegistrationFormSubmission);

module.exports = router;