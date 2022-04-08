const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../src");

// Form
router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/add.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
  res.sendFile(`${basePath}/add.html`);
});

// leitura de users
router.get("/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Estamos buscando o usuário ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
