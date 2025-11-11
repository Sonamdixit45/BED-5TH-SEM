const {WebSocketServer} = require('ws');
let wss = new WebSocketServer({ port: 8080 });
let {subscriber,publisher} = require("../shared/index");

wss.on("connection",(socket)=>{
    console.log("new user connected")
    async function bookUpdate(){
        await subscriber.connect();
        await subscriber.subscribe("book:update",(message)=>{
            console.log("message received",message);
            socket.send(message);
        })
    }
    bookUpdate();
})

