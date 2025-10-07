const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static(__dirname+"/public"));

app.get("/users",(req,res)=>{
    fs.readFile("./user.json","utf-8",function(err,data){
        if(err) return res.send(err);
        let user = JSON.parse(data);
        res.json(user)
    })
})

app.listen(4000,()=>{
    console.log("server started")
})