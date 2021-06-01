import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
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

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "UserName should be of minimum 3 characters length")
    .required("name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .min(10, "Phone Number should be of minimum 10 characters length")
    .required("Phone Number is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(registerUsersRequest(values));
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
          <h3>Register</h3>
        </div>
        <div className="registerinputcontainer">
          <form onSubmit={formik.handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                className={classes.margin}
                label="Name"
                variant="outlined"
                id="validation-outlined-input"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                className={classes.margin}
                label="Email"
                variant="outlined"
                id="validation-outlined-input"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                className={classes.margin}
                label="PhoneNo"
                variant="outlined"
                id="validation-outlined-input"
                type="number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <TextField
                className={classes.margin}
                label="password"
                variant="outlined"
                id="validation-outlined-input"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                className={classes.margin}
                label="confirmpassword"
                variant="outlined"
                id="validation-outlined-input"
                type="password"
                name="confirmpassword"
                value={formik.values.confirmpassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmpassword &&
                  Boolean(formik.errors.confirmpassword)
                }
                helperText={
                  formik.touched.confirmpassword &&
                  formik.errors.confirmpassword
                }
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="footercontainer">
        <p className="footercontent">Copyright @2021 | Designed With by ... </p>
      </div>
    </>
  );
};

export default Register;
