var connection = require("./connection.js");

// I borrowed this function from the solution in hopes of being able to get it to work, but I still get errors in the VALUES part of the queries. Will ask instructor for a solution
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}



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
    create: function(tableName, obj, values, callback) {
        var queryString = "INSERT INTO " + tableName;
            queryString += " (";
            queryString += obj.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(values.length);
            queryString += ");";
        connection.query(queryString, function(err, result) {
                if (err) throw err;
                callback(result);
                console.log(result);
            });
    },
    update: function(tableName, condition, obj, callback) {
        connection.query(
            "UPDATE ?? SET ? WHERE ?;", 
            [tableName, obj, condition],
            function(err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    }
}; //End of orm object

module.exports = orm;