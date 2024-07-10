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
import Contect from "./Components/Contect"; // Correct import path
import Post_jobs from "./Components/Post_jobs";
import Viewjobs from "./Components/View-jobs";
import Details from "./Components/Details";
import Postedjobs from "./Components/Postedjobs";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example: Check if user is logged in (using Firebase auth, for instance)
    // Replace with your own authentication check logic
    const isLoggedIn = /* Check if user is logged in */ true;

    if (isLoggedIn) {
      setUser({}); // Set your user state accordingly
    } else {
      setUser(null);
    }
  }, []);

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
        <Route
          exact
          path="/postedjobs"
          element={user ? <Postedjobs /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
