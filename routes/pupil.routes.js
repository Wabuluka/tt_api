const express = require('express');
const { 
    registerPupil 
} = require('../controllers/pupil.controller');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.route('/register').post(protect, registerPupil);

module.exports = router;