const ws = require('ws')
const handleRequest = require('protobuf-websocket-api-server').default

const port = 23333

const server = new ws.Server({ port: port })
handleRequest(server)
console.log(`WebSocket server started at port ${port}.`)
