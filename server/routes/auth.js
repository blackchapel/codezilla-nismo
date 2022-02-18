// Importing modules
const express = require('express');
const authorizeJWT = require('../middleware/jwt');
const {
    signup,
    login,
    logout,
    logoutall
} = require('../controllers/auth');
const { 
    verifyPhoneOTP, 
    verifyEmailOTP 
} = require('../controllers/otp');

// Initializing router
const router = new express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authorizeJWT, logout);
router.post('/logoutall', authorizeJWT, logoutall);
router.post('/otp-phone', authorizeJWT, verifyPhoneOTP);
router.post('/otp-email', authorizeJWT, verifyEmailOTP);

// Exporting Modules
module.exports = router;