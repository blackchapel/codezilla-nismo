// Importing modules
const express = require('express');
const authorizeJWT = require('../middleware/jwt');
const {
    createEvent,
    getEvents,
    joinEvent
} = require('../controllers/event');

// Initializing router
const router = new express.Router();

router.post('/create', authorizeJWT, createEvent);
router.get('/view', getEvents);
router.put('/join', authorizeJWT, joinEvent);

// Exporting Modules
module.exports = router;