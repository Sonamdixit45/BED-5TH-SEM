const express = require ('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"))

app.post("/login",(req,res)=>{
    try{
         let email = req.body.email;
    let password = req.body.password;
    let newUser={
        email,
        password
    }
    console.log(email,password);
    // res.send("user added");
    res.json({
        success:true,
        data:newUser,
        message:"user added successfully"
    })
    }catch(error){
        res.json({
            success:false,
            error:error
        })
    } 
})

app.listen(4434, () => {
    console.log('Server is running on port 4434');
});