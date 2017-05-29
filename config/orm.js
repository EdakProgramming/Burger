var connection = require("./connection.js");


var orm = {
    all: function(tableInput, callback) {
        connection.query(
            "SELECT * FROM ??;", [tableInput],
            function(err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    },
    create: function(tableName, obj, callback) {
        var createBurger = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?);";
        connection.query(createBurger, [tableName, obj, 0], function(err, result) {
                if (err) throw err;
                callback(result);
               
            });
    },
    update: function(tableName, id, callback) {
        connection.query(
            "UPDATE ?? SET devoured = 1 WHERE id = ?;", 
            [tableName, id],
            function(err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    }
}; //End of orm object

module.exports = orm;