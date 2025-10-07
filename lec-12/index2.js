let  btn1 = document.getElementById("check");
let btn2 = document.getElementById("cross");
/* parent */

console.log(btn1.nextElementSibling);
console.log(btn2.previousElementSibling);
console.log(btn1.nextElementSibling.nextElementSibling);
console.log(btn1.parentElement.previousElementSibling);


///how to insert a new elemnt in dom