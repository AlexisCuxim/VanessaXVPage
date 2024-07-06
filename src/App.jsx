import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vanessa-sanchez" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;