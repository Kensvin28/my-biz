import LandingPage from "./components/LandingPage";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/register" element={<RegisterPage />}/>
              <Route path="/DashboardPage" element={<DashboardPage />}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
