import { useNavigate } from "react-router-dom";
import pakage01 from "@/assets/pakage01.jpg";
import pakage02 from "@/assets/pakage02.jpg";
import pakage03 from "@/assets/pakage03.jpg";
import pakage04 from "@/assets/pakage04.jpg";
import gift01 from "@/assets/gift01.jpg";
import gift02 from "@/assets/gift02.jpg";
import gift03 from "@/assets/gift03.jpg";
import gift04 from "@/assets/gift04.jpg";
import baverage01 from "@/assets/baverage01.jpg";
import baverage02 from "@/assets/baverage02.jpg";
import baverage03 from "@/assets/baverage03.jpg";
import baverage04 from "@/assets/baverage04.jpg";
import plus from "@/assets/plus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "@/App.css";
import "@/css/Store.css";

function Store() {
  // Navigate
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <section className="store">
        <div className="inner">
          <div className="contents">
            <div className="top">
              <div className="notice">
                <span>공지사항</span>
                <button onClick={() => handleNavigation("/making")}>
                  [행사/이벤트][CGV]&lt;선재 업고 튀어&gt; 최종화 단체 관람
                  이벤트 관련 주요 공지<span>NEW</span>
                </button>
              </div>
              <div
                className="right"
                onClick={() => handleNavigation("/making")}
              >
                더 보기
                <div className="icon">
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </div>
            <ul className="bottom">
              <li className="pakage">
                <div className="title">
                  <span>패키지</span>
                  <button onClick={() => handleNavigation("/making")}>
                    더 보기
                  </button>
                </div>
                <ul className="list">
                  <li>
                    <img src={pakage01} alt="pakage01" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>&lt;키타로 탄생...&gt;</span>
                        <span>18,000원</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={pakage02} alt="pakage02" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>우리 패키지</span>
                        <span>62,000원</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list">
                  <li>
                    <img src={pakage03} alt="pakage03" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>나랑 너 패키지</span>
                        <span>35,000원</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={pakage04} alt="pakage04" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>좋은 날 패키지</span>
                        <span>18,000원</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="gift">
                <div className="title">
                  <span>기프트카드</span>
                  <button onClick={() => handleNavigation("/making")}>
                    더 보기
                  </button>
                </div>
                <ul className="list">
                  <li>
                    <img src={gift01} alt="gift01" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>CGV바캉스</span>
                        <span>금액충전형</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={gift02} alt="gift02" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>감사해바라기</span>
                        <span>금액충전형</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list">
                  <li>
                    <img src={gift03} alt="gift03" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>PACONNIE A형</span>
                        <span>금액충전형</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={gift04} alt="gift04" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>PACONNIE B형</span>
                        <span>금액충전형</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="baverage">
                <div className="title">
                  <span>음료</span>
                  <button onClick={() => handleNavigation("/making")}>
                    더 보기
                  </button>
                </div>
                <ul className="list">
                  <li>
                    <img src={baverage01} alt="baverage01" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>핑크레몬에이드</span>
                        <span>5,500원</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={baverage02} alt="baverage02" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>에이드</span>
                        <span>5,500원</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list">
                  <li>
                    <img src={baverage03} alt="baverage03" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>디카페인 콜드브루</span>
                        <span>5,000원</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src={baverage04} alt="baverage04" />
                    <div className="info">
                      <button onClick={() => handleNavigation("/making")}>
                        <img src={plus} alt="link" />
                      </button>
                      <div>
                        <span>탄산음료(L)</span>
                        <span>3,500원</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Store;
