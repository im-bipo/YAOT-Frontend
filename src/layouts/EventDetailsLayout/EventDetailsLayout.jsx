import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

import { config } from "../../../config";
import NotFound from "../../components/NotFound/NotFound";

const EventDetailsLayout = () => {
  const { eventName } = useParams();

  const [event, setEvent] = useState();

  useEffect(() => {
    axios.get(`/api/event/${eventName}`).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        setEvent(res.data);
      } else setEvent("noData");
    });
  }, [eventName]);

  if (!event) {
    return (
      <div>
        <h1>loadion..</h1>
      </div>
    );
  }
  if (event === "noData") {
    return <NotFound message="event" />;
  }

  // const imageUrl = Event.image
  const imageUrl = `${config.serverUrl}/${event.image}`;
  return (
    <>
      <section className=" m-5 py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={imageUrl}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <h2 className="display-5 fw-bolder">{event.name}</h2>

              <h5>Date</h5>
              <ul>
                <li>From : {event.date.start}</li>
                <li>End : {event.date.end}</li>
              </ul>
              <h5>Time</h5>
              <ul>
                <li>From : {event.time.start}</li>
                <li>Duration : {event.time.duration}</li>
              </ul>

              {/* mentor  */}
              <h5>Mentor</h5>
              <ul>
                <li>Mentro : {event.mentor.name}</li>
                <li>Field : {event.mentor.field}</li>
                <li>
                  Social Link: <a href={event.mentor.socialLink}>LinkedIn</a>
                </li>
              </ul>
              <div className="d-flex">
                <Link to={"registration"}>
                  <button type="button" className="btn btn-primary">
                    Regester Now
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={"info"}>
                    Info
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"registration"}
                  >
                    Info
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="lead">
              <Outlet context={event} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailsLayout;
