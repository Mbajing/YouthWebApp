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
  const newAttendance =  await Attendance.create(attendance)
    res.json(newAttendance)
})

//delete an attendance
router.delete("/:id",  async (req, res) => {
    const id = req.params.id;
   await Attendance.destroy({ where: {id: id}})
  
   res.json("deleted succesfully")
      });

//provide data for dashboard
router.get("/attendanceDashboard" ,async (req ,res)=>{
    const AllAttendance = await Attendance.findAll()
    const MaxAttendance= await Attendance.max("numberPresent")
    const MinAttendance= await Attendance.min("numberPresent")
    const AvgAttendance = await Attendance.findAll({attributes:[[sequelize.fn('AVG',sequelize.col("numberPresent")),"AvgAttendance"]]})
    res.json({MaxAttendance,MinAttendance,AvgAttendance ,AllAttendance})
})

module.exports = router