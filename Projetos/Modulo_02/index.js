const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 3000;

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = q.pathname.substring(1);
    const name = q.query.name;

    if (!name) {
      if (fileName.includes("html")) {
        if (fs.existsSync(fileName)) {
          fs.readFile(fileName, (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          });
        } else {
          fs.readFile("404.html", (err, data) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          });
        }
      }
    } else {
      const newLine = name + ",\r\n";
      fs.appendFile("arquivo.txt", newLine, () => {
        res.writeHead(302, { Location: "/index.html" });
        return res.end();
      });
    }
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
