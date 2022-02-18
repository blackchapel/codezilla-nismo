// Importing modules
const Event = require('../models/event');

// Create Event
const createEvent = async (req, res) => {
    try {
        let newEvent = new Event(req.body);
        let host = req.user;
        console.log(req.user);
        newEvent.eventhost = host._id;
        await newEvent.save();

        res.status(201).json({
            message: 'Event created successfully!',
            data: newEvent
        })
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// Exporting modules
module.exports = {
    createEvent
};