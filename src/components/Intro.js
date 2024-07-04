import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import play from "@/assets/play.png";
import movieHead01 from "@/assets/movieHead01.jpg";
import movieHead02 from "@/assets/movieHead02.jpg";
import movieHead03 from "@/assets/movieHead03.jpg";
import movieHead04 from "@/assets/movieHead04.jpg";
import movieHead05 from "@/assets/movieHead05.jpg";
import introPoster01 from "@/assets/introPoster01.jpg";
import introPoster02 from "@/assets/introPoster02.jpg";
import introPoster03 from "@/assets/introPoster03.jpg";
import introPoster04 from "@/assets/introPoster04.jpg";
import introPoster05 from "@/assets/introPoster05.jpg";
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
            <SwiperSlide>
              <div className="movie">
                <div className="content">
                  <div className="left">
                    <div className="poster">
                      <img src={introPoster01} alt="poster" />
                    </div>
                    <div className="info">
                      <span>2024.07.12</span>
                      <a href="#none">예매</a>
                    </div>
                  </div>
                  <div className="right">
                    <h2>탈출-프로젝트 사일런스</h2>
                    <p>
                      <span>생존자 전원</span>이 <span>타겟</span>
                    </p>
                  </div>
                </div>
                <img src={movieHead01} alt="탈출-프로젝트 사일런스" />
              </div>
              <div
                className="btn"
                onClick={() =>
                  openModal(
                    "http://h.vod.cgv.co.kr/vodCGVa/88384/88384_226770_1200_128_960_540.mp4"
                  )
                }
              >
                <img className="play" src={play} alt="play" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="movie">
                <div className="content">
                  <div className="left">
                    <div className="poster">
                      <img src={introPoster02} alt="poster" />
                    </div>
                    <div className="info">
                      <span>2024.07.03</span>
                      <a href="#none">예매</a>
                    </div>
                  </div>
                  <div className="right">
                    <h2>탈주</h2>
                    <p>
                      <span>내 앞 길</span> <span>내가</span> 정한다
                    </p>
                  </div>
                </div>
                <img src={movieHead02} alt="탈주" />
              </div>
              <div
                className="btn"
                onClick={() =>
                  openModal(
                    "http://h.vod.cgv.co.kr/vodCGVa/88267/88267_226221_1200_128_960_540.mp4"
                  )
                }
              >
                <img className="play" src={play} alt="play" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="movie">
                <div className="content">
                  <div className="left">
                    <div className="poster">
                      <img src={introPoster03} alt="poster" />
                    </div>
                    <div className="info">
                      <span>2024.06.12</span>
                      <a href="#none">예매</a>
                    </div>
                  </div>
                  <div className="right">
                    <h2>인사이드 아웃2</h2>
                    <p>
                      <span>낯선 감정</span>이 <span>본부에 등장</span>
                    </p>
                  </div>
                </div>
                <img src={movieHead03} alt="인사이드 아웃2" />
              </div>
              <div
                className="btn"
                onClick={() =>
                  openModal(
                    "http://h.vod.cgv.co.kr/vodCGVa/87864/87864_226866_1200_128_960_540.mp4"
                  )
                }
              >
                <img className="play" src={play} alt="play" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="movie">
                <div className="content">
                  <div className="left">
                    <div className="poster">
                      <img src={introPoster04} alt="poster" />
                    </div>
                    <div className="info">
                      <span>2024.06.26</span>
                      <a href="#none">예매</a>
                    </div>
                  </div>
                  <div className="right">
                    <h2>콰이어트 플레이스-첫째 날</h2>
                    <p>
                      <span>쉿,</span> <span>괴생명체</span>등장
                    </p>
                  </div>
                </div>
                <img src={movieHead04} alt="콰이어트 플레이스-첫째 날" />
              </div>
              <div
                className="btn"
                onClick={() =>
                  openModal(
                    "http://h.vod.cgv.co.kr/vodCGVa/88335/88335_226292_1200_128_960_540.mp4"
                  )
                }
              >
                <img className="play" src={play} alt="play" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="movie">
                <div className="content">
                  <div className="left">
                    <div className="poster">
                      <img src={introPoster05} alt="poster" />
                    </div>
                    <div className="info">
                      <span>2024.06.26</span>
                      <a href="#none">예매</a>
                    </div>
                  </div>
                  <div className="right">
                    <h2>핸섬가이즈</h2>
                    <p>
                      오히려 <span>남치범</span>으로 오해를?
                    </p>
                  </div>
                </div>
                <img src={movieHead05} alt="핸섬가이즈" />
              </div>
              <div
                className="btn"
                onClick={() =>
                  openModal(
                    "http://h.vod.cgv.co.kr/vodCGVa/88227/88227_226482_1200_128_960_540.mp4"
                  )
                }
              >
                <img className="play" src={play} alt="play" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Intro;
