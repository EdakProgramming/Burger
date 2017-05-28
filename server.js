// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content from "Public" folder
app.use(express.static(__dirname + "/public"));
// Parse application
app.use(bodyParser.urlencoded({ extended: false }));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Instructions for handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Point to the controller that will display html on page
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.use("/create", routes);
app.use("/update", routes);

app.listen(PORT, function() {
    console.log("Rocking on port:%s", PORT);
});
