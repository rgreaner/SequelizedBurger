var db = require("../models");
var express = require("express");
var app = express();

module.exports = function (app) {
    app.get("/api/burgers", function (req, res) {
        db.burger.findAll({}).then(function (dbburger) {
            console.log("why", dbburger);
            res.json(dbburger);
        });
       
    });

    app.post("/api/burgers", function (req, res) {
        db.burger.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (dbburger) {
            res.json(dbburger);
        });
    });
    app.put("/api/burgers", function(req, res) {
        db.burger.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }})
            .then(function(dbburger){
                res.json(dbburger)
            })
            .catch(function(DBerr) {
                console.log("Got an error from the DB:", DBerr);
            })
    });
}