import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FertilizerForm from "../components/fertilizers/FertilizerForm";
import ViewFertilizers from "../components/fertilizers/FertilizerList";
import FertilizerGenerator from "../components/fertilizers/FertilizerGenerator";
import FertilizerEditForm from "../components/fertilizers/FertilizerEdit";
import CustomerRegistrationForm from "../components/customer/CustomerRegistrationForm";
import Navbar from "../components/Navbar";
import CustomerLoginForm from '../components/customer/CustomerLoginForm';
import CustomerList from "../components/customer/CustomerList";
import CustomerEditForm from "../components/customer/CustomerEdit";


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
