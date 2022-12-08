import React from "react";
import Maybelline from './Component/Maybelline';
import CoverGirl from './Component/Covergirl';
import NYX from './Component/NYX';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<About/>} />
          <Route path="/maybelline" element={<Maybelline/>} />
          <Route path="/covergirl" element={<CoverGirl/>} />
          <Route path="/nyx" element={<NYX/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;