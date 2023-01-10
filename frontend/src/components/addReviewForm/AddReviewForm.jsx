import React from 'react'
import "./addReviewForm.css"

function AddReviewForm({eventName , date , attendance , presidentRemark ,secretaryRemark, setEventName ,setDate ,setAttendance ,setPresidentRemark ,setSecretaryRemark ,handleSubmit}) {
  return (
    <form className="AddReview" onSubmit={handleSubmit}>
        <div className="AddReview__input">
          <label>Event:</label>
          <input
            type="text"
            placeholder="Event"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className="AddReview__input">
          <label>Date:</label>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="AddReview__input">
          <label>Attendance(number):</label>
          <input
            type="number"
            placeholder="number"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          />
        </div>
        <div className="AddReview__input--span3">
          <label>President Remark:</label>
          <textarea
          
          
            placeholder="President Remark"
            value={presidentRemark}
            onChange={(e) => setPresidentRemark(e.target.value)}
          ></textarea>
        </div>
        <div className="AddReview__input--span3">
          <label>Secretary Remark:</label>
          <textarea
             
            placeholder="Secretary Remark"
            value={secretaryRemark}
            onChange={(e) => setSecretaryRemark(e.target.value)}
          ></textarea>
        </div>
       

        <div className="AddReview__button AddReview__input">
          <button>Submit</button>
        </div>
      </form>
  )
}

export default AddReviewForm