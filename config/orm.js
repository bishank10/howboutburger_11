var connection = require("../config/connection.js");

var orm = {
  all: function (tableInput, cb) {
    connection.query("SELECT * FROM ??; ", [tableInput], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  create: function (tableName, colName, colVal, cb) {
    connection.query("INSERT INTO ??(??) VALUES (?);", [tableName, colName, colVal], function (err, result) {
      if (err) {
        throw err
      };
      cb(result);
    })
  },

  update: function (table, idToUpdate, val, cb) {
    connection.query("UPDATE ?? SET devoured = ? WHERE id = ?;", [table, val, idToUpdate], function (err, result) {
      if (err) {
        throw err
      }
      cb(result);
    })
  }


};

module.exports = orm;