const args = process.argv.slice(2);

console.log(args);

const nome = args[0].split("=")[1];

console.log(`O nome dele é ${nome}`);

// node index.js nome=wesley
