const express = require("express");
const path = require("path");

const users = require("./users");

const app = express();
const port = 3020; // Variável de ambiente

const basePath = path.join(__dirname, "src");

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}! Acess http://localhost:${port}`,
  );
});
