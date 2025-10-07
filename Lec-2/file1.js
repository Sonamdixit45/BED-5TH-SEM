let file2 = require("./file2");
console.log(file2);

function add(a,b){

    return a+b;
}
function sub(a,b){
    return a-b;
}

module.exports.add = add;
module.exports.sub = sub;