const express = require("express");
const router = express.Router();
const { Income ,Expenditure } = require("../models");


//Income Routers

//get all incpming  money to database
router.get("/income",async (req,res)=>{
    const income =  await Income.findAll()
   
    res.json(income)
})


//Add incoming money to database
router.post("/income",async (req,res)=>{
    const income = req.body;
    await Income.create(income)
    res.json(income)
})

//Expenditure

//get all outgoing  money to database
router.get("/expense",async (req,res)=>{
    const expense =  await Expenditure.findAll()
   
    res.json(expense)
})


//add  outgoing  money to database
router.post("/expense",async (req,res)=>{
    const expense = req.body;
    await Expenditure.create(expense)
    res.json(expense)
})




module.exports = router