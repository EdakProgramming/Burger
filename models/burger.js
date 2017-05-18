var orm = require("../config/orm.js");

var burger = {
	all: function(callback) {
		orm.all("burgers", callback);
	},
	create: function(burger, callback) {
		orm.create("burgers", burger, callback);
	},
	update: function(condition, burger, callback) {
		orm.update("burgers", condition, burger, callback);
	},
	delete: function(condition, callback) {
		orm.delete("burgers", condition, callback);
	}
};

module.exports = burger;