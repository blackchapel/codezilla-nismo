import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";

function App() {

  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
     <Route path="/" element={<Dashboard />}/>
     <Route path="/signup" element={<Signup />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
