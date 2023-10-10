import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container d-flex align-item-center">
        <NavLink className="navbar-brand order-0" to="/">
          <h3 className="fw-bolder text-white">Todo-List</h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse order-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/"
              >
                TodoList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/tutorial"
              >
                Redux-Tutorial
              </NavLink>
            </li>
          </ul>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
