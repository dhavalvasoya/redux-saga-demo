import React from "react";
import { NavLink } from "react-router-dom";

import clsx from "clsx";
import {
  makeStyles,
  Theme,
  ThemeProvider,
  createStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

import "./styles.css";
import { useDispatch } from "react-redux";
import { loginUserRequset } from "../Action";

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

interface State {
  name: string;
  password: string;
  showPassword: boolean;
}

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    name: "",
    password: "",
    showPassword: false,
  });
  const dispatch = useDispatch();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const handlelogin = () => {
    if (values.name && values.password !== undefined) {
      dispatch(loginUserRequset(values));
      console.log(values);
    }
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
      <div className="main">
        <div className="registercontainer">
          <h3>Login</h3>
        </div>
        <div className="registerinputcontainer">
          <ThemeProvider theme={theme}>
            <TextField
              className={classes.margin}
              label="userName"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              onChange={handleChange("name")}
              value={values.name}
            />
          </ThemeProvider>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </div>
        <div className="registercontainer">
          <Button variant="contained" color="primary" onClick={handlelogin}>
            Login
          </Button>
        </div>
      </div>
      <div className="footercontainer">
        <p className="footercontent">Copyright @2021 | Designed With by ....</p>
      </div>
    </>
  );
};

export default Login;
