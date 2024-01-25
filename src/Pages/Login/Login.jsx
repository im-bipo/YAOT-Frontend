import React, { useState,useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/userDetails";
const Login = () => {

const {setUser} = useContext(UserContext)

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] =useState('')

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/user/login", form)
      .then((res) => {
        console.log(res.data);
        setError('')
        setUser({...res.data.user, login : true})
        window.location.replace(`/?authActivity=true&authMsg=${res.data.msg}`)
      })
      .catch((err) => {
        console.log('error',err.response.data);
        setError(err.response.data.msg)
      });
  };

  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <h2 className="text-center">Login</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
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
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <div className="text-center text-danger">
       {error}
      </div>
      <div>
        <Link to="/signup">already have account</Link>
      </div>
    </form>
  );
};

export default Login;
