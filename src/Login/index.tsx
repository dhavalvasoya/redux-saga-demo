import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
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
      <div>login</div>
      <div className="footercontainer">
        <p className="footercontent">Copyright @2017 | Designed With by </p>
      </div>
    </>
  );
}

export default Login;
