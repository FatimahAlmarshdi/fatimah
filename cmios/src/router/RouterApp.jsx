import React from 'react'
import {Routes, Route,} from "react-router-dom";
import About from '../page/About';
import Home from '../page/Home';
import Log from '../page/Log';
import Navbar from '../page/Navbar';
import NotFound from '../page/NotFound';
import Contact from '../page/Contact';
import Forgotpassword from '../page/Forgotpassword';
function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Log" element={<Log />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RouterApp