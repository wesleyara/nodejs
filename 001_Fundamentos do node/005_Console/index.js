console.log("Hello World");

// Inicia um contador (for)
console.count("Contando");
console.count("Contando");
console.count("Contando");

// Limpa o console
setTimeout(() => {
  console.clear();
}, 2000);

// Mostra um error
setTimeout(() => {
  console.error("O console foi limpado");
}, 3000);
