const express = require("express");
const router = express.Router();
const { Attendance } = require("../models");

//Attendance Router


//get all  attendance
router.get("/",async (req,res)=>{
    const attendance =  await Attendance.findAll()
   
    res.json(attendance)
})


//add a attendance
router.post("/",async (req,res)=>{
    const attendance = req.body;
    await Attendance.create(attendance)
    res.json(attendance)
})

module.exports = router