const express = require("express");
const router = express.Router();
const { Youth ,Excos } = require("../models");



//get all youths
router.get("/",async (req,res)=>{
  const youth =  await Youth.findAll()
 
  res.json(youth)
})


//add a youth to database
router.post("/", async (req, res) => {
    const youth = req.body;
    await Youth.create(youth);
    res.json(youth);
  });


  //get all excos
router.get("/exco",async (req,res)=>{
  const excos =  await Excos.findAll({include:Youth})
  
 
  res.json(excos)
})

  //add an exco
  router.post("/exco", async (req, res) => {
    const excos = req.body;
    await Excos.create(excos);
    res.json(excos);
  });


  module.exports = router
