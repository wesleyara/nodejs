const http = require("http");
const url = require("url");

const port = 3000;

http
  .createServer((req, res) => {
    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    if (!name) {
      res.end(
        "<h1>Preencha o seu nome:</h1><form method='GET'><input type='text' name='name'/> <button type'submit'>Enviar</button> </form>",
      );
    } else {
      res.end(`<h1>Hello ${name}</h1>`);
    }
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
