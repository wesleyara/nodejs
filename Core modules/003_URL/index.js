const url = require("url");

const address = "http://localhost:3000/hello?name=John";

const parseURL = new url.URL(address);

console.log(parseURL.host);
console.log(parseURL.pathname);
console.log(parseURL.search);
console.log(parseURL.searchParams);
console.log(parseURL.searchParams.get("name"));
