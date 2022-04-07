const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

// Operações a serem realizadas
function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar saldo",
          "Depositar",
          "Sacar",
          "Transferir",
          "Sair",
        ],
      },
    ])
    .then((answers) => {
      const action = answers.action;

      if (action === "Criar conta") {
        buildAccount();
      } else if (action === "Consultar saldo") {
        consultBalance();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Transferir") {
        transfer();
      } else if (action === "Sacar") {
        withdraw();
      } else if (action === "Sair") {
        console.log(chalk.green("Obrigado por usar nosso banco!"));
        process.exit();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

operation();

// Criar conta
function buildAccount() {
  console.log(chalk.bgGreen.black("Obrigado por escolher nosso banco!"));
  console.log(chalk.green("Vamos criar sua conta!"));

  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta:",
      },
    ])
    .then((answers) => {
      const accountName = answers.accountName;

      // Verifica se a pasta de dados já existe e cria se não existir
      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      // Verifica se na pasta de dados já existe o dado dessa conta
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed("Conta já existe, tente outro nome."));
        buildAccount();
        return;
      }

      const balance = {
        balance: 0,
      };

      // Cria o arquivo com o nome da conta e o saldo
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(balance),
        (err) => {
          console.log(err);
        },
      );

      // Retorna para o menu
      console.clear();
      console.log(chalk.bgGreen.black("Parabéns, conta criada com sucesso!"));
      operation();
    })
    .catch((error) => console.log(error));
}

// Consultando o saldo
function consultBalance() {
  console.log(chalk.green("Consultando saldo..."));

  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta:",
      },
    ])
    .then((answers) => {
      const accountName = answers.accountName;

      // Verifica se na pasta de dados já existe o dado dessa conta
      if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed("Conta não existe, tente outro nome."));
        consultBalance();
        return;
      }

      // Lê o arquivo com o nome da conta e o saldo
      const balance = fs.readFileSync(`accounts/${accountName}.json`, (err) => {
        console.log(err);
      });

      // Retorna balanço em JSON
      const balanceJson = JSON.parse(balance).balance;

      // Retorna o saldo
      console.clear();
      console.log(chalk.bgGreen.black(`Saldo: R$ ${balanceJson.toFixed(2)}`));
      operation();
    })
    .catch((error) => console.log(error));
}

// Depositar
function deposit() {
  console.log(chalk.green("Depositando..."));

  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta:",
      },
      {
        name: "value",
        message: "Digite o valor a ser depositado:",
      },
    ])
    .then((answers) => {
      const accountName = answers.accountName;
      const value = answers.value;

      // Verifica se na pasta de dados já existe o dado dessa conta
      if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed("Conta não existe, tente outro nome."));
        deposit();
        return;
      }

      // Lê o arquivo com o nome da conta e o saldo
      const balance = fs.readFileSync(`accounts/${accountName}.json`, (err) => {
        console.log(err);
      });

      // Atualiza o saldo
      const newBalance = JSON.parse(balance).balance + parseFloat(value);
      const newBalanceJson = JSON.stringify({ balance: newBalance });

      // Salva o novo saldo
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        newBalanceJson,
        (err) => {
          console.log(err);
        },
      );

      // Retorna para o menu
      console.clear();
      console.log(chalk.bgGreen.black("Depósito realizado com sucesso!"));
      console.log(chalk.bgGreen.black(`Saldo: R$ ${newBalance.toFixed(2)}`));
      operation();
    })
    .catch((error) => console.log(error));
}

// Sacar
function withdraw() {
  console.log(chalk.green("Sacando..."));

  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta:",
      },
      {
        name: "value",
        message: "Digite o valor a ser sacado:",
      },
    ])
    .then((answers) => {
      const accountName = answers.accountName;
      const value = answers.value;

      // Verifica se na pasta de dados já existe o dado dessa conta
      if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed("Conta não existe, tente outro nome."));
        withdraw();
        return;
      }

      // Lê o arquivo com o nome da conta e o saldo
      const balance = fs.readFileSync(`accounts/${accountName}.json`, (err) => {
        console.log(err);
      });

      // Verifica se o saldo é suficiente
      if (JSON.parse(balance).balance < parseFloat(value)) {
        console.log(chalk.bgRed("Saldo insuficiente."));
        withdraw();
        return;
      }

      // Atualiza o saldo
      const newBalance = JSON.parse(balance).balance - parseFloat(value);
      const newBalanceJson = JSON.stringify({ balance: newBalance });

      // Salva o novo saldo
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        newBalanceJson,
        (err) => {
          console.log(err);
        },
      );

      // Retorna para o menu
      console.clear();
      console.log(chalk.bgGreen.black("Saque realizado com sucesso!"));
      console.log(chalk.bgGreen.black(`Saldo: R$ ${newBalance.toFixed(2)}`));
      operation();
    })
    .catch((error) => console.log(error));
}

// Transferir
function transfer() {
  console.log(chalk.green("Transferindo..."));

  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta de origem:",
      },
      {
        name: "value",
        message: "Digite o valor a ser transferido:",
      },
      {
        name: "accountNameDestiny",
        message: "Digite o nome da conta de destino:",
      },
    ])
    .then((answers) => {
      const accountName = answers.accountName;
      const value = answers.value;
      const accountNameDestiny = answers.accountNameDestiny;

      // Verifica se na pasta de dados já existe o dado da conta origem
      if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed("Conta origem não existe, tente outro nome."));
        transfer();
        return;
      }

      // Verifica se na pasta de dados já existe o dado da conta destino
      if (!fs.existsSync(`accounts/${accountNameDestiny}.json`)) {
        console.log(chalk.bgRed("Conta destino não existe, tente outro nome."));
        transfer();
        return;
      }

      // Lê o arquivo com o nome da conta origem e o saldo
      const balance = fs.readFileSync(`accounts/${accountName}.json`, (err) => {
        console.log(err);
      });

      // Verifica se o saldo é suficiente
      if (JSON.parse(balance).balance < parseFloat(value)) {
        console.log(chalk.bgRed("Saldo insuficiente."));
        transfer();
        return;
      }

      // Atualiza o saldo da conta origem
      const newBalance = JSON.parse(balance).balance - parseFloat(value);
      const newBalanceJson = JSON.stringify({ balance: newBalance });

      // Salva o novo saldo da conta origem
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        newBalanceJson,
        (err) => {
          console.log(err);
        },
      );

      // Lê o arquivo com o nome da conta destino e o saldo
      const balanceDestiny = fs.readFileSync(
        `accounts/${accountNameDestiny}.json`,
        (err) => {
          console.log(err);
        },
      );

      // Atualiza o saldo da conta destino
      const newBalanceDestiny =
        JSON.parse(balanceDestiny).balance + parseFloat(value);
      const newBalanceDestinyJson = JSON.stringify({
        balance: newBalanceDestiny,
      });

      // Salva o novo saldo da conta destino
      fs.writeFileSync(
        `accounts/${accountNameDestiny}.json`,
        newBalanceDestinyJson,
        (err) => console.log(err),
      );

      // Logs
      console.clear();
      console.log(
        chalk.bgGreen.black(
          `Transferência de R$ ${value} realizada com sucesso!`,
        ),
      );

      console.log(
        chalk.bgGreen.black(
          `Conta origem: ${accountName} - Saldo atual: ${newBalance}`,
        ),
      );

      console.log(
        chalk.bgGreen.black(`Transferido para ${accountNameDestiny}`),
      );

      operation();
    })
    .catch((error) => console.log(error));
}
