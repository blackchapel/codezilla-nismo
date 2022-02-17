// <-------------------- Phone OTP Verification -------------------->
const verifyPhoneOTP = async (req, res) => {
    try {
      // Finding the user
      const { checkPhoneOTP, userID } = req.body;
      const user = await User.findById(userID);
  
      // Checking if user exists
      if (!user) {
        res.status(400).json({
          message: "User not found"
        });
        return;
      }
      
      // Verifying the OTP sent & entered by user
      if (user.phoneOTP !== checkPhoneOTP) {
        res.status(400).json({
          message: "Incorrect OTP"
        });
        return;
      }
      
      // Generating JWT 
      const token = generateJWT({ userID: user._id });
      
      // Deleting used OTP from database
      user.phoneOTP = "";
      await user.save();
      
      // Verification display message
      res.status(201).json({
        message: "OTP verified!", 
        type: "success",
        data: {
          token,
          user
        }
      });
    } catch (error) {
      res.status(400).json({
        message: error.message
      });
    }
  };