var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, devoured ,cb) {
      connection.query("SELECT * FROM ?? WHERE DEVOURED = ? ",[tableInput,devoured] ,function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },


    create :function(tableName, colName, colval,cb){
        connection.query("INSERT INTO ?(?)VALUE(?);",[tableName,colName,colVal], function(err,result){
            if(err) {throw err};
            cb(result);
        })
    },

    update : function(){

    }
    

  };

  module.exports = orm;