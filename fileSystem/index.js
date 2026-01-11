const fs = require("fs");

// --------------------- Read sync, It block the thread, don't use in real project --------------
// const data = fs.readFileSync("./data.txt", "utf-8");
// console.log(data);
// console.log("Hi...");

// --------------------- Read Async, It non-blocking the thread, use in real project --------------
fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error Reading file", err);
    return;
  }
  console.log(data);
});

console.log("Hi...");
