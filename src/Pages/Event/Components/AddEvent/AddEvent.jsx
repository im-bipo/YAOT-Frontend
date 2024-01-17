import React from "react";

const AddEvent = () => {
  
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Event
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Event
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Event Name
                  </label>
                  <input type="text" name="name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input type="text" name="date" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>
                  <input type="text" name="time" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="mentor" className="form-label">
                    Mentor
                  </label>
                  <input type="text" name="mentor" className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="decs" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="decs"
                    className="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="Thumbnail" className="form-label">
                    Thumbnail
                  </label>
                  <input
                    className="form-control"
                    name="image"
                    type="file"
                    id="formFile"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    required
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
      </div>
    </>
  );
};

export default AddEvent;
