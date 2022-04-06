const path = require("path");

//path absoluto
console.log(path.resolve("arquivo.txt"));

//formar path
const folder = "relatorio";
const arquivo = "arquivo.txt";

const finalPath = path.join(__dirname, folder, arquivo);

console.log(finalPath);
