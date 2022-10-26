import React from "react";
import ListTable from "../../../components/listTable/ListTable";
import { data } from "../../../constants/columns/data";
import { useState, useEffect } from "react";
import axios from "axios";
import AddButton from "../../../components/button/AddButton";
import AddAttendanceForm from "../addAttendanceForm/AddAttendanceForm";

function AttendancePage() {
  const { AttendanceColumns } = data;
  const [visible, setVisible] = useState(false);

  const [numberPresent, setNumberPresent] = useState("");
  const [date, setDate] = useState("");
  const [allAttendance, setAllAttendance] = useState([]);

  const handleClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/attendance").then((response) => {
      setAllAttendance(response.data);
    });
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = { numberPresent, Date: date };
  //   await axios
  //     .post("http://localhost:5000/attendance", data)
  //     .then((response) => {
  //       setAllAttendance((prevData)=>{
  //         return [ response.data,...prevData ]
  //       });

  //       setNumberPresent("");
  //       setDate("");
  //     });
  // };
  return (
    <div className="offering-container">
      <div style={{ display: "flex", marginBottom: 40, paddingLeft: 15 }}>
        <AddButton title={"Add Attendance"} handleClick={handleClick} />
      </div>
      {visible ? (
        <div
          className="offering-container__form"
          style={{ marginTop: 40 }}
        >
          <AddAttendanceForm setAllAttendance={setAllAttendance}/>
        </div>
      ) : (
        <></>
      )}
      <div className="offering-container__table">
        <ListTable allData={allAttendance} columns={AttendanceColumns} />
      </div>
    </div>
  );
}

export default AttendancePage;
