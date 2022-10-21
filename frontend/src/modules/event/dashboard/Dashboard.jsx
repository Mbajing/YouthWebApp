import React from "react";
import Widget from "../../../components/widget/Widget";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events/").then((response) => {
      setAllEvents(response.data);
    });
  }, []);
  return (
    <div className="Youth-dashboard">
      <Widget title={"Number of Events"} number={allEvents.length} />
     
    </div>
  );
}

export default Dashboard;