import "./Option.css";
import Dropdown from "../DropDown";
import React, { useState } from "react";

const Option = () => {
  const [view, setView] = useState(false);

  const [isComputerExpert, setIsComputerExpert] = useState(true);

  const handleToggle = () => {
    setIsComputerExpert(!isComputerExpert);
  };

  const brandList = [
    "삼성전자",
    "LG전자",
    "애플",
    "ASUS",
    "레노버",
  ];
const cpuList =[
  "코어i9 13세대",
  "코어i7 13세대",
  "코어i5 13세대",
  "코어i3 13세대",
  "라이젠9 (Zen4)",
  "라이젠9 (Zen3+)",
]
const displaySizeList=[
  "17인치 이상",
  "16인치대",
  "15인치대",
  "14인치대",
  "13인치대"
]
const displayfeatList =[
  "MiniLED",
  "QLED",
  "터치화면",
  "슬림베젤",
  "트루톤",
  "돌비 비전",
]
const memoryList = [
  "64GB",
  "32GB",
  "16GB",
  "8GB",
  "4GB",
  "12GB",
]
const ssdList=[
  "2TB",
  "1TB",
  "512GB",
  "256GB",
  "128GB",
  "120GB이하"
]
  return (
    <div className="option-box">
      <div className="option-list">
        <div className="option-header">
          <ul
            onClick={() => {
              setView(!view);
            }}
          >
            <h2>
              디자인노트북 {view ? "⌃" : "⌄"}
              {view && <Dropdown />}
            </h2>
          </ul>
          {/* <div className="toggle-group">
            <div className="toggle-text">컴퓨터를 잘 알아요</div>
            <input type="checkbox" id="toggle" hidden />
            <div>
              <label htmlFor="toggle" className="toggleSwitch">
                <span className="toggleButton"></span>
              </label>
            </div>
            <div className="toggle-text">컴퓨터를 잘 몰라요</div>
          </div> */}
  <div className="toggle-group">
      <div className={`toggle-text ${isComputerExpert ? 'left' : 'right'}`}>
        컴퓨터를 잘 알아요
        {isComputerExpert}
      </div>
      <input type="checkbox" id="toggle"  onChange={handleToggle} />
      <div>
        <label htmlFor="toggle" className="toggleSwitch">
          <span className="toggleButton"></span>
        </label>
      </div>
      <div className="toggle-text">
        컴퓨터를 잘 몰라요
      </div>

    </div>

        </div>
        <div className="option-body">
          <table >
            <thead></thead>
            <tbody>
              <tr className="option-line">
                <th
                  className="title"
                  scope="row"
                  style={{ alignItems: "start" }}
                >
                  제조사
                </th>
                <div className="checkbox-group">
                  {brandList.map((item, idx) => (
                    <div className="checkbox" key={idx}>
                      <input type="checkbox" id={item} />
                      <label className="checkbox-title" htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </tr>
              <tr className="option-line">
                <th className="title" scope="row">
                  CPU 종류
                </th>
                <div className="checkbox-group">
                  {cpuList.map((item, idx) => (
                    <div className="checkbox" key={idx}>
                      <input type="checkbox" id={item} />
                      <label className="checkbox-title" htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </tr>
              <tr className="option-line">
                <th className="title" scope="row">
                  화면 크기
                </th>
                <div className="checkbox-group">
                  {displaySizeList.map((item, idx) => (
                    <div className="checkbox" key={idx}>
                      <input type="checkbox" id={item} />
                      <label className="checkbox-title" htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </tr>
              <tr className="option-line">
                <th className="title" scope="row">
                  디스플레이 특징
                </th>
                <div className="checkbox-group">
                  {displayfeatList.map((item, idx) => (
                    <div className="checkbox" key={idx}>
                      <input type="checkbox" id={item} />
                      <label className="checkbox-title" htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </tr>
              <tr className="option-line">
                <th className="title" scope="row">
                  메모리
                </th>
                <div className="checkbox-group">
                  {memoryList.map((item, idx) => (
                    <div className="checkbox" key={idx}>
                      <input type="checkbox" id={item} />
                      <label className="checkbox-title" htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </tr>
              <tr className="option-line">
                <th className="title" scope="row">
                  SSD 용량
                </th>
                <div className="checkbox-group">
                  {ssdList.map((item, idx) => (
                    <div className="checkbox" key={idx}>
                      <input type="checkbox" id={item} />
                      <label className="checkbox-title" htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="more-option">
        <button class="more-option-btn">
          <div>32개 옵션 더보기</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Option;
