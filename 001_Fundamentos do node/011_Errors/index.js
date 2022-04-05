const x = "10";

if (typeof x !== "number") {
  throw new Error("x não é um número");
}

console.log("x é um número");
