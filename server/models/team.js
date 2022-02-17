// Importing modules
const mongoose = require('mongoose');
const User = require('./user');

// Creating the schema
const teamSchema = new mongoose.Schema (
    {
        teamname: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        teamleader: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        },

        members: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        },

        location: {
            type: String,
            required: true,
            trim: true,
            unique: true
        }
    },
    {timestamps: true}
);

const Team = mongoose.model('Team', teamSchema);

// Exporting module
module.exports = Team;