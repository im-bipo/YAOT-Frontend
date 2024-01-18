// EventDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {Link} from 'react-router-dom'

import NotFound from "../../../components/NotFound/NotFound";
import "./EventDetails.scss";
import { config } from "../../../../config";

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

  const { name, mentor, status, decs,image } = Event.result;

  const title = name;
  const imageUrl = `${config.serverUrl}/${image}`
  return (
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
                            <Link to={`register?image=${image}`}>
                        <button  type="button" className="btn btn-primary" >
                              Regester Now
                        </button>
                              </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default EventDetails;
