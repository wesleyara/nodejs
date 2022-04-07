const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variável de ambiente

const basePath = path.join(__dirname, "src");

const checkAuth = (req, res, next) => {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Autenticado");
    next();
  } else {
    console.log("Não autenticado");
    next();
  }
};

app.use(checkAuth);

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}! Acess http://localhost:${port}`,
  );
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});
