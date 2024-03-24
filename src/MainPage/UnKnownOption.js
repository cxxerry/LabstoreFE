import "./UnKnownOption.css";
import React from "react";

const unKnownOption = () => {
  const brandList = ["삼성전자", "LG전자", "애플", "ASUS", "레노버"];
  const tagList = [
    "문서 작업",
    "인터넷 강의",
    "저사양 게임",
    "경량 노트북",
    "큰 화면",
    "큰 용량",
  ];

  return (
    <div className="option-box">
      <div className="option-list">
        <div className="option-header">
          <ul>
            <h2>
              디자인노트북
              {/* {view && <Dropdown />} */}
            </h2>
          </ul>
          <div className="toggle-group">
            <div className="toggle-text">컴퓨터를 잘 알아요</div>
            <input type="checkbox" id="toggle" hidden />
            <div>
              <label htmlFor="toggle" className="toggleSwitch">
                <span className="toggleButton"></span>
              </label>
            </div>
            <div className="toggle-text">컴퓨터를 잘 몰라요</div>
          </div>
        </div>
        <div className="option-body">
          <table>
            <thead></thead>
            <tbody>
              <tr className="option-line">
                {brandList.map((item, idx) => (
                  <td className="option-btn" htmlFor={item}>
                    #{item}
                  </td>
                ))}
              </tr>
              <tr className="option-line">
                {tagList.map((item, idx) => (
                  <td className="option-btn" htmlFor={item}>
                    #{item}
                  </td>
                ))}
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

export default unKnownOption;
