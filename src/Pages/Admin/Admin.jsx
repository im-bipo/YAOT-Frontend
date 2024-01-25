import React from "react";
import AdminCards from "./Components/AdminCards";

const Admin = () => {
  return (
    <>
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
                path="add event"
              />
              <AdminCards
                type="primary"
                title="Event Status"
                action="View Event"
                path="view event"
              />
              <AdminCards
                type="primary"
                title="Handle Users"
                action="All users"
                path="view users"
              />
              <AdminCards
                type="primary"
                title="Handle Certificate"
                action="certificate"
                path="certificate"
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
    </>
  );
};

export default Admin;
