const express = require("express");
const path = require("path");

const users = require("./users");

const app = express();
const port = 3020; // Variável de ambiente

// Diretório de arquivos html
const basePath = path.join(__dirname, "src");

// Transformando em json para usar o req.body
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// Importando toda rota
app.use("/users", users);

// Adicionando arquivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use((req, res) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

// Porta que o servidor vai rodar
app.listen(port, () => {
  console.log(
    `Server is running on port ${port}! Acess http://localhost:${port}`,
  );
});
