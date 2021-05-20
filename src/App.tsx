import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import About from "./About";
import Home from "./Home/index";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <>
      <Switch>
        <Route>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
