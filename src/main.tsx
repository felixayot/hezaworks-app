/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { JobsearchProvider } from "./context/JobsearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JobsearchProvider>
    <AuthProvider>
    <Router>
    <GlobalStyles />
    {/* { IsAuthenticated() ? <Navbar /> : <PublicNavbar /> } */}
    {/* <PublicNavbar /> */}
    <Navbar />
    <Routes>
    <Route path="/*" element={<App />} />
    </Routes>
    <Footer />
    </Router>
  </AuthProvider>
  </JobsearchProvider>
 </React.StrictMode>
);
