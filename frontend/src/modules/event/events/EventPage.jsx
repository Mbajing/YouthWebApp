import React from 'react'
import Amount from '../../../components/amount/Amount'
import ListTable from '../../../components/listTable/ListTable'
import {data } from "../../../constants/columns/data"
import { useState ,useEffect } from 'react'
import axios from 'axios'
import AddButton from '../../../components/button/AddButton'




function EventPage() {

   const { EventsColumns }=data

  const [visible, setVisible] = useState(false);
  const [allEvents, setAllEvents] = useState([])
  const [totalEvents , setTotalEvents] = useState("")

  const [eventName ,setEventName] =useState("")
  const [attendance ,setAttendance] =useState("")
  const [date ,setDate] =useState("")
  const [secretaryRemark ,setSecretaryRemark] =useState("")
  const [presidentRemark ,setPresidentRemark] =useState("")

  const handleClick = () => {
    setVisible(!visible);
  }

  
  useEffect(() => {
    axios.get("http://localhost:5000/events").then((response) => {
      setAllEvents(response.data);
    });

    // axios.get("http://localhost:5000/events/sumEvent").then((response) => {
    //   setTotalEvents(response.data);
    // })
  }, []);

  return (
    <div className='offering-container'>
    <div className='offering-container__upper'>
        <Amount  number={totalEvents}/>
       
        <AddButton title={"Add Event"} handleClick={handleClick}/>
    </div>
 {visible ?  <div className="offering-container__form" >
      
    </div>:<></>}  
    <div className='offering-container__table'>
       <ListTable allData={allEvents} columns={EventsColumns}/>
    </div>

</div>
  )
}

export default EventPage