import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-center">
        <a
          className="navbar-brand"
          href="#"
          // Customize color and font size here
        >
          Back Office Panel
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Button
              color="black"
              sx={{ textTransform: "capitalize" }}
              component={Link}
              to="/users"
            >
              Users
            </Button>
            <Button
              color="black"
              sx={{ textTransform: "capitalize" }}
              component={Link}
              to="/task-lists"
            >
              Task Lists
            </Button>
            <Button
              color="black"
              sx={{ textTransform: "capitalize" }}
              component={Link}
              to="/tasks"
            >
              Tasks
            </Button>
            <Button
              color="black"
              sx={{ textTransform: "capitalize" }}
              component={Link}
              onClick={onLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
