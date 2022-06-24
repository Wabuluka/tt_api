const express = require('express');
const { 
    register, getProfile, login
} = require('../controllers/auth.controller')

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/register')
    .post(register)

router.route('/login')
    .post(login)

router.route('/profile/:id')
    .get(protect, getProfile)

module.exports = router;