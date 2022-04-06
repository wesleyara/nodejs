const fs = require("fs");

const arquivo = "arquivo.txt";
const arquivoNovo = "arquivoNovo.txt";

fs.rename(arquivo, arquivoNovo, (err) => {
  if (err) {
    console.log("Erro ao renomear o arquivo");
  } else {
    console.log(`O arquivo ${arquivo} foi renomeado para ${arquivoNovo}`);
  }
});
