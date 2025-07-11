
let products = [
    {
        name:"samsung",
        amount:70000,
        quantity:10
    },
        {
        name:"Iphone 16",
        amount:10000,
        quantity:1
    }
];
let account_balance=200000;
function buyProduct (product_name) {
    return new Promise((resolve,reject)=>{
        let isproduct = null;
    for (let i = 0; i < products.length; i++) {
        if(products[i].name == product_name){
            isproduct = products[i];
        }
    }
    if(!isproduct){
        reject("product is not available")
    } else {
        resolve(isproduct.amount)
    }
    })
}

buyProduct("samsung").then((data)=>{
    deductAmount(data).then((data)=>{
        console.log(data)
        console.log(account_balance);
    })
})
.catch((err)=>{
    console.log(err);
})


function deductAmount(amount){
    return new Promise((resolve,reject)=>{
    if(account_balance < amount){
       return reject("your account balance is low")
    }else {
         account_balance = account_balance-amount;
         return resolve("product purchased")
    }
    })
}

 async function myFun(){
    try{
    let amount = await buyProduct("samsumg")
    let message = await deductAmount(ammount)
    console.log(message)
    console.log(amount)
}catch(error){
    console.log(error)
}

}
console.log(myFun());
console.log("Start");
console.log("end");
