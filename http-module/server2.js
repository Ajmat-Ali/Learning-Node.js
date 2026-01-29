const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/profile") {
    res.end("Profile Data ia Here");
  }
  if (req.url === "/userData") {
    res.write("<h1>Hello world!</h1>");
  }
  res.end();
});

server.listen(3001, (err) => {
  console.log("server is running: http://localhost:3001");
});
