const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`;

  comn.query(query, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/");
  });
});

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
