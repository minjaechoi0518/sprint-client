import React from "react";
import * as CSS from "./component/style";
import MenuBar from "./MenuBar";

// import hanmbergerIcon from "./public/hanmbergerIcon.png";

const Header = () => {
  "./MenuBar";
  return (
    <div>
      <CSS.Header>
        <CSS.HeaderTitle>SPRINT</CSS.HeaderTitle>
      </CSS.Header>
      <div>
        <MenuBar />
      </div>
    </div>
  );
};

export default Header;
