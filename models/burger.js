var orm = require("../config/orm.js");

var burger = {
    allTrue : function(cb){
        orm.all("burgers", 0, function(res){
            cb(res);
        })
    },

    create : function()(
        orm.create
    )


}













module.exports= burger;