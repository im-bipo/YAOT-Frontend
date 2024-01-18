// EventRegistration.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import "./EventRegestration.scss";

import { useParams } from "react-router";
import { config } from "../../../../config";

const EventRegistration = () => {
  const { eventName } = useParams();

const [queryParameters] = useSearchParams()
  const imageUrl = `${config.serverUrl}/${queryParameters.get('image')}`;

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
              <h2 className="display-5 fw-bolder">Register for {eventName}</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventRegistration;
