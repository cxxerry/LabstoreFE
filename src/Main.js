import React from "react";
import "./css/App.css";
import MainRecommend from "./MainPage/MainRecommend";
import Header from "./Header";
import Option from "./MainPage/Option";
import UnKnownOption from "./MainPage/UnKnownOption";

const Main = () => {
  return (
    <div>
      <Header />
      <Option defaultChecked={true} />
      <UnKnownOption defaultChecked={true}/>
      <MainRecommend />
    </div>
  );
};

export default Main;
