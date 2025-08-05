const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;


app.use(express.static(path.join(__dirname)));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// make register.html and add user,email,roll  when click on sign up it goes request on server 
