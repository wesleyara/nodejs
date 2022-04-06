const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 3000;

http
  .createServer((req, res) => {
    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name;

    if (!name) {
      fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.writeFile("arquivo.txt", name, () => {
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    }
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
