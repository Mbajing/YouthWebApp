const express = require("express");
const router = express.Router();
const { Attendance, sequelize ,Sequelize } = require("../models");

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


//provide data for dashboard
router.get("/attendanceDashboard" ,async (req ,res)=>{
    const MaxAttendance= await Attendance.max("numberPresent")
    const MinAttendance= await Attendance.min("numberPresent")
    const AvgAttendance = await Attendance.findAll({attributes:[[sequelize.fn('AVG',sequelize.col("numberPresent")),"AvgAttendance"]]})
    res.json({MaxAttendance,MinAttendance,AvgAttendance})
})

module.exports = router