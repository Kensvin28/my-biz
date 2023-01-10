import LandingPage from "./components/landing/LandingPage";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterPage from "./components/landing/RegisterPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import TransactionPage from "./components/transaction/TransactionPage";
import LoanPage from "./components/loan/LoanPage";
import ProfilePage from "./components/profile/ProfilePage";
import QrPage from "./components/qr/QRPage";
import ApplyLoanPage from "./components/loan/ApplyLoanPage";

function App() {
  return (
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/register" element={<RegisterPage />}/>
              <Route path="/dashboard" element={<DashboardPage />}/>
              <Route path="/transaction" element={<TransactionPage />}/>
              <Route path="/loan" element={<LoanPage />}/>
              <Route path="/apply-loan" element={<ApplyLoanPage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
              <Route path="/qr" element={<QrPage />}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
