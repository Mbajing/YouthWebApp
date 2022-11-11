import React from "react";
import "./addYouthForm.css";
import { useState } from "react";
import axios from "axios";

function AddYouthForm({ setAllYouths, allYouths }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { firstname, lastname, phoneNumber, location, occupation };
    await axios.post("http://localhost:5000/youth/", data).then((response) => {
      setAllYouths((prevData)=>{
        return [ ...prevData,response.data ]
      });

     
      setFirstname("");
      setLastname("");
      setPhoneNumber("");
      setLocation("");
      setOccupation("");
    });
    // console.log(firstname ,lastname, phoneNumber ,location ,occupation)
  };

  return (
    <div>
      <form className="AddYouth" onSubmit={handleSubmit}>
        <div className="AddYouth__input">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="AddYouth__input">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="AddYouth__input">
          <label>Contact:</label>
          <input
            type="text"
            placeholder="Contact"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="AddYouth__input">
          <label>Address:</label>
          <input
            type="text"
            placeholder="Address"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="AddYouth__input">
          <label>Occupation:</label>
          <input
            type="text"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>

        <div className="AddYouth__button AddYouth__input">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddYouthForm;
