const User = require('../model/user');

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

module.exports = signup;