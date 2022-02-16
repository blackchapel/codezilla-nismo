const express = require('express');
const signup = require('../controllers/signup');
const router = new express.Router();

router.post('/signup', signup);

module.exports = router;