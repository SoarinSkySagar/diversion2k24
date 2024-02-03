const http = require('http')

const app = require('./app')
const {mongoConnect} = require('./services/mongo')

const PORT = 5000

const server = http.createServer(app)

async function startServer() {
    await mongoConnect()
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

startServer()