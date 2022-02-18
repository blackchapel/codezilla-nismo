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

// Get Events
const getEvents = async (req, res) => {
    try {
        let events = await Event.find();
        res.status(200).json({
            data: events
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Join Event 
const joinEvent = async (req, res) => {
    try {
        let event = await Event.findById(req.body.eventid);
        let userid = {} 
        userid = req.user._id;

        if(!event) {
            res.status(404).json({
                message: 'Event Not Found!',
            });
        }

        event.membersjoined.push(userid);
        await event.save();

        res.status(201).json({
            message: "Event joined successfully!"
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Exporting modules
module.exports = {
    createEvent,
    getEvents,
    joinEvent
};