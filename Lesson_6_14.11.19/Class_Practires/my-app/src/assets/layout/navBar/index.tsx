import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" activeClassName="active" to="/homePage">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/sighIn">
            Login / Sign-In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signUp">
            Sign-Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
