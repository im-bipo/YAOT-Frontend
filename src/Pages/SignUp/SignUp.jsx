import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/user/signup", form)
      .then((res) => {
        console.log(res?.response);
      })
      .catch((err) => {
        console.log(err?.response.data);
        setError(err.response.data.msg);
      });
  };
  return (
    <>
      <form className="container my-5" onSubmit={handleSubmit}>
        <h2 className="text-center">signUp</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div className="text-center text-danger">{error}</div>
        <div>
          <Link to="/login">Create new account</Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
