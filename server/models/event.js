// Importing modules
const mongoose = require('mongoose');
const User = require('./user');

// Creating the schema
const eventSchema = new mongoose.Schema(
    {
        eventname: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        activity: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        date: {
            type: String,
            //required: true,
            trim: true
        },

        starttime: {
            type: String,
            //required: true,
            trim: true
        },

        endtime: {
            type: String,
            //required: true,
            trim: true
        },

        address: {
            type: String,
            //required: true,
            trim: true
        },

        pincode: {
            type: Number,
            //required: true,
            trim:true
        },

        eventhost: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        },

        membersjoined: [{
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        }]
    },
    {timestamps: true}
);

const Event = mongoose.model('Event', eventSchema);

// Exporting modules
module.exports = Event;