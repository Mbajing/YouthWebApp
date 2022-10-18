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
    const allYouths = await Youth.findAll()
    res.json(allYouths);
  });

//delete a youth
router.delete("/:id",  async (req, res) => {
  const id = req.params.id;
 await Youth.destroy({ where: {id: id}})

 res.json("deleted succesfully")
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
