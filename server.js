
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// Imported routes and gave the server access to them.
var routes = require("./controllers/burgers_controller.js");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
})