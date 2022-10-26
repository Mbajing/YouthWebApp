const express = require("express");
const router = express.Router();
const { Income ,Expenditure } = require("../models");


//Income Routers

//get all incpming  money to database
router.get("/income",async (req,res)=>{
    const income =  await Income.findAll()
   
    res.json(income)
})


//sum all income
router.get("/sumIncome",async (req ,res)=>{
    const sumIncome = await Income.sum("Amount")
    res.json(sumIncome)
})


//Add incoming money to database
router.post("/income",async (req,res)=>{
    const income = req.body;
  const newIncome=  await Income.create(income)
    res.json(newIncome)
})

//delete an income
router.delete("/:id",  async (req, res) => {
    const id = req.params.id;
   await Income.destroy({ where: {id: id}})
  
   res.json("deleted succesfully")
      });

//Expenditure

//get all outgoing  money to database
router.get("/expense",async (req,res)=>{
    const expense =  await Expenditure.findAll()
   
    res.json(expense)
})

//sum all expenses
router.get("/sumExpense",async (req ,res)=>{
    const sumExpense = await Expenditure.sum("Amount")
    res.json(sumExpense)
})




//add  outgoing  money to database
router.post("/expense",async (req,res)=>{
    const expense = req.body;
    await Expenditure.create(expense)
    res.json(expense)
})

//delete an expense
router.delete("/:id",  async (req, res) => {
    const id = req.params.id;
   await Expenditure.destroy({ where: {id: id}})
  
   res.json("deleted succesfully")
      });




module.exports = router