import React, { useState } from "react";
import "./MenuBar.css";

function MenuBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="menu-bar-container">
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className={`menu-bar ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">메뉴1</a>
          </li>
          <li>
            <a href="#">메뉴2</a>
          </li>
          <li>
            <a href="#">메뉴3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
