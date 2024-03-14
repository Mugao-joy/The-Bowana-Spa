import React, { useState } from 'react';
//name, phone, email, date, time, special request
function BookingForm({ onBookAppointment }) {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [comments, setComments] = useState('')

    const handleSubmit = (event) => {//will be called when form is submitted
        event.preventDefault()
        onBookAppointment({ name, phoneNumber, email, date, time, comments });
        // Reset form fields after submission
        setName('')
        setPhoneNumber('')
        setEmail('')
        setDate('')
        setTime('')
        setComments('')
        // Reload the pag
        window.location.reload()
  }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Phone Number:</label>
            <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Date:</label>
            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Time:</label>
            <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Comments/Special Requests:</label>
            <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            />
        </div>
        <button type="submit">Book Appointment</button>
        </form>
    )
}

export default BookingForm