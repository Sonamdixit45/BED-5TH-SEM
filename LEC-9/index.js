const express = require("express");
const fs = require("fs");
const app = express();
const path=require("path");
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"users.json"))
// });

app.post('/adduser', (req, res) => {
    const data = req.body;
    let users = [];
    if (fs.existsSync("users.json")) {
        const fileData = fs.readFile("users.json", "utf8");
        try {
            users = JSON.parse(fileData); 
        } catch (err) {
            console.error("Error parsing JSON:", err);
            users = [];
        }
    }
    users.push(data);
    fs.writeFile("users.json", JSON.stringify(users), (err) => {
        if (err) {
            console.error("Error writing", err);
            return res.json({ error: "Failed" });
        }
        res.json({
            user: data
        });
    });
});

app.get("/getusers", (req, res) => {
    fs.readFile("users.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading", err);
            return res.json({ mes: "No users" });
        }
        try {
            const users = JSON.parse(data);
            res.json(users);
        } catch (e) {
            console.error("Error", e);
            res.json({ error: "err" });
        }
    });
});

app.listen(2222, () => {
    console.log("server started");
});