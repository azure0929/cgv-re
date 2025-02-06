import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/App.scss";
import "@/scss/Event.scss";

function Event() {
  const [activeTab, setActiveTab] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabBackgrounds = [
    ["event1", "event2", "event3", "event4", "event5", "event6", "event7"],
    ["event8", "event9", "event10", "event11", "event12", "event13", "event14"],
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

  // 이미지 미리 로드
  useEffect(() => {
    const allImages = new Set();
    tabBackgrounds.flat().forEach((img) => {
      const image = new Image();
      image.src = require(`@/assets/${img}.webp`);
      image.onload = () => {
        allImages.add(img);
        setLoadedImages(new Set(allImages));
      };
    });
  }, []);

  const navigate = useNavigate();
  const handleNavigation = (path) => navigate(path);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="event">
        <div className="inner">
          <div className="title">
            <div className="left" data-aos="fade-up" data-aos-duration="800">
              <h2>EVENT</h2>
            </div>
            <div
              className="right"
              onClick={() => handleNavigation("/making")}
              data-aos="fade-up"
              data-aos-duration="900"
            >
              전체보기
              <div className="icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
          <div className="contents">
            <div
              className="tabmenu"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <ul>
                {[
                  "SPECIAL",
                  "영화/예매",
                  "멤버십/CLUB",
                  "CGV 극장별",
                  "제휴/할인",
                ].map((tab, index) => (
                  <li
                    key={index}
                    className={activeTab === index ? "active" : ""}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lists" data-aos="fade-up" data-aos-duration="1500">
              <ul>
                {tabBackgrounds[activeTab].map((bg, index) => (
                  <li
                    key={index}
                    className={`background-${bg} ${
                      loadedImages.has(bg) ? "loaded" : "loading"
                    }`}
                  >
                    <div>
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
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
