// Importing modules
const express = require('express');
const airQualityData = require('../controllers/api');

// Initializing router
const router = new express.Router();

// Routes
router.get('/climate', airQualityData);

// Exporting Modules
module.exports = router;