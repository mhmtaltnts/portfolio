import React, { useState } from "react";
import "./Controllers.scss";
import { useNavigate, useLocation } from "react-router-dom";

const MenuItems = [
  { text: "home", icon: "fas fa-home", path: "/" },
  { text: "about", icon: "fas fa-user", path: "/about" },
  { text: "portfolio", icon: "fas fa-briefcase", path: "/portfolio" },
  { text: "blogs", icon: "far fa-newspaper", path: "/blogs" },
  { text: "contact", icon: "fas fa-envelope-open", path: "contact" },
];

const Controller = ({ path, icon }) => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div
      className={location.pathname == path ? "control active-btn" : "control"}
      onClick={() => navigate(path)}
    >
      <i className={icon}></i>
    </div>
  );
};

function Controllers() {
  return (
    <div className="controls">
      {MenuItems.map((item) => (
        <Controller key={item.text} icon={item.icon} path={item.path} />
      ))}
    </div>
  );
}

export default Controllers;
