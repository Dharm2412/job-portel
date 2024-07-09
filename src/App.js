import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Contect from "./Components/Contect";
import Post_jobs from "./Components/Post_jobs";
import Viewjobs from "./Components/View-jobs";
import Details from "./Components/Details";
import Postedjobs from "./Components/Postedjobs";


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/post-jobs" element={<Post_jobs />} />
        <Route exact path="/contect" element={<Contect />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/view-jobs" element={<Viewjobs />} />
        <Route exact path="/postedjobs" element={<Postedjobs />} />
      </Routes>
    </Router>
  );
};

export default App;
