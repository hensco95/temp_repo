const http = require("http");

const server = http.createServer((req, res) => {
  // req- incoming request from client
  // res - what we're sending back to the client

  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
  } else {
    res.end(
      `
    <h1>You seem lost</h1>
    <p>Luckily we can help you find your way</p>
    <a href="/">Go Home</a>
    `
    );
  }
});

server.listen(2023);
