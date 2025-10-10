// const { useId } = require("react");
const {PrismaClient} = require("./generated/prisma");
let prisma = new PrismaClient();


//  async function addUser(email,name){
//     //User user = new User("","");
//     //user.save();
//     const newUser = await prisma.user.create({
//         data:{
//             email:email,
//             name:name
//         }
//     })
//     return "User added"

// }
// addUser("sonam2454.be23@gmail.com","Sonam")
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e))


//clients respective classes of class(methods)



//  async function getUser(email){
//     let user = await prisma.user.findUnique({
//         where:{
//             email:email
//         }
//     })
//     return user
// }

// getUser("sonam2454.be23@gmail.com")
// .then((data)=>console.log(data))
// console.log("hi")

// async function updateUser(email){
//     const updateUser = await prisma.user.update({
//       where:{
//         email:email,
//       },
//       data:{
//         name:'Sonam Dixit',
//       },
//     })
//     return updateUser
// }
// updateUser("sonam2454.be23@gmail.com")
// .then((data)=>console.log(data))


async function deleteUser(email){
    const deleteUser = await prisma.user.delete({
        where:{
        email:email,
      },
    })
    return deleteUser
}
// deleteUser("sonam2454.be23@gmail.com")
// .then((data)=>console.log(data))


async function addTweet(userId,body){
    try{
    let newTweet = await prisma.tweet.create({
        data:{
            userId:Number(userId),
            body:body
        }
    })
return newTweet;
}
catch(error){
        throw new Error(error.message)
    }
}
// addTweet("4","hello guys mai hoon aap sbki sonam,kal milte hai dubara se..see you byyy")
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e))


async function updateTweet(id,userId,updatedBody){
    let tweet=await prisma.tweet.findFirst({
        where:{
            id:Number(id),
            userId:Number(userId)
        }
    })
    if(!tweet){
        return "something went wrong"
    }
    await prisma.tweet.update({
        where:{
            id:Number(id)
        },
        data:{
            body:updatedBody
        }
    })
    return "tweet updated"
}
// updateTweet("7","4","updated my tweet")
// .then((data)=>console.log(data))

async function deleteTweet(id) {
    await prisma.user.delete({
        where:{
            id:Number(id)
        }
    })
    return "user deleted"
}
deleteUser("7")
.then((data)=>console.log(data))



async function readTweets(){
    //read all tweets
    let allTweets = await prisma.tweet.findMany({})
     return allTweets;
   
}
readTweets()
.then((data)=>console.log(data))
.catch((e)=>console.log(e))

