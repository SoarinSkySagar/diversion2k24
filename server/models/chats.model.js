const chatModel = require('./chats.mongo')

async function createRoom(room) {
    try {
        chat = new chatModel({ room, texts: [] });
        await chat.save();
        return chat
    } catch(err) {
        console.error('Error creating room:', err);
        throw err;
    }
}


async function addMessageToChat(room, sender, message) {
    try {
        let chat = await chatModel.findOne({ room });
        if (!chat) {
            chat = await createRoom(room);
        }
        chat.texts.push({ sender, message });
        await chat.save();
    } catch (error) {
        console.error('Error adding message to chat:', error);
        throw error;
    }
}

async function getAllMessagesForRoom(room) {
    try {
        const chat = await chatModel.findOne({ room });
        const messages = chat ? chat.texts : [];
        console.log('Retrieved messages for room:', room);
        return messages;
    } catch (error) {
        console.error('Error retrieving messages for room:', error);
        throw error;
    }
}

async function getLastMessage(room) {
    try {
      const chat = await chatModel.findOne({ room });

      if (chat && chat.texts && chat.texts.length > 0) {
        const lastMessage = chat.texts[chat.texts.length - 1];
        return lastMessage;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching last message:', error);
      throw error;
    }
  }

module.exports = {
    createRoom,
    addMessageToChat,
    getAllMessagesForRoom,
    getLastMessage
}