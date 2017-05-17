var express = require("express");
var bodyParser = require("body-parser");
// var methodOveride = require("method-overide");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");



app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);




app.listen(PORT, function() {
    console.log("Rocking on port:%s", PORT);
});
