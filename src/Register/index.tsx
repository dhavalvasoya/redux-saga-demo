import React, { useState } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "./styles.css";
import { useDispatch } from "react-redux";
import { registerUsersRequest } from "../Action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 2,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    mail: "",
    phoneNo: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const onSubmitData = (data: any) => {
    if (
      register.name &&
      register.mail &&
      register.password &&
      register.phoneNo !== null
    ) {
      console.log(register);
      dispatch(registerUsersRequest(register));
    }
  };
  const classes = useStyles();
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
      <div className="main">
        <div className="registercontainer">
          <h3>Register</h3>
        </div>
        <div className="registerinputcontainer">
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ValidationTextField
                className={classes.margin}
                label="Name"
                required
                variant="outlined"
                id="validation-outlined-input"
                type="text"
                name="name"
                onChange={handleChange}
                value={register.name}
              />
              <ValidationTextField
                className={classes.margin}
                label="Email"
                required
                variant="outlined"
                id="validation-outlined-input"
                type="text"
                name="mail"
                onChange={handleChange}
                value={register.mail}
              />
              <ValidationTextField
                className={classes.margin}
                label="PhoneNo"
                required
                variant="outlined"
                id="validation-outlined-input"
                type="number"
                name="phoneNo"
                onChange={handleChange}
                value={register.phoneNo}
              />
              <ValidationTextField
                className={classes.margin}
                label="password"
                required
                variant="outlined"
                id="validation-outlined-input"
                type="password"
                name="password"
                onChange={handleChange}
                value={register.password}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                type="submit"
                onClick={onSubmitData}
                // onClick={(e) => e.preventDefault()}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="footercontainer">
        <p className="footercontent">Copyright @2017 | Designed With by </p>
      </div>
    </>
  );
};

export default Register;
