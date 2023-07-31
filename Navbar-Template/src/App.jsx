import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './files/Homepage';
import About from "./files/About"
import Contact from "./files/Contact"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App