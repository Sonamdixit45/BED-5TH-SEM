//accessing dom elemlent
// using id
let res =document.getElementById("mydiv");
console.log(res);

//using class name
 let h2 = document.getElementsByClassName("h2");
console.log(h2)
console.log(h2[0])
 let res2 = document.getElementsByTagName("p")
 console.log(res2);


 // quesryselector
  let out = document.querySelector("mydiv");
  console.log(out)
  let out2 = document.querySelectorAll("p")
  console.log(out2)
  //
// document properties 
//1. accessing element content and change it4
//* innnerHTML

console.log(res.innerHTML);//getter
res.innerHTML = `<p>change using dom manipulation</p> ` 

// *innerText 
console.log(res.innerText)
res.innerText = `hello world` /// setter

//textContent 

console.log(res.getAttribute(id));
//console.log(res.setAttribute("classs","using.js"))
let btn = document.querySelector(".btn")
btn.addEventListener("click",()=>{
    res.setAttribute("class","js")
})













