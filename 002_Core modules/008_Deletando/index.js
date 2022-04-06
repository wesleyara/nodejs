const fs = require("fs");

fs.unlink("arquivo.txt", (err) => {
  if (err) {
    console.log("Erro ao deletar o arquivo");
  } else {
    console.log("Arquivo deletado com sucesso");
  }
});
