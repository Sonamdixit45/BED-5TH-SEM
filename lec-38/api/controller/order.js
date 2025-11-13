const OrderBook = require("../service/orderbook");
const ob = new OrderBook("BTCUSD");

module.exports.postPlaceOrder = async(req, res) => {

    //user,quantity,type,price,side,symbol
    let {type,price,side,quantity,username} = req.body;
    //basic validation
    if(!type || !price || !side || !quantity || !username){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        });
    }

    let response =ob.placeOrder(price,quantity,type,side,username);
    await publisher.connect();
    await publisher.publish("book:update",JSON.stringify(response));
//     //console.log(response);
//     return res.json({
//         success:true,
//         data:response
//     });
 }