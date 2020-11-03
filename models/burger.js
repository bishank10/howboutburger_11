var orm = require("../config/orm.js");

var burger = {
    allTrue: function (cb) {
        orm.all("burgers", 0, function (res) {
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