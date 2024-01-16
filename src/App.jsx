import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/navBar/NavBar.jsx";

import Home from "./Pages/Home/Home.jsx";
import Event from "./Pages/Event/Event.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Certificate from "./Pages/Certificate/Certificate.jsx";
import PageNotFound from "./Pages/PageNotFound/PageNotFound.jsx";
import CertificatePage from "./Pages/Certificate/CertificatePage/CertificatePage.jsx";
import EventDetails from "./Pages/Event/EventDetails/EventDetails.jsx";
import EventRegestration from "./Pages/Event/EventRegestration/EventRegestration.jsx";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/event" element={<Event />} />
        <Route path="/event/:eventName" element={<EventDetails />} />
        <Route path="/event/:eventName/register" element={<EventRegestration />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificate/:certificateId" element={<CertificatePage />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
