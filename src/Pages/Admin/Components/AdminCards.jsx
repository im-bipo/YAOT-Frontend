import React from "react";
import { Link } from "react-router-dom";

const AdminCards = (props) => {
  return (
    <Link className="col-xl-3 col-md-6" to={props.path}>
      <div className={`card bg-${props.type} text-white mb-4`}>
        <div className="card-body">{props.title}</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <p className="small text-white stretched-link" href="#">
            {props.action}
          </p>
          <div className="small text-white">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdminCards;
