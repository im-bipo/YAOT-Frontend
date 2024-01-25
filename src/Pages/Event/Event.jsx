// Event.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import "./Event.scss";
import Card from "./Components/EventCard/Card";
import AddEvent from "./Components/AddEvent/AddEvent";
import { NewEventAddedPopUp } from "./Components/NewEventAddedPopUp/NewEventAddedPopUp";
import NotFound from "../../components/NotFound/NotFound";
const Event = () => {
  const [events, setEvents] = useState([]);

  //show popup when new event is added
  const [data] = useSearchParams();
  const newEventAdded = data.get("newEventAdded") || "false";

  //fetch all event
  useEffect(() => {
    axios
      .get("api/event")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        if(err.response.status === 401)
        setEvents({unauthorized : true})
      });
  }, []);

  if (!events) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if(events?.unauthorized){
    return(
      <>
      <NotFound status='401' message = 'Unauthorized'/>
      </>
    )
  }

  return (
    <>
      <section className="event-list">
        <div>
          <section className="py-5">
            <NewEventAddedPopUp newEvent={newEventAdded} />
            <div className="d-flex align-items-end flex-column mx-5 my-2">
              <AddEvent />
            </div>
            <h2 className="text-center">Events Organize By YAOT</h2>
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {events.map((event) => (
                  <Card key={event._id} eventDetails={event} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Event;
