import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../../../../config";


/* eslint-disable react/prop-types */
const Card = ({ eventDetails }) => {
  console.log(eventDetails);
  const title = eventDetails.name;
  const mentor = eventDetails.mentor.name || "Ram Thapa";
  const imageUrl = `${config.serverUrl}/${eventDetails.image}`
  return (
    <>
      <Link to={title+'/info'} className="text-decoration-none">
        <div className="col mb-5">
          <div className="card h-100">
            <img className="card-img-top" src={imageUrl} alt={title} />
            <div className="card-body p-4">
              <div className="text-left">
                <h5 className="fw-bolder">{title}</h5>
                <h6>Mentor : {mentor} </h6>
                <h6>Status : Running </h6>
                <h6>Mentor : {mentor} </h6>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
