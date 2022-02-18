// Importing Modules
const User = require('../models/user');
const { removeSensitiveData, removeUnnecessaryData } = require('../utility/functions');

// Phone OTP Verification 
const verifyotps = async (req, res) => {
    try {
        // Finding the user
        let token = req.token
        let { userid, checkPhoneOTP, checkEmailOTP } = req.body;
        let user = await User.findById(userid);

        // Checking if user exists
        if (!user) {
            res.status(404).json({
                message: 'User not found'
            });
            return;
        }

        // Verifying the OTP sent to phone & entered by user
        if (user.phoneotp !== checkPhoneOTP) {
            res.status(403).json({
                message: 'Incorrect Phone OTP!'
            });
            return;
        }

        // Verifying the OTP sent to email & entered by user
        if (user.emailotp !== checkEmailOTP) {
            res.status(403).json({
                message: 'Incorrect Email OTP!'
            });
            return;
        }
        
        // Deleting used OTP from database
        user.phoneotp = undefined;
        user.emailotp = undefined;
        await user.save();
        
        user = removeSensitiveData(user);

        // Verification display message
        res.status(201).json({
            message: 'OTPs verified!',
            data: { user, token }
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// // Email OTP Verification
// const verifyEmailOTP = async (req, res) => {
//   try {
//       // Finding the user
//       let token = req.token
//       let { userid, checkEmailOTP } = req.body;
//       let user = await User.findById(userid);

//       // Checking if user exists
//       if (!user) {
//           res.status(404).json({
//               message: 'User not found'
//           });
//           return;
//       }

//       // Verifying the OTP sent & entered by user
//       if (user.emailotp !== checkEmailOTP) {
//           res.status(403).json({
//               message: 'Incorrect Email OTP'
//           });
//           return;
//       }
      
//       // Deleting used OTP from database
//       user.phoneotp = "";
//       await user.save();
      
//       user = removeSensitiveData(user);

//       // Verification display message
//       res.status(200).json({
//           message: 'OTP verified!',
//           data: { user, token }
//       });
//   } catch (error) {
//       res.status(400).json({
//           message: error.message
//       });
//   }
// };

// Exporting Module
module.exports = verifyotps;
