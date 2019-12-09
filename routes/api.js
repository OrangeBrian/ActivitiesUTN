const express = require("express");
const router = express.Router();

const Activity = require ("../models/Activities");

//Get a list of the Activities

router.get("/activities", function(req,res){
    Activity.find({}).sort({date: -1}).then(function (activities){
        res.send(activities);
    })
});

//Add a new Activity

router.post("/activities", function(req,res){
    const datePost = new Date()
    const postData = {
        creator: req.body.creator,
        text: req.body.text,
        date: datePost
    }
    Activity.create(postData).then(function (activities) {
        res.send(activities);
    })
});

module.exports = router;