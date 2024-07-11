import React from "react";
import "./Main.css";

export default function Applynow() {
  return (
    <div className="apply-container">
      <div className="main">
        <form>
          <div className="input">
            <label htmlFor="Name">Name</label>
            <br />
            <input type="text" placeholder="Enter your Name" required />
          </div>
          <div className="input">
            <label htmlFor="Email">Email id</label>
            <br />
            <input type="email" placeholder="Enter your email id" required />
          </div>
          <div className="input">
            <label htmlFor="About">About</label>
            <br />
            <textarea
              name="feedback"
              id="feedback"
              placeholder="Enter a description"
              required
            ></textarea>
          </div>
          <div className="input">
            <label htmlFor="ChooseFile">Resume</label>
            <br />
            <input type="file" required />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
