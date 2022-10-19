import React from 'react'
import Widget from '../../../components/widget/Widget'
import "./dashboard.css"
import axios from 'axios'
import { useEffect,useState } from 'react'
function Dashboard() {
    const [totalOffering , setTotalOffering] = useState("")
    const [totalIncome , setTotalIncome] = useState("")
    const [totalExpense , setTotalExpense] = useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/offering/sumOffering").then((response) => {
          setTotalOffering(response.data);
        });

        axios.get("http://localhost:5000/finance/sumIncome").then((response) => {
          setTotalIncome(response.data);
        });
        axios.get("http://localhost:5000/finance/sumExpense").then((response) => {
          setTotalExpense(response.data);
        });
      }, []);
  return (
    <div className='finance-dashboard'>
        <Widget title={"Total Income"} number={totalIncome}/>
        <Widget title={"Offerings"} number={totalOffering}/>
        <Widget title={"Expenses"} number={totalExpense}/>

    </div>
  )
}

export default Dashboard