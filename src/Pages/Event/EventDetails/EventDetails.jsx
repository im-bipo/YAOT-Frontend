// EventDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {Link} from 'react-router-dom'

import NotFound from "../../../components/NotFound/NotFound";
import "./EventDetails.scss";

const EventDetails = () => {
  const { eventName } = useParams();

  const [Event, setEvent] = useState();

  useEffect(() => {
    axios
      .get(`/api/event/${eventName}`)
      .then((res) => {
        if (res.data.sucess) {
          setEvent(res.data);
        } else setEvent("noData");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventName]);

  if (!Event) {
    return (
      <div>
        <h1>loadion..</h1>
      </div>
    );
  }
  if (Event === "noData") {
    return <NotFound notFound="event" />;
  }

  console.log(Event.result);
  const { name, mentor, status, decs } = Event.result;

  const title = name;
  const imageUrl = "https://placekitten.com/800/400";
  return (
    <div className="event-details-container">
      <div className="event-details-header">
        <h1>{title}</h1>
      </div>

      <div className="event-details-content">
        <img src={imageUrl} alt={title} className="event-image" />
        <div className="event-info">
          <p className="info-item">
            <strong>Mentor:</strong> {mentor || 'Mr. Mentro'}
          </p>
          <p className="info-item">
            <strong>Status:</strong> {status || 'finished'}
          </p>
          <p className="info-item">
            <strong>Description:</strong> {decs}
          </p>
          <button className="register-button"><Link to='register'>Register Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
