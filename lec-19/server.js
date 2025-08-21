const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Serve static HTML + CSS files from "public" folder
app.use(express.static("public"));

// Routes
const blogRoutes = require("./routes/blogsRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/G27DBs')
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.error(err));

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
