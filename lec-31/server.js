// const { WebSocketServer } = require ('ws');
// const wss = new WebSocketServer({port:8080});



// // connection and message
// // wss.on("connection",function(socket){
// //    console.log("a new user connected")
// //    socket.send("welcome!!")
// //    setInterval(()=>{
// //     socket.send("Reliance stock price is"+ " "+Math.random())
// //    },1000)
// // })



// //express = require("express")
// //app = express
// //app.listen(3000)


// //app.get("/",(req.res)=>{
//     //})
// //app.post("/users")



// //ping pong application

// // wss.on("connection",function(socket){
// //    console.log("a new user connected")
// //    socket.send("welcome!!")
// //    socket.on("message",function(message){
// //     console.log(message.toString())
// //     if(message.toString()==="ping"){
// //         socket.send("pong")
// //     }else{
// //         socket.send("you have not send ping message")
// //     }
// //    })
// // })




// //broadcasting

// let allSocket = []
// wss.on("connection",function(socket){
//    console.log("user connected")
//    allSocket.push(socket)
//    //console.log(allSocket)
//    socket.on("message",function(message){
//     allSocket.forEach((s)=>{
//         s.send(message.toString())
//     })
//    })
// })








const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });
const rooms = new Map();

server.on("connection", (ws) => {
  let currentRoom = null;

  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);

      if (data.type === "chat") {
        const message = data.payload.message;

     
        if (message.startsWith("join:")) {
          const roomName = message.split(":")[1].trim();

         
          if (currentRoom && rooms.has(currentRoom)) {
            rooms.get(currentRoom).delete(ws);
          }
          if (!rooms.has(roomName)) {
            rooms.set(roomName, new Set());
          }
          rooms.get(roomName).add(ws);
          currentRoom = roomName;

          ws.send(JSON.stringify({
            type: "system",
            payload: {message: `Joined room ${roomName} `}
          }));
        } 
        
        else {
          if (!currentRoom) {
            ws.send(JSON.stringify({
              type: "error",
              payload: { message: "Join a room first using 'join:roomName'" }
            }));
            return;
          }

          const payload = {
            type: "chat",
            payload: {
              message,
              room: currentRoom
            }
          };

          
          rooms.get(currentRoom).forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify(payload));
            }
          });
        }
      }
    } catch (err) {
      ws.send(JSON.stringify({
        type: "error",
        payload: { message: "Invalid JSON format" }
      }));
    }
  });

  ws.on("close", () => {
    if (currentRoom && rooms.has(currentRoom)) {
      rooms.get(currentRoom).delete(ws);
    }
  });
});

console.log("WebSocket server running on ws://localhost:8080");