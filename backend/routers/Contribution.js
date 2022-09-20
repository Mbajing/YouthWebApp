const express = require("express");
const router = express.Router();
const { Contribution } = require("../models");

//Contribution Router


//get all  Contributions
router.get("/",async (req,res)=>{
    const contribution =  await Contribution.findAll(contribution)
   
    res.json(contribution)
})


//add a contribution
router.get("/",async (req,res)=>{
    const contribution = req.body;
    await Contribution.create(contribution)
    res.json(contribution)
})

module.exports = router