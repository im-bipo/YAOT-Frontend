// NotFound.jsx
import React from "react";
import "./NotFound.scss";

/* eslint-disable react/prop-types */
const NotFound = (props) => {
console.log("props: ",props);
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! {props.notFound} not found</p>
      </div>
    </div>
  );
};

export default NotFound;
