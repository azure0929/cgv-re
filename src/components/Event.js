import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "@/App.css";
import "@/css/Event.css";

function Event() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  // 각 탭에 따른 리스트의 배경 이미지 클래스명 배열
  const tabBackgrounds = [
    [
      "event01",
      "event02",
      "event03",
      "event04",
      "event05",
      "event06",
      "event07",
    ],
    [
      "event08",
      "event09",
      "event10",
      "event11",
      "event12",
      "event13",
      "event14",
    ],
    [
      "event15",
      "event16",
      "event17",
      "event18",
      "event19",
      "event20",
      "event21",
    ],
    [
      "event22",
      "event23",
      "event24",
      "event25",
      "event26",
      "event27",
      "event28",
    ],
    [
      "event29",
      "event30",
      "event31",
      "event32",
      "event33",
      "event34",
      "event35",
    ],
  ];

  return (
    <div>
      <section className="event">
        <div className="inner">
          <div className="title">
            <div className="left">
              <h2>EVENT</h2>
            </div>
            <div className="right">
              전체보기
              <div href="#none" className="icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
          <div className="contents">
            <div className="tabmenu">
              <ul>
                <li
                  className={activeTab === 0 ? "active" : ""}
                  onClick={() => handleTabClick(0)}
                >
                  SPECIAL
                </li>
                <li
                  className={activeTab === 1 ? "active" : ""}
                  onClick={() => handleTabClick(1)}
                >
                  영화/예매
                </li>
                <li
                  className={activeTab === 2 ? "active" : ""}
                  onClick={() => handleTabClick(2)}
                >
                  멤버십/CLUB
                </li>
                <li
                  className={activeTab === 3 ? "active" : ""}
                  onClick={() => handleTabClick(3)}
                >
                  CGV 극장별
                </li>
                <li
                  className={activeTab === 4 ? "active" : ""}
                  onClick={() => handleTabClick(4)}
                >
                  제휴/할인
                </li>
              </ul>
            </div>
            <div className="lists">
              <ul>
                {tabBackgrounds[activeTab].map((bg, index) => (
                  <li key={index} className={`background-${bg}`}>
                    <div>
                      <a className="link" href="#none">
                        상세보기
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event;
