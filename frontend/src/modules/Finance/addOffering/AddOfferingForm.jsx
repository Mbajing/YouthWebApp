import React from "react";
import "./addofferingform.css";
import { useState } from "react";
import axios from "axios";

function AddOfferingForm({ allOfferings, setAllOfferings }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { Amount: amount, Date: date };
    await axios
      .post("http://localhost:5000/offering/", data)
      .then((response) => {
        setAllOfferings((prevData)=>{
          return [ ...prevData,response.data ]
        });

       
        setAmount("");
        setDate("");
      });
  };

  return (
    <form className="AddOffering" onSubmit={handleSubmit}>
      <div className="AddOffering__input">
        <label>Amount:</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
  );
}

export default AddOfferingForm;
