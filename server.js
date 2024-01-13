const express = require('express')
const http = require('http')

const app = express()

const server = http.createServer(app)

function start() {
    server.listen(3030,()=>{
        console.log('server is running on port 3030');
    })
}

start()