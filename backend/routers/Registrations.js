const express = require("express");
const router = express.Router();
const { Registrations ,Youth } = require("../models");


//Registrations Router


//get all  Contributions
router.get("/",async (req,res)=>{
    const registration =  await Registrations.findAll({include:Youth})
   
    res.json(registration)
})


//add a registration
router.post("/",async (req,res)=>{
    const registration = req.body;
    await Registrations.create(registration)
    res.json(registration)
})

module.exports = router