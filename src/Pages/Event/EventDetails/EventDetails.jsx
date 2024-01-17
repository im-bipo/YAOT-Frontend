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
  const imageUrl = "https://rb.gy/asxnq1";
  return (
    // <div className="event-details-container">
    //   <div className="event-details-header">
    //     <h1>{title}</h1>
    //   </div>

    //   <div className="event-details-content">
    //     <img src={imageUrl} alt={title} className="event-image" />
    //     <div className="event-info">
    //       <p className="info-item">
    //         <strong>Mentor:</strong> {mentor || 'Mr. Mentro'}
    //       </p>
    //       <p className="info-item">
    //         <strong>Status:</strong> {status || 'finished'}
    //       </p>
    //       <p className="info-item">
    //         <strong>Description:</strong> {decs}
    //       </p>
    //       <button className="register-button"><Link to='register'>Register Now</Link></button>
    //     </div>
    //   </div>
    // </div>
    <>
    <section className=" m-5 py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0"
                        src={imageUrl} alt="..." /></div>
                <div className="col-md-6">
                    <h2 className="display-5 fw-bolder">{title}</h2>
                   <h5>Status : {status}</h5>
                   <h5>Mentro : {mentor}</h5>
                    <p className="lead">{decs + `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ex, aspernatur doloribus natus pariatur repellat perspiciatis molestias cupiditate recusandae nemo dolorum expedita quos ullam officia qu`}</p>
                    <div className="d-flex">
                        <button  type="button" className="btn btn-primary" >
                            <Link to='register'>Regester Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default EventDetails;
