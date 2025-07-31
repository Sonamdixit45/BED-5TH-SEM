const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express server running!"));

app.listen(3000, () => console.log("http://localhost:3000"));
app.use(express.static(__dirname));
