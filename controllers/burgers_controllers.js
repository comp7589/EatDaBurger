var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

router.get("/burgers",  function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger_data: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(
        req.body.burger_name, 
    function (result) {
        console.log(result);
        res.redirect("/");
       // res.json({ id: result.insertId });
    });
});

router.put("/burgers/:id", function (req, res) {

    burger.update(req.params.id, function(result) {
        // if(result.changedRows == 0) {
        //     return res.status(404).end();
        // } else {
        //     res.status(200).end();
        // }
        console.log(res);
        res.sendStatus(200);
    });
});

//Export 
module.exports = router;