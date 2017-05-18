var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 3000;

// Point to the controller that will display html on page
var routes = require("./controllers/burgers_controller.js");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

// Review what methodOverride does
app.use(methodOverride("_method"));

app.use("/public", express.static("public"));
app.use("/burger", routes);


app.listen(PORT, function() {
    console.log("Rocking on port:%s", PORT);
});
