const http = require('http')
const socketIO = require('socket.io')

const app = require('./app')
const {mongoConnect} = require('./services/mongo')
const {onChatConnection} = require('./controllers/chat.controller')

const PORT = 5000

const server = http.createServer(app)

async function startServer() {
    await mongoConnect()

    const io = socketIO(server)
    const chatIO = io.of('/chat')

    chatIO.on('connection', (socket) => {
        onChatConnection(socket, chatIO)
    })

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

startServer()