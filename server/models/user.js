// Importing modules
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Creating the schema
const userSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Invalid email address!']
        },

        phone: {
            type: Number,
            required: true,
            trim: true,
            unique: true,
            minlength: [10, 'Invalid number!'],
            maxlength: [10, 'Invalid number!']
        },

        password: {
            type: String,
            required: true,
            trim: true,
            minlength: [8, 'Password too short!'],
            maxlength: [128, 'Password too long!']
        },

        tokens: [{
            token: {
                type: String, 
                required: true
            }
        }],

        emailotp: {
            type: String
        },

        phoneotp: {
            type: String
        }
    },
    { timestamps: true }
);

// Hashing the password
userSchema.pre('save', async (next) => {
    const user = this.user;
    //console.log(user);
    if (this.password) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    
    // const user = this;
    // console.log(user);
    // const hash = await bcryptjs.hash(user.password, 8);
    // user.password = hash;
    next();
});

// Generating jwt
userSchema.statics.generatejwt = async (userid) => {
    const user = await User.findById(userid);
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '24h' });
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};

const User = mongoose.model('User', userSchema);

// Exporting the module
module.exports = User;