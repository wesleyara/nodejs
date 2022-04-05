const http = require("http");

const port = 3000;

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.write("Hello World");
    res.end();
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
