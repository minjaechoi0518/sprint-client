import React from "react";
import { useSelector } from "react-redux";
import AllSprintList from "../components/AllSprintList";
import Header from "../components/Header";
import MyMakeSprint from "../components/MyMakeSprint";
import ParticipateSprint from "../components/ParticipateSprint";

const Main = () => {
  const sprintType = useSelector((state) => state.sprint.sprintList);

  return (
    <div>
      <Header />
      {sprintType === "all" && <AllSprintList />}
      {sprintType === "MyMakeSprint" && <MyMakeSprint />}
      {sprintType === "ParticipateSprint" && <ParticipateSprint />}
    </div>
  );
};

export default Main;
