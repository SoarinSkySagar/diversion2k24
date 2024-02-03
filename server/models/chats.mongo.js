const mongoose = require('mongoose');

const Chat = new mongoose.Schema({
    room: {
        type: String,
        required: true
    },
    texts: [{
        sender: {
            type: String,
            enum: ['student', 'teacher'],
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }]
});

const chatModel = mongoose.model('Chat', Chat);

module.exports = chatModel