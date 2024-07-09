import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLoginClick = () => {
    window.location.href = '/register';
  };
    const handleSignClick = () => {
      window.location.href = "/login";
    };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="logo"
            src="https://cdn5.vectorstock.com/i/1000x1000/74/44/job-portal-lettering-logo-design-template-concept-vector-37017444.jpg"
            alt=""
          />
          <br></br>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/post-jobs">
                Post-jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-jobs">
                View-jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/postedjobs">
                Posted Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contect">
                Contect
              </Link>
            </li>
          </ul>
        </div>
        <div className="btnn">
          <button className="btn " onClick={handleSignClick}>
            LOGIN
          </button>
          <button className="btn " onClick={handleLoginClick}>
            REGISTER
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
