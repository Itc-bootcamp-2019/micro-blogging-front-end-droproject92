import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar () {

    return (
<Router>
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to="/profile" > Profile </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/profile">
        </Route>
        <Route path="/profile/:user">
        </Route>
      </Switch>
    </div>
    </Router>
    )
}




    export default Navbar