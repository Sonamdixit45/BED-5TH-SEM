function m1(req,res,next){
    console.log("running middleware 1....");
    req.user={
        id:1,
        username:"Sonam"
    }
    next();
}

function m2(req,res,next){
    console.log("running middleware 2....");
    console.log(req.user);
   
    next()
}
function checkAdmin(req,res,next){
     let {name} = req.query;
     if(name == "Sonam"){
        req.isAdmin = true;
         return next()
     }
     console.log("after next");
     res.json({
        success : false,
       message : "You are not  an admin"
     })
}
function isLogin(req,res,next){
    console.log("running")
    next()

}

module.exports.m1 = m1;
module.exports.m2 = m2;
module.exports.checkAdmin = checkAdmin;
module.exports.isLogin = isLogin;




//note : next and return are not same