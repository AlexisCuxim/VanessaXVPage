import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageVannessa from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<>Inicio</>)}>
        </Route>
        <Route path="/vanessa-sanchez" element={<PageVannessa/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;