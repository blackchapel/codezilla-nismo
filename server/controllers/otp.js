// Importing Modules
const User = require('../models/user');

// Phone OTP Verification 
const verifyPhoneOTP = async (req, res) => {
    try {
        // Finding the user
        const { checkPhoneOTP, userID } = req.body;
        const user = await User.findById(userID);

        // Checking if user exists
        if (!user) {
            res.status(404).json({
                message: "User not found"
            });
            return;
        }
        
        // Verifying the OTP sent & entered by user
        if (user.phoneotp !== checkPhoneOTP) {
            res.status(403).json({
                message: "Incorrect OTP"
            });
            return;
        }
        
        // Deleting used OTP from database
        user.phoneotp = "";
        await user.save();
        
        // Verification display message
        res.status(200).json({
            message: "OTP verified!",
            data: { user, token }
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Exporting Module
module.exports = {
    verifyPhoneOTP
};