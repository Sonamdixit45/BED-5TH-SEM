const express = require("express");
const fs=require("fs");
const path=require("path");
const app = express();

app.use(express.static(__dirname+"/public"))

let userData=[];
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/registration.html")
})

// app.post("/adduser",(req,res)=>{
//     console.log(req.body);
//     let {name,email,password}=req.body;
//     // let newUser={
//     //     name:name,
//     //     email:email,
//     //     passowrd:password
//     // }
//     // userData.push(newUser);
//     // res.send(userData);
//     // console.log(name,email,password);

//     res.json({
//         name,
//         email,
//         password
//     })

// })

app.post("/adduser", (req, res) => {
    const { name, email, password } = req.body;
    const newUser = { name, email, password };

    fs.readFile("data.json", "utf8", (err, data) => {
        let users = [];

        if (!err && data) {
            try {
                users = JSON.parse(data);
            } catch (e) {
                users = [];
            }
        }

        users.push(newUser);

        fs.writeFile("data.json", JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.send("Failed to store data in file.");
            }
            res.send("User data stored");
        });
    });
});

// app.get("/",(req,res)=>{
    // res.sendFile(__dirname+"/index.html")
// })

// app.get("/about.html",(req,res)=>{
//     res.sendFile(__dirname+"/about.html")
// })

app.listen(5555, () => {
    console.log("Server started on port 5555");
});