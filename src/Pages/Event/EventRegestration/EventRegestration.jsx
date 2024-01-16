// EventRegistration.jsx
import React, { useState } from 'react';
import './EventRegestration.scss';

import {useParams} from 'react-router'

const EventRegistration = () => {

    const {eventName} = useParams()
    console.log(eventName);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here (e.g., API call or state update)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-container">
      <h1>Event Registration</h1>
      <p className="event-name">{eventName}</p>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default EventRegistration;
