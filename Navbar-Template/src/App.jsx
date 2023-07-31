import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './files/Navbar';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path='/user' element={<Navbar />} />
    </Routes>
  )
}

export default App