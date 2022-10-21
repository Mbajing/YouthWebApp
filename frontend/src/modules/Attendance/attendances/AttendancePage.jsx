import React from 'react'
import ListTable from '../../../components/listTable/ListTable'
import {data } from "../../../constants/columns/data"
import { useState ,useEffect } from 'react'
import axios from 'axios'
import AddButton from '../../../components/button/AddButton'


function AttendancePage() {
    const { AttendanceColumns }=data
    const [visible, setVisible] = useState(false);

    const [numberPresent ,setNumberPresent] =useState("")
  const [date ,setDate] =useState("")
  const [allAttendance, setAllAttendance] = useState([])


  const handleClick = () => {
    setVisible(!visible);
  }

  
  useEffect(() => {
    axios.get("http://localhost:5000/attendance").then((response) => {
      setAllAttendance(response.data);
    });
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data = { numberPresent,  Date:date };
    await axios.post("http://localhost:5000/attendance", data).then((response) => {
      setAllAttendance(response.data);

     
      setNumberPresent("");
      setDate("");
      
     
    });
}
  return (
    <div className='offering-container'>
    <div className='offering-container__upper'>
        
       
        <AddButton title={"Add Event"} handleClick={handleClick}/>
    </div>
 {visible ?  <div className="offering-container__form" style={{marginTop:40}} >
    
    </div>:<></>}  
    <div className='offering-container__table'>
       <ListTable allData={allAttendance} columns={AttendanceColumns}/>
    </div>

</div>
  )
}

export default AttendancePage