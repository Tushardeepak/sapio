import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../assest/logo.png";

function NavBar() {
  const navigate = useNavigate();
  const loaction = useLocation();
  console.log(loaction.pathname);
  return (
    <div className="navbarComponent">
      <div className="navbarBox">
        <img src={logo} className="navbarLogo" />
        <div className="navbarlinksContainer">
          <p
            className={loaction.pathname === "/" ? "selected" : "navbarLinks"}
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p
            className={
              loaction.pathname === "/liked" ? "selected" : "navbarLinks"
            }
            onClick={() => navigate("/liked")}
          >
            Liked
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
