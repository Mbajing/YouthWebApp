import React from 'react'
import Widget from '../../../components/widget/Widget'
import "./dashboard.css"
import axios from 'axios'
import { useEffect,useState } from 'react'
function Dashboard() {
    const [totalOffering , setTotalOffering] = useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/offering/sumOffering").then((response) => {
          setTotalOffering(response.data);
        });
      }, []);
  return (
    <div className='finance-dashboard'>
        <Widget title={"Total Income"} number={3000}/>
        <Widget title={"Offerings"} number={totalOffering}/>
        <Widget title={"Expenses"} number={5000}/>

    </div>
  )
}

export default Dashboard