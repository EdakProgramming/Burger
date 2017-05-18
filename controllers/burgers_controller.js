var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// xhr is refrencing jQuery. as in if the call is not coming from jQuery
router.get("/", function(req, res) {
    burger.all(function(data) {
        if (!req.xhr) {
            res.render("burger/index", { burgers: data });
        } else {
            res.render("partials/burger/all", { burgers: data, layout: false });
        };
    });
});

router.post("/", function(req, res) {
    burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }, function(data) {
        res.json(data);
        }
    );
});

router.put("/:id", function(req, res) {
    burger.update(
        { id: req.params.id }, 
        { devoured: req.body.devoured }, 
        function(data) {
            res.json(data);
        }
    );
});

router.delete("/:id", function(req,res) {
    burger.delete(
        {id: req.params.id},
        {devoured: req.body.devoured},
        function(data) {
            res.end();
        }
    );
});
module.exports = router;