const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
require("dotenv").config();
const morgan = require("morgan");
const {Offering}= require("./models")

const app = express();

const port =  5000;

app.use(express.json());
const db=require('./models');


//Youths Router
const youthRouter = require('./routers/Youth');


app.use("/youth",youthRouter)


app.post("/offering" , async (req,res)=>{
  const offering = req.body;
  await Offering.create(offering);
  res.json(offering);
})


db.sequelize.sync().then(()=>{
  app.listen(port, () => console.log(`listen on port ${port}`));
})





// //get all youths
// app.get("/youths", (req, res) => {
//   db.query("SELECT * FROM youths", (err, result) => {
//     if (!err) {
//       res.send(result);
//     } else {
//       console.log(err);
//     }
//   });
// });



// const db = mysql.createPool({
//   host: process.env.DB_Host,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB,
// });

// app.post("/youths",(req,res)=>{
//     const insertQuery= "INSERT INTO youths SET ?";
//   db.query(insertQuery ,req.body ,(err ,result)=>{
//     if(err){
//       console.log(err)
//        }   else{
//                  res.send("Review added to data base")
//       }
//     })
// })

// //delete youth record from database
// app.delete('/youths/:id',(req,res)=>{
//   const deleteQuery = "DELETE FROM youths WHERE youthid = ?";
//   db.query(deleteQuery ,[req.params.id],(err ,result)=>{
//      if(err){
//       console.log(err)
//      }
//      else{
//       res.send(result)
//      }
//   })
// })


// //update youth record from database
// app.put('/youths',(req ,res)=>{
//   const updateQuery = "UPDATE youths SET firstName = ? , lastName = ?  WHERE  youthid = ? "
//   db.query(updateQuery ,[req.body.firstName , req.body.lastName, req.body.youthid ], (err ,result)=>{
//    if(err){
//     console.log(err)
//    } 
//    else{
//     res.send(result)
//    }
//   })


// })

