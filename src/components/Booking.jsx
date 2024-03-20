import React, { useState } from 'react';
import Navbar from './Navbar';
import './bookingform.css'
//import { Link } from 'react-router-dom';
//name,phone,email,time,date,special request comments

function Booking({ onBookAppointment }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [comments, setComments] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    onBookAppointment({ name, phoneNumber, email, date, time, comments });
    // Reset form fields after submission
    setName('')
    setPhoneNumber('')
    setEmail('')
    setDate('')
    setTime('')
    setComments('')
    // Reload the page
    window.location.href = '/'

}

return (
    <div>
        <Navbar />
      
        <div className="form-container">
            <h2 className="form-title">FILL THIS FORM TO BOOK AN APPOINTMENT</h2>
            <form onSubmit={handleSubmit}>
            {/* Name field */}
            <div>
                <label>Name:</label>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>

            {/* Phone number field */}
            <div>
                <label>Phone Number:</label>
                <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                />
            </div>

            {/* Email field */}
            <div>
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            {/* Date field */}
            <div>
                <label>Date of Appointment:</label>
                <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                />
            </div>

            {/* Time field */}
            <div>
                <label>Time of Appointment:</label>
                <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                />
            </div>

            {/* Comments section */}
            <div>
                <label>Comments/Special Requests:</label>
                <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                />
            </div>

            {/* Submit button */}
            <button type="submit">Book Appointment</button>
            </form>
        </div>
        </div>
    )
}

export default Booking