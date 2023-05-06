import React, { useState } from "react";
import styled from "styled-components";

function MenuBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <MenuBarContainer>
      <HamburgerButton className="hamburger" onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerButton>
      <MenuBarDropdown className={`menu-bar ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">메뉴1</a>
          </li>
          <li>
            <a href="#">메뉴2</a>
          </li>
        </ul>
      </MenuBarDropdown>
    </MenuBarContainer>
  );
}

export default MenuBar;

const MenuBarContainer = styled.div`
  position: relative;
`;

const HamburgerButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const HamburgerLine = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: #333;
`;

const MenuBarDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: block;

  &.active {
    display: block;
  }

  ${MenuBarContainer}.active & {
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #333;
    border-radius: 3px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #eee;
    }
  }
`;
