// Importing modules
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// User signup
const signup = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({
            message: 'Account Successfully Created!',
            data: newUser
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// User login
const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = generatejwt({ userID: user._id });

        res.status(201).json({
            message: "User verified!", 
            type: "success",
            data: { token, user }
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        })
    }
};

// User logout


// Forgot Password


// Exporting modules
module.exports = {
    signup,
    login
};