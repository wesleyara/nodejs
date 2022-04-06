const fs = require("fs");

const arquivo = "arquivo.txt";
const novoArquivo = "novoArquivo.txt";

fs.rename(arquivo, novoArquivo, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Arquivo renomeado com sucesso!");
});
