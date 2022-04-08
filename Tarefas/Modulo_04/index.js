const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const router = require("./routes");

const basePath = path.join(__dirname, "src");

app.use(express.static("public"));

app.use("/sobre", router);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use((req, res) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(
    `Server running on port ${port}. Acess it at http://localhost:${port}`,
  );
});
