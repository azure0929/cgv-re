import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import search2 from "@/assets/search2.png";
import attention from "@/assets/attention.png";
import "@/scss/Making.scss";
import "@/App.scss";

function Making() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header className="light">
        <div className="inner">
          <div className="content">
            <div className="top">
              <div className="logo">
                <div onClick={() => handleNavigation("/")}>
                  <img src={logo} alt="로고" />
                </div>
                <div>CULTUREPLEX</div>
              </div>
              <div className="user">
                <a href="#none">로그인</a>
                <a href="#none">회원가입</a>
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li>
                  <button onClick={() => handleNavigation("/making")}>
                    영화
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/making")}>
                    예매
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/making")}>
                    극장
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/making")}>
                    스토어
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/making")}>
                    이벤트
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation("/making")}>
                    혜택
                  </button>
                </li>
                <li>
                  <img src={search2} alt="검색" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="preparing">
        <div className="inner">
          <div className="content">
            <div>
              <img src={attention} alt="주의" />
            </div>
            <div className="notice">
              <h2>현재 페이지는 준비중에 있습니다.</h2>
              <div>
                <span>이용에 불편을 드려 죄송합니다.</span>
                <span>빠른 시일내 오픈하겠습니다.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Making;
