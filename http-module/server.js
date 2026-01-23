// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("URL :", req.url);
//   const url = req.url.split("?")[1].split("&");
//   let urlObj = {};
//   for (let key in url) {
//     let [uKey, uVal] = url[key].split("=");
//     urlObj[uKey] = uVal;
//   }
//   console.log("Url 2--->", url);
//   console.log("Url 3--->", urlObj);

//   res.end("You have successfully build your first server");
// });
// console.log("Hi......");

// server.listen(3000, () => {
//   console.log("server running on  http://localhost:3000");
// });

// --------------------------------------- Query Params extracting with built-in node class (Global Class)  ---------------------
const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url.pathname);
  console.log(url.searchParams.get("category"));
  console.log(url.searchParams.get("price"));

  res.end("You have successfully build your first server");
});
console.log("Hi......");

server.listen(3000, () => {
  console.log("server running on  http://localhost:3000");
});
