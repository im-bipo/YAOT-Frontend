import React, { useState } from "react";
import axios from "axios";
import TextEditor from "./Components/TextEditor";

const Status = ({ response }) => {
  if (response?.status === 201) {
    window.location.href = '/event';
  }
  if (response?.status === 400) {
    return (
      <>
        <h6 className="text-center text-danger">Failed</h6>
        <h6 className="text-center text-danger">{response.data.msg}</h6>
      </>
    );
  }
};

const NewEvent = () => {
  const [response, setResponce] = useState("");

  const [data, setData] = useState({
    name: "",
    dateStart: "",
    dateEnd: "",
    timeStart: "",
    timeEnd: "",
    mentorName: "",
    mentorField: "",
    mentorSocilaLink: "",
    thumbnailImage: null,
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "thumbnailImage") {
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

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    await axios
      .post("/api/event", formData)
      .then((res) => {
        setResponce({ msg: res.data.msg, status: res.status });

      })
      .catch((err) => {
        setResponce({ data: err.response.data, status: err.response.status });
      });
  };
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center">Add New Event</h2>
        <form className="row g-3" onSubmit={handleSubmit} id="newEventForm">
          <div className="col-md-12">
            <label htmlFor="Name" className="form-label">
              Event Name
              <span className="text-danger"> *</span>
            </label>
            <input
              name="name"
              type="text"
              value={data.name}
              onChange={handleChange}
              className="form-control"
              placeholder="React Workshop - 2024"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dateStart" className="form-label">
              Date - Start
              <span className="text-danger"> *</span>
            </label>
            <input
              name="dateStart"
              type="date"
              value={data.dateStart}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dateEnd" className="form-label">
              Date - End
            </label>
            <input
              name="dateEnd"
              type="date"
              value={data.dateEnd}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="timeStart" className="form-label">
              Time - Start
              <span className="text-danger"> *</span>
            </label>
            <input
              name="timeStart"
              type="time"
              value={data.timeStart}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="timeEnd" className="form-label">
              Time - End
            </label>
            <input
              name="timeEnd"
              type="time"
              value={data.timeEnd}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* mentor */}
          <div className="col-md-4">
            <label htmlFor="mentorName" className="form-label">
              Mentor - Name
              <span className="text-danger"> *</span>
            </label>
            <input
              name="mentorName"
              type="text"
              value={data.mentorName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="mentorField" className="form-label">
              Mentor - Field
              <span className="text-danger"> *</span>
            </label>
            <input
              name="mentorField"
              type="text"
              value={data.mentorField}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="mentorSocilaLink" className="form-label">
              Mentor - Social Link
              <span className="text-danger"> *</span>
            </label>
            <input
              name="mentorSocilaLink"
              type="text"
              value={data.mentorSocialLink}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Image */}
          <div className="col-md-4">
            <label htmlFor="thumbnailImage" className="form-label">
              Thumbnail
              <span className="text-danger"> *</span>
            </label>
            <input
              name="thumbnailImage"
              onChange={handleChange}
              type="file"
              accept="image/*"
              className="form-control"
              required
            />
          </div>

          {/* Description */}
          <div className="col-md-12">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <TextEditor value={data} setValue={setData} />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me to procede
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Add Event
            </button>
          </div>
        </form>
        <Status response={response}/>
      </div>
    </>
  );
};

export default NewEvent;
