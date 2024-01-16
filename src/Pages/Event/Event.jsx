import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Event.scss";
import Card from "./Components/Card";

const Event = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("api/event")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  console.log("..");

  if (!data) {
    return (
      <div>
        <h1>loadion..</h1>
      </div>
    );
  }
  if (data) {
    return (
      <div>
        <div className="event-container">
          <header className="event-header">
            <h1>Upcoming Events</h1>
            <p className="sub-heading">Explore and Join Our Exciting Events</p>
          </header>

          <section className="event-list">
            <div className="cards">
              <Card
                title="Web Development Workshop"
                status="Upcoming"
                author="Your Organization"
                rating={5}
              />
              <Card
                title="Web Development Workshop"
                status="Upcoming"
                author="Your Organization"
                rating={5}
              />
              <Card
                title="Web Development Workshop"
                status="Upcoming"
                author="Your Organization"
                rating={5}
              />

              <Card
                title="Another Event"
                status="Upcoming"
                author="Your Organization"
                rating={4}
              />
              <Card
                title="Another Event"
                status="Upcoming"
                author="Your Organization"
                rating={4}
              />
            </div>
            {/* Add more FeaturedCard components for additional events */}
          </section>
        </div>
      </div>
    );
  }
};

export default Event;
