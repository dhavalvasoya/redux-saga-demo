import React from "react";
import { NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";

import "./styles.css";

function About() {
  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <>
      <header>
        <div className="headercontainer">
          <div>logo</div>
          <div className="headeroption">
            <NavLink exact to="/about">
              <a className="headermenuoption">About</a>
            </NavLink>

            <NavLink exact to="/login">
              <a className="headermenuoption">Login</a>
            </NavLink>
            <NavLink exact to="/register">
              <a className="headermenuoption">Register</a>
            </NavLink>
          </div>
        </div>
      </header>
      <Button onClick={handleLogout} variant="contained" color="secondary">
        Logout
      </Button>
      <div className="footercontainer">
        <p className="footercontent">Copyright @2021 | Designed With by ...</p>
      </div>
    </>
  );
}

export default About;
