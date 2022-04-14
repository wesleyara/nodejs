const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

const comn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

comn.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }

  console.log("Connection established");

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});
