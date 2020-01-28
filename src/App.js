import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        <Switch>
          <Route path="/favorites" component={Favorites}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
