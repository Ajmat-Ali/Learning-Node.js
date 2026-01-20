// Hello Ajmat, you are 21 years old.

// const name = process.argv[2];
// const age = process.argv[3];

// if (!name || !age) {
//   console.log("Please provide name and age");
//   process.exit();
// }

// console.log(`Hello ${name}, you are ${age} years old`);

// require("dotenv").config();
require("dotenv").config({ quiet: true });

console.log(process.env.DB_PASSWORD);
console.log(process.env.PORT);
console.log(process.env.NAME);
