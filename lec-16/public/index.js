// function getCommentData(){
// axios.get("https://jsonplaceholder.typicode.com/comments")
// .then((res)=>{
//     console.log(res.data)
// })
// }

// getCommentData();



// using try and catch converted into async and await

async function getCommentData() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
    console.log(res.data);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

getCommentData(); 



function addUser(email,password){
    axios.post('/user', {
    email: email,
    password: password
  })
  .then((res)=>{
        console.log(res.data)
  }) 
  .catch((err)=>{
    console.log(err.message)

  })

}
addUser("sonam!23@gmail.com","1234")

