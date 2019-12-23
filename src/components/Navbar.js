import React from "react";
import Profile from "./Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/profile"> Profile </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
