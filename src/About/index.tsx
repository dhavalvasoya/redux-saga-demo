import React from "react";
import { NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import "./styles.css";

const About = () => {
  const handleLogout = () => {
    localStorage.clear();
  };

  const loginUser: any = localStorage.getItem("user");
  // console.log(loginUser);

  const userProfile: any = JSON.parse(loginUser);

  console.log(userProfile);

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
      {userProfile && (
        <div style={{ textAlign: "center" }}>
          <h2>{userProfile.name}</h2>
        </div>
      )}
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <Button onClick={handleLogout} variant="contained" color="primary">
          Logout
        </Button>
      </div>
      <div className="footercontainer">
        <p className="footercontent">Copyright @2021 | Designed With by ...</p>
      </div>
    </>
  );
};

export default About;
