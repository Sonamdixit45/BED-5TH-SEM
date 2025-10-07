const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }]
});

module.exports = mongoose.model("User", userSchema);
