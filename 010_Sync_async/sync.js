const fs = require("fs");

console.log("Start");

fs.writeFileSync("test.txt", "Hello World");

console.log("End");
