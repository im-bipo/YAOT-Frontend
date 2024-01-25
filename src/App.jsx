import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Event from "./Pages/Event/Event.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Certificate from "./Pages/Certificate/Certificate.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import CertificatePage from "./Pages/Certificate/CertificatePage/CertificatePage.jsx";
import EventDetails from "./Pages/Event/EventDetails/EventDetails.jsx";
import EventRegestration from "./Pages/Event/EventRegestration/EventRegestration.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Login from "./Pages/Login/Login.jsx";

import Admin from "./Pages/Admin/Admin.jsx";
import NewEvent from "./Pages/Admin/Pages/Event/NewEvent.jsx";
import EventDetails_Admin from "./Pages/Admin/Pages/Event/EventDetails_Admin.jsx";
import UserDetails from "./Pages/Admin/Pages/Users/UserDetails.jsx";
import Certificate_Admin from "./Pages/Admin/Pages/Certificate/Certificate_Admin.jsx";

//layouts
import AdminLayout from "./layouts/AdminLayout/AdminLayout.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Admin />} />
          <Route path="add event" element={<NewEvent />} />
          <Route path="add event" element={<NewEvent />} />
          <Route path="view event" element={<EventDetails_Admin />} />
          <Route path="view users" element={<UserDetails />} />
          <Route path="certificate" element={<Certificate_Admin />} />
        </Route>

        <Route path="/event" element={<Event />} />
        <Route path="/event/:eventName" element={<EventDetails />} />
        <Route
          path="/event/:eventName/register"
          element={<EventRegestration />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route path="/certificate" element={<Certificate />} />
        <Route
          path="/certificate/verify/:certificateId"
          element={<CertificatePage />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
