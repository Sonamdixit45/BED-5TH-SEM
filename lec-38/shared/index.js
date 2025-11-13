const { createClient } = require("redis");

const publisher = createClient();
const subscriber = createClient();

publisher
  .connect()
  .then(() => console.log("Publisher connected to Redis"))
  .catch((err) => console.error("Publisher connection error:", err));

subscriber
  .connect()
  .then(() => console.log("Subscriber connected to Redis"))
  .catch((err) => console.error("Subscriber connection error:", err));

module.exports = {
  publisher,
  subscriber,
};
