const  {WebSocketServer} = require("ws");
const wss = new WebSocketServer({port:8888});

//rooms
let rooms = new Map();
   //{
   // "1234" : [s1,s2,s2]
   //}


wss.on("connection",function(socket){
    console.log("a new user connected")
    socket.on("message",function(message){
        let parsedMessage = JSON.parse(message);
        if(parsedMessage.type === "join"){
            console.log(rooms)
            let roomId = parsedMessage.payload.roomId;
            if(!rooms.get(roomId)){
                //rooms.set(roomId,new Set())
                socket.send("roomid does not exist")
            }
            rooms.get(roomId).add(socket)
            socket.roomId = roomId; 
            socket.send("you are added to room"+" "+roomId)
            console.log(rooms)     
          }
          else if(parsedMessage.type == "chat"){
            let roomId = socket.roomId;
            let message = parsedMessage.payload.message;
            let allClients = rooms.get(roomId);
            allClients.forEach(s => {
                s.send(message)
                
            });

          }
          else if(parsedMessage.type == "create"){
            let roomId = Math.floor(Math.random()*100000000).toString()
        rooms.set(roomId,new Set())
        console.log(rooms)
            socket.send(roomId)
          }
    })
})
