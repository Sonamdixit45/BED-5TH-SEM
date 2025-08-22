const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error(err));


app.use("/api/auth", authRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
