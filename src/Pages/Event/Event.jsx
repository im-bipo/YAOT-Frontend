// Event.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Event.scss";
import Card from "./Components/EventCard/Card";
import NotFound from "../../components/NotFound/NotFound";
const Event = () => {
  const [events, setEvents] = useState([]);


  //fetch all event
  useEffect(() => {
    axios
      .get("api/event")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
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
            {/* <NewEventAddedPopUp newEvent={newEventAdded} /> */}
            <div className="d-flex align-items-end flex-column mx-5 my-2">
              
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
