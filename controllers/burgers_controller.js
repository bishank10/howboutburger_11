var express = require("express");
var router = express.Router();
var mysql = require("mysql");
const burger = require("../models/burger.js");


// import burger.js file 
var cat = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data){
      var burgersObj = {
        burgers : data
      }
      console.log(burgersObj);
      res.render("index", burgersObj)
    })
  });





  module.exports = router;