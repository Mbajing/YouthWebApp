const express = require("express");
const router = express.Router();
const { Events } = require("../models");


//Events Router

//get all succesful events
router.get("/",async (req,res)=>{
    const event =  await Events.findAll()
   
    res.json(event)
})



//add succesful events
router.post("/",async (req,res)=>{
    const event = req.body;
    await Events.create(event)
    res.json(event)
})









module.exports = router