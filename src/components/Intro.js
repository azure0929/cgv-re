import { useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import play from "@/assets/play.png";
import { movieData } from "@/data/MovieData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "@/App.css";
import "@/css/Intro.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function Intro() {
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

  const swiperSlides = useMemo(
    () =>
      movieData.map((movie) => (
        <SwiperSlide key={movie.title}>
          <div className="movie">
            <div className="content">
              <div className="left">
                <div className="poster">
                  <img src={movie.poster} alt="poster" loading="lazy" />
                </div>
                <div className="info">
                  <span>{movie.date}</span>
                  <button onClick={() => handleNavigation("/making")}>
                    예매
                  </button>
                </div>
              </div>
              <div className="right">
                <h2>{movie.title}</h2>
                <p>
                  <span>{movie.description.split(" ")[0]}</span>{" "}
                  <span>{movie.description.split(" ")[1]}</span>
                </p>
              </div>
            </div>
            <img src={movie.head} alt={movie.title} loading="lazy" />
          </div>
          <div className="btn" onClick={() => openModal(movie.videoUrl)}>
            <img className="play" src={play} alt="play" loading="lazy" />
          </div>
        </SwiperSlide>
      )),
    [openModal, handleNavigation]
  );

  return (
    <div>
      <section className="intro">
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
        <div className="inner">
          <Swiper
            loop={true}
            navigation={true}
            modules={[EffectFade, Navigation, Autoplay]}
            autoplay={{ delay: 6000 }}
            effect={"fade"}
          >
            {swiperSlides}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Intro;
