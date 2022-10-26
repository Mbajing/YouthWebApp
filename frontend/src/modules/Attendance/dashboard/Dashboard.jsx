import React from 'react'
import Widget from '../../../components/widget/Widget'
import { useState ,useEffect } from 'react'
import axios from 'axios'



function Dashboard() {
    const [allAttendance, setAllAttendance] = useState([]);
    const [allData, setAllData] = useState({});

    useEffect(() => {
    
      axios.get("http://localhost:5000/attendance/attendanceDashboard").then((response) => {
        setAllData(response.data);
      });
    }, []);

    
  return (
    <div className="Youth-dashboard">
    <Widget title={"Number of Meetings"} number={allData.AllAttendance ? allData.AllAttendance.length :1} />
    <Widget title={"Highest Attendance "} number={allData.MaxAttendance} />
    <Widget title={"Lowest Attendance"} number={allData.MinAttendance} />
    <Widget title={"Average Attendance"} number={allData.AvgAttendance ?Math.ceil(allData.AvgAttendance[0].AvgAttendance): 1}/>
  </div>
  )
}

export default Dashboard