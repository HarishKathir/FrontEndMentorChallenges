import React from "react";
import Logo from "../../../FEM_Starter/images/logo.svg";
import RequestButton from "./requestButton";
import "../styles/header.css";

const header = () => {
  return (
    <nav className="container-fluid">
      <div className="row">
          <div className="col-3"><img className="navLogo" src={Logo} alt="" /></div>
          <div className="col-9">
              <ul className="navMenu">
                <li className="menuItems">
                  <a href="#">Home</a>
                </li>
                <li className="menuItems">
                  <a href="#">About</a>
                </li>
                <li className="menuItems">
                  <a href="#">Contact</a>
                </li>
                <li className="menuItems">
                  <a href="#">Blog</a>
                </li>
                <li className="menuItems">
                  <a href="#">Careers</a>
                </li>
              </ul>
          </div>
          <div className="col-3">
              <RequestButton />
          </div>
      </div>
    </nav>
  );
};

export default header;
