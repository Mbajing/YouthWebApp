import React from 'react'
import { useState } from "react";
import axios from "axios";

function AddAttendanceForm({setAllAttendance}) {
    const [numberPresent, setNumberPresent] = useState("");
    const [date, setDate] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { numberPresent, Date: date };
        await axios
          .post("http://localhost:5000/attendance/", data)
          .then((response) => {
            setAllAttendance((prevData)=>{
              return [ response.data,...prevData ]
            });
    
            console.log(response.data);
            setNumberPresent("");
            setDate("");
          });
      };
  return (
    <form className="AddOffering" onSubmit={handleSubmit}>
      <div className="AddOffering__input">
        <label>Number Present:</label>
        <input
          type="number"
          placeholder="Attendance"
          value={numberPresent}
          onChange={(e) => setNumberPresent(e.target.value)}
        />
      </div>
      <div className="AddOffering__input">
        <label>Date:</label>
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="AddOffering__button AddOffering__input">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default AddAttendanceForm