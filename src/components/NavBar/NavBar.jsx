import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import { UserContext } from "../../../context/userDetails";

const Navbar = () => {
  const userDetails = useContext(UserContext);

  const logOutUser = () => {
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    userDetails.setUser({ login: false });
    window.location.replace('/login')
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <Link className="navbar-brand" to="/">
          YAOT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/event">
                Event
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/certificate">
                Certificate
              </NavLink>
            </li>
            {!userDetails.user.login && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Register
                </NavLink>
              </li>
            )}
            {userDetails.user.login && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">{userDetails.user.userName}</li>
                  <li className="dropdown-item" onClick={logOutUser}>
                    Log Out
                  </li>
                </ul>
              </li>
            )}
            {userDetails.user.userRole === "Admin" && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
