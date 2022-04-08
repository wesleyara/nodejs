const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../src");

router.get("/", (req, res) => {
  res.sendFile(`${basePath}/sobre.html`);
});

module.exports = router;
