const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const logger = require('../utils/logger');

router.get('/', userController.getAllUsers);

router.post('/exists', async (req, res) => {
    logger.info(req.body);
    logger.info("Checking if user exists with email: " + req.body.email);
    const email = req.body.email;
    const exists = await userController.isUserExistsWithEmail(email);
    res.json({ exists });
});


module.exports = router;
