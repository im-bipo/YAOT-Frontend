import React, { useState } from "react";
import axios from "axios";

const AddEvent = () => {
  const [data, setData] = useState({
    name: "",
    date: "",
    mentor: "",
    time: "",
    decs: "",
    image: null,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "image") {
      const value = e.target.files[0];
      setData({ ...data, [name]: value });
    } else {
      const value = e.target.value;
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("mentor", data.mentor);
    formData.append("decs", data.decs);
    formData.append("thumbnailImage", data.image);

    await axios
      .post("/api/event", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if(err?.response.data)
        {
          console.log(err?.response.data);
        }
        else{
          console.log(err);
        }
      });
  };

  console.log(data);
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>
                  <input
                    type="text"
                    name="time"
                    value={data.time}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mentor" className="form-label">
                    Mentor
                  </label>
                  <input
                    type="text"
                    name="mentor"
                    value={data.mentor}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="decs" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="decs"
                    value={data.decs}
                    onChange={handleChange}
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
                    value={data.img}
                    onChange={handleChange}
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
