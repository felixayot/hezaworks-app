import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
      <Navbar />
    <GlobalStyles />
      <Routes>
    <Route path="/*" element={<App />} />
    </Routes>
    <Footer />
    </Router>
  </AuthProvider>
 </React.StrictMode>
);
