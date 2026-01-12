const fs = require("fs");
const path = require("path");

// --------------------- Read sync, It block the thread, don't use in real project --------------
// const data = fs.readFileSync("./data.txt", "utf-8");
// console.log(data);
// console.log("Hi...");

// --------------------- Read Async, It non-blocking the thread, use in real project --------------
// fs.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error Reading file", err);
//     return;
//   }
//   console.log(data);
// });

// console.log("Hi...");
// ------------------------------------------------------- Write FIle Sync ---------------
// const data = fs.writeFileSync("check.txt", "Some Data will be added", "utf-8");
// console.log("file is written ----> ", data);

// ------------------------------------------------------- append FIle ---------------------
// fs.appendFile("xyz.txt", "Here data will be appended \n", (err) => {
//   if (err) return console.log("Erro appending file", err);
//   console.log("Data appended successfully");
// });

// -------------------------------------------------------  unlink FIle (delete)---------------------
// fs.unlink("check.txt", (err) => {
//   if (err) return console.log(err);
//   console.log("File deleted successfully");
// });

// const x = path.join("/a", "/b");
// console.log(x);

// console.log(process.cwd());
// const p = path.resolve("a", "b");
// console.log(p);

// const r = path.basename("/home/ajmat/project/uploads/photo.png");
// console.log(r);

// const r = path.extname("/home/ajmat/project/uploads/photo");
// console.log(typeof r);

console.log("Start...");
fs.mkdirSync("folder", { recursive: true });
console.log("End...");
