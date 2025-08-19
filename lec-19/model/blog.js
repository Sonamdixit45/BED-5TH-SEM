const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: Date,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Blog", blogSchema);
