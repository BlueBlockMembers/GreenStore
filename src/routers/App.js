import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FertilizerForm from "./components/FertilizerForm";
import ViewFertilizers from "./components/FertilizerList";
import FertilizerGenerator from "./components/FertilizerGenerator";
import CustomerRegistrationForm from "./components/CustomerRegistrationForm";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
    <div>
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>

    <Routes>
      <Route path="/" element={<CustomerRegistrationForm />} />
     </Routes>

    <Routes>
      <Route path="/report" element={<FertilizerGenerator />} />            
     </Routes>

      <Routes>
        <Route path="/add" element={<FertilizerForm />} />
      </Routes>
      <Routes>
        <Route path="/view" element={<ViewFertilizers />} />
      </Routes>

    </div>
    
  </Router>
  );
}

export default App;
