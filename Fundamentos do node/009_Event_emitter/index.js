const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("durante", () => {
  console.log("Durante");
});

console.log("Antes");
emitter.emit("durante");
console.log("Depois");
