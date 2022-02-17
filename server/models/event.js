// Importing modules
const mongoose = require('mongoose');

// Creating the schema
const eventSchema = new mongoose.Schema(
    {
        eventname: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        activity: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        location: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        starttime: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        endtime: {
            type: String,
            required: true,
            trim: true,
            unique: true
        }
    },
    {timestamps: true}
);

const Event = mongoose.model('Event', eventSchema);

// Exporting modules
module.exports = Event;