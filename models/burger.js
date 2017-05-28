var orm = require("../config/orm.js");

var burger = {
	all: function(callback) {
		orm.all("burgers", function(result) {
			callback(result);
		});
	},
	create: function(burger, callback) {
		orm.create("burgers", 
			["burger_name", "devoured"],
		 	[burger, false ],
		 	callback);
	},
	update: function(id, callback) {
		var condition = "id=" + id;
		orm.update("burgers",
			{devoured: true},
			condition, callback);
	}
};

module.exports = burger;