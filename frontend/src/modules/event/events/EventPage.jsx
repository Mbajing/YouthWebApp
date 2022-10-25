import React from "react";
import Amount from "../../../components/amount/Amount";
import ListTable from "../../../components/listTable/ListTable";
import { data } from "../../../constants/columns/data";
import { useState, useEffect } from "react";
import axios from "axios";
import AddButton from "../../../components/button/AddButton";
import AddReviewForm from "../../../components/addReviewForm/AddReviewForm";
import EventsAndNumber from "../../../components/eventsAndNumber/EventsAndNumber";

function EventPage() {
  const { EventsColumns } = data;

  const [visible, setVisible] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [totalEvents, setTotalEvents] = useState("");

  const [eventName, setEventName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [date, setDate] = useState("");
  const [secretaryRemark, setSecretaryRemark] = useState("");
  const [presidentRemark, setPresidentRemark] = useState("");

  const handleClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/events").then((response) => {
      setAllEvents(response.data);
    });

    // axios.get("http://localhost:5000/events/sumEvent").then((response) => {
    //   setTotalEvents(response.data);
    // })
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      eventName,
      attendance,
      Date: date,
      secretaryRemark,
      presidentRemark,
    };
    await axios.post("http://localhost:5000/events", data).then((response) => {
      setAllEvents((prevData)=>{
        return [ response.data,...prevData ]
      });
   console.log(response.data)
      setEventName("");
      setDate("");
      setPresidentRemark("");
      setSecretaryRemark("");
      setAttendance("");
    });
    // console.log(firstname ,lastname, phoneNumber ,location ,occupation)
  };
  return (
    <div className="offering-container">
      <div className="offering-container__upper">
        <EventsAndNumber total={allEvents.length} />

        <AddButton title={"Add Event"} handleClick={handleClick} />
      </div>
      {visible ? (
        <div className="offering-container__form" style={{ marginTop: 40 }}>
          <AddReviewForm
            eventName={eventName}
            date={date}
            attendance={attendance}
            secretaryRemark={secretaryRemark}
            presidentRemark={presidentRemark}
            setEventName={setEventName}
            setAttendance={setAttendance}
            setPresidentRemark={setPresidentRemark}
            setDate={setDate}
            setSecretaryRemark={setSecretaryRemark}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="offering-container__table">
        <ListTable allData={allEvents} columns={EventsColumns} />
      </div>
    </div>
  );
}

export default EventPage;
