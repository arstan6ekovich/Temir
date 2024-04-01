import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../components/image/logo.png";

const Header = () => {
  return (
    <div data-aos="fade-down" id="Header">
      <div className="container">
        <div className="Header">
          <div className="text-nav">
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/hero"}>PRODUCTS</NavLink>
            <img src={logo} alt="" />
            <NavLink to={"/about"}>ABOUT</NavLink>
            <NavLink to={"/contact"}>CONTACT US</NavLink>
            <div className="border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
