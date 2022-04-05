const fs = require("fs");

console.log("Start");

fs.writeFile("test.txt", "Hello World", () => {
  console.log("File written successfully");
});

console.log("End");
