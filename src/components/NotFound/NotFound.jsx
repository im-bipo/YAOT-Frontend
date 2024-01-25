// NotFound.jsx
import React from "react";
import "./NotFound.scss";

/* eslint-disable react/prop-types */
const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>{props.status || 404}</h1>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default NotFound;
