const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Blogpost =  new Schema({
    title : String,
    body : String,
    date : Date,
    userId :{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
});
 module.exports = mongoose.model('Blogs',Blogpost)