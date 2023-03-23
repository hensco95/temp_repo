const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome home boy")
  } else if (req.url === "/about") {
    res.end(`Here's what we do`)
  } else { 
    res.end(`<a href="/">Go back home</a>`);
  } 
});

server.listen(2023);