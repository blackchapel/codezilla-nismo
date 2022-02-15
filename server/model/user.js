// Importing modules
const mongoose = require("mongoose");

// Creating the schema
const userSchema = new mongoose.Schema ({
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

    emailotp: {
        type: String
    },

    phoneotp: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

// Exporting the module
module.exports = User;