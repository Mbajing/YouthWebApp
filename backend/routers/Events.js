const express = require("express");
const router = express.Router();
const { Events } = require("../models");


//Events Router

//get all succesful events
router.get("/",async (req,res)=>{
    const event =  await Events.findAll()
   
    res.json(event)
})

//delete an event
router.delete("/:id",async (req,res)=>{
    const id = req.params.id;
    await Events.destroy({ where: {id: id}})
   
    res.json("deleted succesfully")
})


//add succesful events   database
router.post("/",async (req,res)=>{
    const event = req.body;
    await Events.create(event)
    res.json(event)
})









module.exports = router