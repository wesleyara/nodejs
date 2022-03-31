const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((response) => {
    console.log(
      `A média é ${(parseInt(response.p1) + parseInt(response.p2)) / 2}`,
    );
  })
  .catch((err) => {
    console.log(err);
  });
