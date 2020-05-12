import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Add from "./components/add";
import Home from "./components/home";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
        </Route>
        <Route exact path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route exact path="/register">
          <Navbar />
          <Add />
        </Route>
        <Route exact path="/home">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
