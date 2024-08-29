import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SlidePrevButton from "@/common/SlidePrevButton.js";
import SlideNextButton from "@/common/SlideNextButton.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { chartData } from "@/data/ChartData.js";
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
  }, []);

  const swiperSlides = useMemo(() =>
    chartData.map((item) => (
      <SwiperSlide key={item.id}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="detail">
          <div className="btn" onClick={() => openModal(item.videoSrc)}>
            <img className="play" src={play} alt="play" />
          </div>
          <div className="info">
            <span>{item.date}</span>
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
    ))
  );

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
              {swiperSlides}
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
