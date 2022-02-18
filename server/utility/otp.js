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
        console.log('SMS sent successfully');
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
 
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
              clientId: process.env.OAUTH_CLIENT_ID,
              clientSecret: process.env.OAUTH_CLIENT_SECRET,
              refreshToken: process.env.OAUTH_REFRESH_TOKEN
            }
          });

        let mailOptions = {
            from: 'socialmigraine@gmail.com',
            to: emailId,
            subject: 'OTP for Signup Verification',
            text: message
        };

        transporter.sendMail(mailOptions, function (error, data) {
            if(error) {
                console.log('Error ' + error);
            } else {
                console.log('Email sent successfully');
            }
        });
    
    } catch(error) {
        res.json({
            message: error.message,
        });
    }
};

// Exporting modules
module.exports = {
    generateotp,
    sendSMS,
    sendEmail
};