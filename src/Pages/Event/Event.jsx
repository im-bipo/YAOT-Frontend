import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Event.scss";
import Card from "./Components/Card";

const Event = () => {
  const [Events, setEvents] = useState();

  useEffect(() => {
    axios
      .get("api/event")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!Events) {
    return (
      <div>
        <h1>loadion..</h1>
      </div>
    );
  }
  if (Events) {
    return (
      <div>
        <div className="event-container">
          <header className="event-header">
            <h1>Upcoming Events</h1>
            <p className="sub-heading">Explore and Join Our Exciting Events</p>
          </header>

          <section className="event-list">
            <div className="cards">
              {Events.map((event) => {
                return (
                  <Card
                    key={event._id}
                    eventDetails={event}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }
};

export default Event;
