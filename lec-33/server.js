const express = require("express");
const app = express();

const {createClient} = require("redis");
const client =  createClient()
async function connect(){
    await client.connect()
     client.on("error",function(err){
        console.log(err)
    })




    app.get("/profile",(req,res)=>{
        
    })
}
connect()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server started");
    })
})


 async function cachedData(){
    await client.connect()
     await client.set("users:100",JSON.stringify([{
        name:"Sonam",
        age:"21"
    }]))
}
// cachedData()
// .then(()=>{
//     console.log("data access success fully")
// })

// async function readUser(){
//     await client.connect()
//      const data = await client.get("users:100");
//     if (data) {
//         const parsed = JSON.parse(data);
//         console.log("Fetched data:", parsed);
//         return parsed;
//     } else {
//         console.log("No data found");
//         return null;
//     }
// }

// readUser()
// .then(()=>{
//     console.log("user data fetched")
// })
