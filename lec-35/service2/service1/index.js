const {createClient} = require("redis");
let publisher = createClient();


async function notifyMe(){
   await subscriber.connect();

  await subscribe.SUBSCRIBE("notify_me","data");

}

notifyMe();


