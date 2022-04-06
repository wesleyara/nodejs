const http = require("http");
const fs = require("fs");

const port = 3000;

http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
