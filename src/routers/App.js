import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FertilizerForm from "./components/FertilizerForm";
import ViewFertilizers from "./components/FertilizerList";
import FertilizerGenerator from "./components/FertilizerGenerator";
import CustomerRegistrationForm from "./components/CustomerRegistrationForm";
import Navbar from "./components/Navbar";
import CustomerLoginForm from './components/CustomerLoginForm';
import CustomerList from "./components/CustomerList";
import CustomerEditForm from "./components/CustomerEdit";
import FertilizerEditForm from "./components/FertilizerEdit";
import FertilizerView from './components/FertilizerView';

function App() {

  return (
    <Router>
    <div>
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
    <Routes>
      <Route path="/view" element={<Navbar />} />
    </Routes>
    <Routes>
      <Route path="/add" element={<Navbar />} />
    </Routes>
    <Routes>
      <Route path="/report" element={<Navbar />} />
    </Routes>
    <Routes>
      <Route path="/login" element={<Navbar />} />
    </Routes>
    <Routes>
      <Route path="/register" element={<Navbar />} />
    </Routes>
    <Routes>
      <Route path="/seeds" element={<Navbar />} />
    </Routes>
    <Routes>
      <Route path="/vegetables" element={<Navbar />} />
    </Routes>
    <Routes>
      <Route path="/login" element={<CustomerLoginForm />} />
    </Routes>
    <Routes>
      <Route path="/register" element={<CustomerRegistrationForm />} />
     </Routes>
     <Routes>
      <Route path="/customers" element={<CustomerList />} />
     </Routes>
     <Routes>
      <Route path="/customers/:id" element={<CustomerEditForm />} />
     </Routes>
    <Routes>
      <Route path="/report" element={<FertilizerGenerator />} />            
     </Routes>
     <Routes>
      <Route path="fertilizers/:id" element={<FertilizerEditForm />} />            
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
