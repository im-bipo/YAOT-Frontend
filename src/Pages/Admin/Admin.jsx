import React from "react";
import "./Admin.scss";
import SideNav from "./Components/SideNav";
import AdminCards from "./Components/AdminCards";

const Admin = () => {
  return (
    <>
      <div id="layoutSidenav">
        <SideNav />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Admin Dashboard</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">Quick Event</li>
              </ol>
              <div className="row">
                {/* type = ["primary","warning","success","danger"] */}
                <AdminCards
                  type="primary"
                  title="Create New Event"
                  action="Add Event"
                  path='add event'
                />
                <AdminCards
                  type="primary"
                  title="Event Status"
                  action="View Event"
                  path='view event'
                />
                <AdminCards
                  type="primary"
                  title="Handle Users"
                  action="All users"
                  path='view users'
                />
                <AdminCards
                  type="primary"
                  title="Handle Certificate"
                  action="certificate"
                  path='certificate'
                />
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Event Status
                </div>
                <div className="card-body">
                <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      ></script>
      <script src="js/scripts.js"></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
        crossOrigin="anonymous"
      ></script>
      <script src="assets/demo/chart-area-demo.js"></script>
      <script src="assets/demo/chart-bar-demo.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
        crossOrigin="anonymous"
      ></script>
      <script src="js/datatables-simple-demo.js"></script>
    </>
  );
};

export default Admin;
