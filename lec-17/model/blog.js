const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Blogpost =  new Schema({
    title : String,
    body : String,
    date : Date
});
 module.exports = mongoose.model('Blogs',Blogpost)