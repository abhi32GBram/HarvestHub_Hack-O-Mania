// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define route for user registration
router.post('/register', userController.createUser);

module.exports = router;
