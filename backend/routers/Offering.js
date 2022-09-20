const express = require("express");
const router = express.Router();
const { Offering } = require("../models");

//Offering Router


//get all  Contributions
router.get("/",async (req,res)=>{
    const offering =  await Offering.findAll()
   
    res.json(offering)
})


//add a offering
router.post("/",async (req,res)=>{
    const offering = req.body;
    await Offering.create(offering)
    res.json(offering)
})

module.exports = router