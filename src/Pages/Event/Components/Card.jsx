import React from "react";
import {Link} from 'react-router-dom'
import './Card.scss'

/* eslint-disable react/prop-types */
const Card = ({eventDetails}) => {
  const {name,status,mentor} = eventDetails
  console.log(eventDetails);
  const title = name
  return (
    <>
    <Link to={name}>

      <div className="card">
        <img
          src={'https://placekitten.com/400/300'}
          alt="Featured Content 1"
          className="card-image"
          />
        <div className="card-details">
          <h3>{title}</h3>
          <p>Status: {status}</p>
          <p>Mentor: {mentor || 'no mentor'}</p>
          <p>Ratings: {'4'}/5</p>
        </div>
      </div>
          </Link>
    </>
  );
};

export default Card;
