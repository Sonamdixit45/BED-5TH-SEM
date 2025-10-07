const express = require("express");
const mongoose = require("mongoose");
const { m1,m2, checkAdmin } = require("./middleware/middleware");
const app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const  blogRoutes = require("./routes/blogRoutes")
app.use(m1)
//app.use(m2)



app.get("/home",(req,res,next)=>{
    console.log("running controller home");
    res.json({
        success : true,
        message:"welcome to home page"
    })
    next()
})
app.use(m2);
app.get("/dashboard",checkAdmin,(req,res)=>{
    if(req.isAdmin){
        return res.json({
            success : true,
        message:"admin dashboard"
        })
    }
    return res.json({
            success : false,
        message:"not authorized dashboard"
        })
})

app.use("/api/blogs",blogRoutes)

app.listen(3333,(req,res)=>{
    console.log("server started on 3333");

})

