const chalk = require("chalk");
const inquirer = require("inquirer");

function isDivisor(x, y) {
  if (y % x == 0) {
    console.log(chalk.green(`${x} é divisor de ${y}`));
  } else {
    console.log(chalk.red(`${x} não é divisor de ${y}`));
  }
}

inquirer
  .prompt([
    {
      name: "x",
      message: "Digite um número:",
      type: "number",
    },
    {
      name: "y",
      message: "Digite outro número:",
      type: "number",
    },
  ])
  .then((response) => {
    isDivisor(response.x, response.y);
  })
  .catch((err) => {
    console.log(err);
  });
