const express = require('express');
const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/sum",(req,res)=>{
    let{a,b} = req.body;
    return res.json({
        success:true,
        data:a+b
    });
})
app.listen(3020,(req,res)=>{
    console.log("Server is running on port 3020");
})