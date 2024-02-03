const socketIO = require('socket.io')
const chatFuncs = require('./../models/chats.model')

let chatHistory = []

function onChatConnection(socket, io) {
    console.log('user connected:', socket.id)

    socket.on('join', async (data) => {
        try {
            const roomName = data.room;
            socket.join(roomName);
            console.log(`User ${socket.id} joined room: ${roomName}`);
            chatHistory = chatHistory.concat(await chatFuncs.getAllMessagesForRoom(roomName));
            io.in(roomName).emit('chatHistory', chatHistory);
        } catch (error) {
            console.error('Error joining room:', error);
        }
    });

    socket.on('chatMessage', async (data) => {
        try {
            const roomName = data.room;
            const message = data.message;
            const userType = data.type

            await chatFuncs.addMessageToChat(roomName, userType, message);

            const lastMessage = await chatFuncs.getLastMessage(roomName);

            chatHistory.push(lastMessage);

            const msg = chatHistory[chatHistory.length - 1]

            io.in(roomName).emit('chatMessage', msg)

        } catch (error) {
            console.error('Error handling chat message:', error);
        }
    });
    
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
}

module.exports = {
    onChatConnection
}