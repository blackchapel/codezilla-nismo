// Importing modules
const dotenv = require('dotenv').config();
const res = require('express/lib/response');
const fast2sms = require('fast-two-sms');
const nodemailer = require('nodemailer');

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
const sendSMS = async ({ message, contactNumber }) => {
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
const sendEmail = async ({ message, emailId }) => {
    try {
        console.log('first');
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: 'verifyotp@gmail.com',
                pass: '@Verifyotp1',
                clientId: '221607411406-ppmtq4tnkpb5buscdubddqdoke25p5dg.apps.googleusercontent.com',
                clientSecret: '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',
                refreshToken: '1//04mkdT-ZeEU5sCgYIARAAGAQSNwF-L9IrmTV-WC-wCyS52T8ILCC83mSMfrWBR8poxz6yBtjLNX65Fk58PvLDuIC67lHIH-IVdSE'
            }
        });
        console.log(second);
        let mailOptions = {
            from: "verifyotp@gmail.com",
            to: emailId,
            subject: "OTP for Signup Verification",
            text: message
        };
        console.log('third');
        transporter.sendMail(mailOptions, function (error, data) {
            if(error) {
                console.log("Error " + error);
            } else {
                console.log("Email sent successfully");
            }
        });
        console.log('fourth');
    } catch(error) {
        res.status(400).json({
            message: error.message,
        });
        console.log(error);
    }
};

// Exporting modules
module.exports = {
    generateotp,
    sendSMS,
    sendEmail
};