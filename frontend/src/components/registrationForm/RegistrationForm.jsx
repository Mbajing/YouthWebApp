import React from 'react'
import "./addfinanceform.css"

function AddFinanceForm({amount , date , reason , setAmount ,setDate , setReason ,handleSubmit ,placeholderName="Reason"}) {
  return (
   
      <form className="AddFinance" onSubmit={handleSubmit}>
        <div className="AddFinance__input">
          <label>Amount:</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="AddFinance__input">
          <label>{placeholderName}:</label>
          <input
            type="text"
            placeholder={placeholderName}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div className="AddFinance__input">
          <label>Date:</label>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
       

        <div className="AddFinance__button AddFinance__input">
          <button>Submit</button>
        </div>
      </form>
    
  )
}

export default AddFinanceForm