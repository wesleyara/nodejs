const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variável de ambiente

const basePath = path.join(__dirname, "src");

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

// Form
app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/add.html`);
});

app.post("/users/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
  res.sendFile(`${basePath}/add.html`);
});

// leitura de users
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Estamos buscando o usuário ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}! Acess http://localhost:${port}`,
  );
});
