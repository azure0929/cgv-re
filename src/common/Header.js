import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import search from "@/assets/search.png";
import "@/scss/Header.scss";
import "@/App.scss";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header className="dark">
        <div className="inner">
          <div className="content">
            <div className="top">
              <div className="logo">
                <div href="/">
                  <img src={logo} alt="로고" loading="lazy" />
                </div>
                <div>CULTUREPLEX</div>
              </div>
              <div className="user">
                <a href="#none">로그인</a>
                <a href="#none">회원가입</a>
              </div>
            </div>
            <nav className="bottom">
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
                  <img src={search} alt="검색" loading="lazy" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
