const fs = require("fs");

if (!fs.existsSync("./pasta")) {
  console.log("Pasta não existe");
  console.log("Criando pasta");
  fs.mkdirSync("./pasta");
} else {
  console.log("Pasta já existe");
}
