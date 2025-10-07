const fs = require("fs");




fs.writeFile("../demo.txt","hello sonam",function(err){
    if(err) return console.log(err);
    console.log("Success!!")

})


fs.writeFile("../b.txt","hello samiya",function(err){
    if(err) return console.log(err);
    console.log("Success!!")

})



