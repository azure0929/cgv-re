import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import upcoming01 from "@/assets/upcoming01.jpg";
import upcoming02 from "@/assets/upcoming02.jpg";
import upcoming03 from "@/assets/upcoming03.jpg";
import upcoming04 from "@/assets/upcoming04.jpg";
import upcoming05 from "@/assets/upcoming05.jpg";
import upcoming06 from "@/assets/upcoming06.jpg";
import upcoming07 from "@/assets/upcoming07.jpg";
import upcoming08 from "@/assets/upcoming08.jpg";
import upcoming09 from "@/assets/upcoming09.jpg";
import upcoming10 from "@/assets/upcoming10.jpg";
import upcoming11 from "@/assets/upcoming11.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import play from "@/assets/play.png";
import "@/App.css";
import "@/css/Upcoming.css";

function Upcoming() {
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

  return (
    <div>
      {/* section :  */}
      <section className="upcoming">
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
          <div className="title">
            <div className="left">
              <h2>상영예정작</h2>
            </div>
            <div className="right" onClick={() => handleNavigation("/making")}>
              전체보기
              <div href="#none" className="icon">
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>
          </div>
          <div className="movie">
            <div className="left">
              <div className="poster">
                <img src={upcoming01} alt="탈주" />
                <div className="eff">
                  <div
                    className="btn"
                    onClick={() =>
                      openModal(
                        "http://h.vod.cgv.co.kr/vodCGVa/88267/88267_226464_1200_128_960_540.mp4"
                      )
                    }
                  >
                    <img className="play" src={play} alt="play" />
                  </div>
                  <div className="link">
                    <button onClick={() => handleNavigation("/making")}>
                      상세보기
                    </button>
                  </div>
                </div>
              </div>
              <div className="detail">
                <div className="title">
                  <h4>탈주</h4>
                  <span>24.07.03</span>
                </div>
                <div className="summary">
                  <p>
                    <strong>"내 앞길 내가 정했습니다."</strong>
                    <br />
                    휴전선 인근 북한 최전방 군부대. 10년 만기 제대를 앞둔
                    중사...
                  </p>
                </div>
                <div className="list">
                  <h4>영화 선택</h4>
                  <div className="choice">
                    <ul>
                      <li>탈주</li>
                      <li>탈주(무대인사)</li>
                    </ul>
                    <ul>
                      <li>탈주(무대인사,DOLBY ATMOS mix 2D)</li>
                      <li>탈주(무대인사,PRIVATE BOX)</li>
                    </ul>
                    <ul>
                      <li>탈주(쿨썸머 특가)</li>
                      <li>탈주(DOLBY ATMOS mix 2D)</li>
                    </ul>
                    <ul>
                      <li>탈주(PRIVATE BOX)</li>
                      <li>탈주(SOUNDX 2D)</li>
                    </ul>
                    <ul>
                      <li>탈주(SUITE CINEMA)</li>
                    </ul>
                  </div>
                </div>
                <div className="link">
                  <button onClick={() => handleNavigation("/making")}>
                    예매
                  </button>
                  <button onClick={() => handleNavigation("/making")}>
                    무대인사
                  </button>
                </div>
              </div>
            </div>
            <div className="right">
              <ul>
                <li>
                  <div>
                    <img src={upcoming02} alt="듄 - 파트2" />
                    <div className="eff">
                      <div
                        className="btn"
                        onClick={() =>
                          openModal(
                            "http://h.vod.cgv.co.kr/vodCGVa/87947/87947_223266_1200_128_960_540.mp4"
                          )
                        }
                      >
                        <img className="play" src={play} alt="play" />
                      </div>
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>듄 - 파트2</span>
                </li>
                <li>
                  <div>
                    <img
                      src={upcoming03}
                      alt="극장판 도라에몽 - 진구의 지구 교향곡"
                    />
                    <div className="eff">
                      <div
                        className="btn"
                        onClick={() =>
                          openModal(
                            "http://h.vod.cgv.co.kr/vodCGVa/88378/88378_226895_1200_128_960_540.mp4"
                          )
                        }
                      >
                        <img className="play" src={play} alt="play" />
                      </div>
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>극장판 도라에몽 - 진구의 지구 교향곡</span>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <img src={upcoming04} alt="탈출" />
                    <div className="eff">
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
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>탈출</span>
                </li>
                <li>
                  <div>
                    <img src={upcoming05} alt="명탐정 코난 VS 괴도 키드" />
                    <div className="eff">
                      <div
                        className="btn"
                        onClick={() =>
                          openModal(
                            "http://h.vod.cgv.co.kr/vodCGVa/88272/88272_225735_1200_128_960_540.mp4"
                          )
                        }
                      >
                        <img className="play" src={play} alt="play" />
                      </div>
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>명탐정 코난 VS 괴도 키드</span>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <img src={upcoming06} alt="데드풀과 울버린" />
                    <div className="eff">
                      <div
                        className="btn"
                        onClick={() =>
                          openModal(
                            "http://h.vod.cgv.co.kr/vodCGVa/88228/88228_226059_1200_128_960_540.mp4"
                          )
                        }
                      >
                        <img className="play" src={play} alt="play" />
                      </div>
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>데드풀과 울버린</span>
                </li>
                <li>
                  <div>
                    <img src={upcoming07} alt="슈퍼배드 4" />
                    <div className="eff">
                      <div
                        className="btn"
                        onClick={() =>
                          openModal(
                            "http://h.vod.cgv.co.kr/vodCGVa/88389/88389_226910_1200_128_960_540.mp4"
                          )
                        }
                      >
                        <img className="play" src={play} alt="play" />
                      </div>
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>슈퍼배드 4</span>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <img src={upcoming08} alt="에이리언- 로물루스" />
                    <div className="eff">
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>에이리언- 로물루스</span>
                </li>
                <li>
                  <div>
                    <img src={upcoming09} alt="위키드" />
                    <div className="eff">
                      <div
                        className="btn"
                        onClick={() =>
                          openModal(
                            "http://h.vod.cgv.co.kr/vodCGVa/88076/88076_225892_1200_128_960_540.mp4"
                          )
                        }
                      >
                        <img className="play" src={play} alt="play" />
                      </div>
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>위키드</span>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <img src={upcoming10} alt="모아나 2" />
                    <div className="eff">
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>모아나 2</span>
                </li>
                <li>
                  <div>
                    <img src={upcoming11} alt="애니멀 킹덤" />
                    <div className="eff">
                      <div className="link">
                        <button onClick={() => handleNavigation("/making")}>
                          상세보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>애니멀 킹덤</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Upcoming;
