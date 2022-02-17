// Importing modules
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

// Generating a JSON web token
const generatejwt = function(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

// Verifying JWT token
const verifyjwt = (token) => {
    try {
        const { userID } = jwt.verify(token, process.env.JWT_SECRET);
        return userID;
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Exporting modules
module.exports = {
    generatejwt,
    verifyjwt
};