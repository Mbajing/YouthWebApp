import React from 'react'
import Widget from '../../../components/widget/Widget'
import "./dashboard.css"
import { useState ,useEffect } from 'react' 
import axios from 'axios'

function Dashboard() {
  const [allYouths ,setAllYouths]= useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/youth/").then((response) => {
      setAllYouths(response.data);
      
    });
  }, []);
  return (
    <div className='Youth-dashboard'>
     <Widget title={"Number of Youths"} number={allYouths.length}/> 
     <Widget title={"Number  Registered "} number={25}/> 
     <Widget title={"Number of Excos"} number={5}/> 

    </div>
  )
}

export default Dashboard