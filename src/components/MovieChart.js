import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SlidePrevButton from "@/common/SlidePrevButton.js";
import SlideNextButton from "@/common/SlideNextButton.js";
import AOS from "aos";
import "aos/dist/aos.css";
import chart01 from "@/assets/chart01.jpg";
import chart02 from "@/assets/chart02.jpg";
import chart03 from "@/assets/chart03.jpg";
import chart04 from "@/assets/chart04.jpg";
import chart05 from "@/assets/chart05.jpg";
import chart06 from "@/assets/chart06.jpg";
import chart07 from "@/assets/chart07.jpg";
import chart08 from "@/assets/chart08.jpg";
import play from "@/assets/play.png";
import "@/App.css";
import "@/css/MovieChart.css";

import "swiper/css";
import "swiper/css/navigation";

function MovieChart() {
  // 현재 시간
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Trailer Modal
  const [showModal, setShowModal] = useState(false);
  const [videoSource, setVideoSource] = useState("");

  const openModal = useCallback((source) => {
    setVideoSource(source);
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setVideoSource("");
    setShowModal(false);
  }, []);

  // Navigate
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // AOS
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <section className="moviechart">
        {/* 모달 */}
        {showModal && (
          <div className="modal">
            <div className="inner">
              <div>
                <button onClick={handleCloseModal}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <video controls autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
        <div className="title">
          <div className="inner">
            <div className="left" data-aos="fade-up" data-aos-duration="800">
              <h2>무비차트</h2>
              <span>
                {currentTime.getFullYear()}.
                {(currentTime.getMonth() + 1).toString().padStart(2, "0")}.
                {currentTime.getDate().toString().padStart(2, "0")}{" "}
                {currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}{" "}
                기준
              </span>
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
        </div>
        <div className="content">
          <div className="inner">
            <div className="prevbtn btn">
              <SlidePrevButton />
            </div>
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={4}
              spaceBetween={53}
              autoplay={{ delay: 6000, disableOnInteraction: false }} // 6초마다 자동 슬라이드
              loop={true}
              navigation={{
                nextEl: ".nextbtn",
                prevEl: ".prevbtn",
              }}
            >
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <img src={chart01} alt="chart01" />
                </div>
                <div className="detail">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "https://h.vod.cgv.co.kr/vodCGVa/87864/87864_226866_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="info">
                    <span>2024.06.12</span>
                    <div className="link">
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
                      <button onClick={() => handleNavigation("/making")}>
                        예매하기
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <img src={chart02} alt="chart02" />
                </div>
                <div className="detail">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "https://h.vod.cgv.co.kr/vodCGVa/88271/88271_226165_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="info">
                    <span>2024.06.21</span>
                    <div className="link">
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
                      <button onClick={() => handleNavigation("/making")}>
                        예매하기
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <img src={chart03} alt="chart03" />
                </div>
                <div className="detail">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "https://h.vod.cgv.co.kr/vodCGVa/88267/88267_226464_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="info">
                    <span>2024.07.03</span>
                    <div className="link">
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
                      <button onClick={() => handleNavigation("/making")}>
                        예매하기
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <img src={chart04} alt="chart04" />
                </div>
                <div className="detail">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "https://h.vod.cgv.co.kr/vodCGVa/88335/88335_226292_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="info">
                    <span>2024.06.26</span>
                    <div className="link">
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
                      <button onClick={() => handleNavigation("/making")}>
                        예매하기
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <img src={chart05} alt="chart05" />
                </div>
                <div className="detail">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "https://h.vod.cgv.co.kr/vodCGVa/88332/88332_226091_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="info">
                    <span>2024.06.14</span>
                    <div className="link">
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
                      <button onClick={() => handleNavigation("/making")}>
                        예매하기
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <img src={chart06} alt="chart06" />
                </div>
                <div className="detail">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "https://h.vod.cgv.co.kr/vodCGVa/88265/88265_225899_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="info">
                    <span>2024.06.12</span>
                    <div className="link">
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
                      <button onClick={() => handleNavigation("/making")}>
                        예매하기
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <img src={chart07} alt="chart07" />
                </div>
                <div className="detail">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "https://h.vod.cgv.co.kr/vodCGVa/87947/87947_223266_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="info">
                    <span>2024.07.06 (재개봉)</span>
                    <div className="link">
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
                      <button onClick={() => handleNavigation("/making")}>
                        예매하기
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <img src={chart08} alt="chart08" />
                </div>
                <div className="detail">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "https://h.vod.cgv.co.kr/vodCGVa/88280/88280_226186_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="info">
                    <span>2024.06.19</span>
                    <div className="link">
                      <button onClick={() => handleNavigation("/making")}>
                        상세보기
                      </button>
                      <button onClick={() => handleNavigation("/making")}>
                        예매하기
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="nextbtn btn">
              <SlideNextButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieChart;
