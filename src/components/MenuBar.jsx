import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./component/style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as CSS from "../components/component/style";
import { allList, listRefer, myProject, myStudy } from "../redux/modules/sprintMenu";
import Cookies from "js-cookie";

const MenuBar = ({ isActive, toggleMenu }) => {
  const [isMySprintOpen, setIsMySprintOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('token'))
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleMySprint = () => {
    setIsMySprintOpen(!isMySprintOpen);
  };

  const handleMyProjectClick = () => {
    dispatch(listRefer("project"));
    navigate("/main");
  };

  const handleMyStudyClick = () => {
    dispatch(listRefer("study"));
    navigate("/main");
  };
  const handleAllListClickHandler = () => {
    dispatch(listRefer("all"));
    navigate("/main");
  }
  const logoutOnClickHandler = () =>{
    Cookies.remove('token')
    setIsLoggedIn(false)
    navigate('/main')
  }

  return (
    <CSS.MenuBarContainer>
      <CSS.HamburgerButton className="hamburger" zIndex={100} onClick={toggleMenu}>
        <CSS.HamburgerLine />
        <CSS.HamburgerLine />
        <CSS.HamburgerLine />
      </CSS.HamburgerButton>
      <CSS.MenuBarDropdown className={`menu-bar ${isActive ? "active" : ""}`}>
        <ul>
          <CSS.MenuBarTopContainer>

            {!isLoggedIn && <li className="btn-group">
              <Link to="/login">
                <Button type="positive">Log in</Button>
              </Link>
              <Link to="/signUp">
                <Button type="positive">Join us</Button>
              </Link>
            </li>}
            {isLoggedIn && <li className="btn-group">
                <Button size='100' type="negative" onClick={logoutOnClickHandler}>Log out</Button>
            </li>}
            <Link to="/editor">
            <div style={{ height: "50px" }}></div>
              <Button size='160' type="positive"> 스터디 / 프로젝트 만들기</Button>
            </Link>

          </CSS.MenuBarTopContainer>


          <Button size='160' type="positive" onClick={handleAllListClickHandler}>전체 리스트</Button>
          <div style={{ height: "50px" }}></div>

          <li>
            <Button href="#" onClick={toggleMySprint}>
              My Sprint {isMySprintOpen ? "▲" : "▼"}
            </Button>

            <div style={{ height: "10px" }}></div>
            {isMySprintOpen && (
              <div>
                <Button type="negative" onClick={handleMyProjectClick}>
                  참여중인 SPRINT
                </Button>
                <div style={{ height: "20px" }}></div>
                <Button type="negative" onClick={handleMyStudyClick}>
                  내가 만든 SPRINT
                </Button>
              </div>
            )}
          </li>
        </ul>
      </CSS.MenuBarDropdown>
    </CSS.MenuBarContainer>
  );
};

export default MenuBar;


