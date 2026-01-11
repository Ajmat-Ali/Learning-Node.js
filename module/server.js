const { add, sub } = require("./math");
const logger = require("./logger");

logger();
console.log(add(5, 8));
console.log(sub(20, 8));
