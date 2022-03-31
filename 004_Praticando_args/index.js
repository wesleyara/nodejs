const minimist = require("minimist");
const soma = require("./soma");

// externo
const args = minimist(process.argv.slice(2));

//interno
soma(args._[0], args._[1]);
