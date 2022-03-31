const chalk = require("chalk");

const nota = 6;

if (nota >= 7) {
  console.log(chalk.green("Parabéns, você foi aprovado"));
} else {
  console.log(chalk.red("Sinto muito, você foi reprovado"));
}

// Chalk altera as cores do console
