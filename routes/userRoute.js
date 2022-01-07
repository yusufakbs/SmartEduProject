const express = require('express');
const authController  = require('../controllers/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser); // https://localhost:3000/users/signup


module.exports = router;