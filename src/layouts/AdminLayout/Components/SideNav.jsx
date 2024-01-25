import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/userDetails";

const SideNav = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" to="">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </Link>
              <div className="sb-sidenav-menu-heading">Interface</div>
              <a
                className="nav-link collapsed "
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns"></i>
                </div>
                Event
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </a>

              <div
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="add event">
                    Create new
                  </Link>
                  <Link className="nav-link" to="view event">
                    Event Status
                  </Link>
                </nav>
              </div>
              <Link className="nav-link" to="view users">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns"></i>
                </div>
                Users
              </Link>
              <Link className="nav-link" to="certificate">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns"></i>
                </div>
                Certificate
              </Link>
              <div className="sb-sidenav-menu-heading">Others</div>
              <Link className="nav-link" href="charts.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-chart-area"></i>
                </div>
                one
              </Link>
              <Link className="nav-link" href="tables.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-table"></i>
                </div>
                Two
              </Link>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">
              Logged in as: {user.userName} ({user.userRole})
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
