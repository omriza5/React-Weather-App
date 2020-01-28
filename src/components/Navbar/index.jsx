import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navbar(props) {
  return (
    <Fragment>
      <nav className="main-nav">
        <div className="navbar-items">
          <h1 className="nav-title">Weather App</h1>
          <div className="nav-icons">
            <a
              href="https://github.com/omriza5/React-Weather-App"
              className="nav-icon"
              target="_blank"
            >
              <i className="fa fa-github-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/omri-zaher-3059498b/"
              className="nav-icon"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="nav-buttons">
            <NavLink to="/" className="inactive" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className="inactive"
              exact
              activeClassName="active"
            >
              Favorites
            </NavLink>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
