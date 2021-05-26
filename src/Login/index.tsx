import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import clsx from "clsx";
import {
  makeStyles,
  Theme,
  ThemeProvider,
  createStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { loginUserRequset } from "../Action";
import TextField from "@material-ui/core/TextField";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";


import "./styles.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginUserRequset(values));
    },
  });

  const theme = createMuiTheme({
    palette: {
      primary: red,
    },
  });

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
          <h3>Login</h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="registerinputcontainer">
            <ThemeProvider theme={theme}>
              <TextField
                name="email"
                label="Email"
                className={classes.margin}
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <TextField
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                id="outlined-adornment-password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </ThemeProvider>
          </div>
          <div className="registercontainer">
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="footercontainer">
        <p className="footercontent">Copyright @2021 | Designed With by ...</p>
      </div>
    </>
  );
};

export default Login;
