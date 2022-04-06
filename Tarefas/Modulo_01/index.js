const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual o seu nome?",
    },
    {
      name: "p2",
      message: "Qual a sua idade?",
    },
  ])
  .then((response) => {
    console.log(chalk.black.bgYellow(`${response.p1} tem ${response.p2} anos`));
  })
  .catch((err) => {
    console.log(err);
  });
