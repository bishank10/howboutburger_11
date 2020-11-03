// this file here controls the query request and passes it to ORM files

var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        })
    },

    create: function (colVal, cb) {
        orm.create("burgers", "burger_name", colVal, function (res) {
            cb(res);
        })
    },

    update: function (id, cb) {
        orm.update("burgers",id, 1, function (res) {
            cb(res);
        })
    }


};


module.exports = burger;