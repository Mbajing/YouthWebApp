const express = require("express");
const router = express.Router();
const { Offering } = require("../models");

//Offering Router


//get all  offerings
router.get("/",async (req,res)=>{
    const offering =  await Offering.findAll()
   
    res.json(offering)
})


//add a offering
router.post("/",async (req,res)=>{
    const offering = req.body;
    await Offering.create(offering)
    const allOffering =  await Offering.findAll()
    res.json(offering)
})

//sum all offerings
router.get("/sumOffering",async (req,res)=>{
 const sumOffering =   await Offering.sum("Amount")
       res.json(sumOffering)
    
})

//delete an offering
router.delete("/:id",  async (req, res) => {
    const id = req.params.id;
   await Offering.destroy({ where: {id: id}})
  
   res.json("deleted succesfully")
      });

module.exports = router