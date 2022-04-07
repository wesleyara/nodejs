const express = require("express");
const path = require("path");

const app = express();
const port = 3000; // Variável de ambiente

const basePath = path.join(__dirname, "src");

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}! Acess http://localhost:${port}`,
  );
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});
