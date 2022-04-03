const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World</h1>");
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
