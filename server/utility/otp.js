// Importing modules
const dotenv = require('dotenv').config();
const res = require('express/lib/response');
const fast2sms = require('fast-two-sms');

// Generating an OTP
const generateotp = (otpLength) => {
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < otpLength; i++) {
        OTP += digits[Math.floor(Math.random()*10)];
    }
    return OTP;
};

// Sending OTP via sms
const sendsms = async ({ message, contactNumber }) => {
    try {
        const res = await fast2sms.sendMessage({
            authorization: process.env.SMS_API_KEY,
            message,
            numbers: [contactNumber]
        });
        console.log(res);
    } catch(error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error);
    }
};

// Sending OTP via mail

// Exporting modules
module.exports = {
    generateotp,
    sendsms
}