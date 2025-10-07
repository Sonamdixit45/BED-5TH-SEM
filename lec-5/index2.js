let p = new Promise((resolve,reject)=>{
    resolve("ok")

})
//console.log(p);
p
.then((data)=>{
    console.log(data)
   console.log("completed")
})

.catch((err)=>{
    console.log("err")
   
})

 let users = [
    {
        id:1,
        age:16,
        name:"yashu"
    },
    {
        id:2,
        age:26,
        name:"yashu"


    }
 ]
function isEligible(id){
    //find user in db
    //check age > the or == to 18;
    //if else
     return new Promise((resolve,reject)=>{
    let user = users.filter((user)=> user.id == id)[0];
        console.log(user);
        if(!user) return  reject("no user found");
        if(user.age >= 18){
            return resolve("eligible for vote");
        } else{
            return reject("not eligible to vote");
        }
    })
    }
(isEligible(1))
.then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.log(err)
})
 console.log("hi")
 console.log("okay")
 
