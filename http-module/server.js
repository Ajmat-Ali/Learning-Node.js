const http = require("http");

const server = http.createServer((req, res) => {
  console.log("URL ---> ", req.url);
  console.log("Method ---> ", req.method);

  res.end("You have successfully build your first server");
});
console.log("Hi......");

server.listen(3000, () => {
  console.log("server running on  http://localhost:3000");
});
