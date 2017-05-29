var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// This callback will redirect any requests with "/" to "/burgers"
router.get("/", function(req, res) {
   res.redirect("/burgers");
});


router.get("/burgers", function(req, res) {
    burger.all(function (burgerData) {
        res.render("index", {burger_data: burgerData});
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.redirect("/");
    });
});

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.id, function(data) {
        res.redirect("/");
    });
});


module.exports = router;                     