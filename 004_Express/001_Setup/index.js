const express = require("express");

const app = express();
const port = 3000; // Variável de ambiente

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}! Acess http://localhost:${port}`,
  );
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.end();
});
