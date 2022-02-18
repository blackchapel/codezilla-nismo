// Importing modules
const express = require('express');
const authorizeJWT = require('../middleware/jwt');
const {
    createEvent
} = require('../controllers/event');

// Initializing router
const router = new express.Router();

router.post('/create', authorizeJWT, createEvent);

// Exporting Modules
module.exports = router;