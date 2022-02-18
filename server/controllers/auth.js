// Importing modules
const User = require('../models/user');
const { generateotp, sendSMS, sendEmail } = require("../utility/otp.js");
const { removeSensitiveData, removeUnnecessaryData } = require('../utility/functions');
const bcryptjs = require('bcryptjs');

// Signup
const signup = async (req, res) => {
    try {
        let newUser = new User(req.body);
        await newUser.save();
        const token = await User.generatejwt(newUser._id);

        // Generating the OTP
        const phoneOtp = generateotp(6);
        const emailOtp = generateotp(6);

        // Saving the OTP in database
        newUser.phoneotp = phoneOtp;
        newUser.emailotp = emailOtp;
        await newUser.save();

        // Sending the otp through sms
        await sendSMS({
            message: `Your OTP for registration is ${phoneOtp}`,
            contactNumber: newUser.phone,
            phoneOtp
        });

        // Sending the otp through email
        await sendEmail ({
            message: `Dear User, your OTP for registration is ${emailOtp}`,
            emailId: newUser.email,
            emailOtp
        });

        // Sending a response back
        res.status(201).json({
            message: 'OTPs sent to Email and Phone',
            data: {
                userID: newUser._id,
                token
            },
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Login
const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if(!user) {
            res.status(404).json({
                message: 'User not found!'
            });
        }

        const isMatch = await bcryptjs.compare(req.body.password, user.password);
        if(!isMatch) {
            res.status(401).json({
                message: 'Invalid credentials!'
            });
        }

        const token = await User.generatejwt(user._id);

        user = removeSensitiveData(user);

        res.status(200).json({
            message: 'User Verified!',
            data: { user, token }
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Logout
const logout = async (req, res) => {
    try {
        const currentUser = req.user;
        const token = req.token;

        currentUser.tokens = currentUser.tokens.filter((usertoken) => {
            return usertoken.token !== token;
        });

        await currentUser.save();

        res.status(200).json({
            message: 'Successfully logged out!'
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Logout of all
const logoutall = async (req, res) => {
    try {
        const currentUser = req.user;
        currentUser.tokens = [];
        await currentUser.save();

        res.status(200).json({
            message: 'Successfully logged out of all sessions!'
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Forgot Password

// Exporting modules
module.exports = {
    signup,
    login,
    logout,
    logoutall
};