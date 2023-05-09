import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FertilizerForm from "./components/FertilizerForm";
import ViewFertilizers from "./components/FertilizerList";
import FertilizerGenerator from "./components/FertilizerGenerator";
import FertilizerTable from "./components/FertilizerGenTable";

function App() {

  return (
        <div>
    <Routes>
      <Route path="/" element={<FertilizerGenerator plantName="tomato"
            plantGrowthStage="vegetative"
            plantTime="spring" />} />            
      </Routes>

      <Routes>
      <Route path="/add" element={<FertilizerForm />} />
      </Routes>
      <Routes>
      <Route path="/view" element={<ViewFertilizers />} />
      </Routes>

      


    </div>
  </Router>
  )
}

export default App
