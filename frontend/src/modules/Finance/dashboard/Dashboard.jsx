import React from 'react'
import Widget from '../../../components/widget/Widget'
import "./dashboard.css"

function Dashboard() {
  return (
    <div className='finance-dashboard'>
        <Widget title={"Total Income"} number={3000}/>
        <Widget title={"Offerings"} number={5000}/>
        <Widget title={"Expenses"} number={5000}/>

    </div>
  )
}

export default Dashboard