import * as CSS from "./component/style";
import MenuBar from "./MenuBar";
import React, { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <CSS.Header>
        <CSS.HeaderTitle>SPRINT</CSS.HeaderTitle>
        <MenuBar isActive={isActive} toggleMenu={toggleMenu} />
      </CSS.Header>
    </div>
  );
};

export default Header;
