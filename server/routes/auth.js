// Importing modules
const express = require('express');
const authorizeJWT = require('../middleware/jwt');
const {
    signup,
    login,
    logout,
    logoutall
} = require('../controllers/auth');

// Initializing router
const router = new express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authorizeJWT, logout);
router.post('/logoutall', authorizeJWT, logoutall);

// Exporting Modules
module.exports = router;