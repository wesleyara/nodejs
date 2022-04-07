const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variável de ambiente

const basePath = path.join(__dirname, "src");

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}! Acess http://localhost:${port}`,
  );
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  // leitura de users
  console.log(`Estamos buscando o usuário ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});
