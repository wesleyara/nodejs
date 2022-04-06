const fs = require("fs");

fs.stat("novoarquivo.txt", (err, stats) => {
  if (err) {
    console.log("Erro ao ler o arquivo");
  } else {
    console.log(stats.isSymbolicLink());
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.ctime);
    console.log(stats.size);
  }
});
