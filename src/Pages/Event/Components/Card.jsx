import React from "react";
import './Card.scss'

/* eslint-disable react/prop-types */
const Card = ({ title, status, author, rating }) => {
  return (
    <>
      <div className="card">
        <img
          src="https://placekitten.com/400/300"
          alt="Featured Content 1"
          className="card-image"
        />
        <div className="card-details">
          <h3>{title}</h3>
          <p>Status: {status}</p>
          <p>Author: {author}</p>
          <p>Ratings: {rating}/5</p>
        </div>
      </div>
    </>
  );
};

export default Card;
