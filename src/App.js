import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/signup_component";
import Manufacturingportal from "./components/Manufacturing_page";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup_component" element={<SignUp />} />
          <Route path="/Manufacturing_page" element={<Manufacturingportal />} />
        </Routes>
        {/* <ImageUpload /> */}
      </div>
    </Router>
  );
}

export default App;
