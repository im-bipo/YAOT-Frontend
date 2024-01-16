import React from 'react'
import {Route, Routes} from 'react-router-dom'

import NavBar from "./components/navBar/NavBar.jsx";

import Home from "./Pages/Home/Home.jsx";
import Event from "./Pages/Event/Event.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Certificate from "./Pages/Certificate/Certificate.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";


const App = () => {
  return (
    <>
    <NavBar/>

    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />

    <Route path='/event' element={<Event/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/certificate' element={<Certificate/>} />
    <Route path='/*' element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App