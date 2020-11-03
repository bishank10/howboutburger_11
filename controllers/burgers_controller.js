const { response } = require("express");
var express = require("express");
var router = express.Router();
var mysql = require("mysql");
const burger = require("../models/burger.js");

// import burger.js file 
var cat = require("../models/burger.js");

// gets all the matching value from
router.get("/", function (req, res) {
  burger.allTrue(function (data) {
    var burgersObj = {
      burgers: data
    }
    console.log(burgersObj);
    res.render("index", burgersObj)
  })
});

// route to create an order
router.post("/api/burgers", function (req, res) {
  burger.create(req.body.order, function (result) {
    res.json({ id: result.insertId });
  })
});

//route to update devoured value
router.put("/api/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    if(result.changedRows === 0){
      return res.status(404).end()
    }
    res.status(200).end()
  })
});






module.exports = router;