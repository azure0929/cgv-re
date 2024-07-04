import logo from "@/assets/logo.png";
import search from "@/assets/search.png";
import "@/css/Header.css";

function Header() {
  return (
    <div>
      <header>
        <div className="inner">
          <div className="content">
            <div className="top">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="로고" />
                </a>
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
                  <a href="#none">영화</a>
                </li>
                <li>
                  <a href="#none">예매</a>
                </li>
                <li>
                  <a href="#none">극장</a>
                </li>
                <li>
                  <a href="#none">스토어</a>
                </li>
                <li>
                  <a href="#none">이벤트</a>
                </li>
                <li>
                  <a href="#none">혜택</a>
                </li>
                <li>
                  <img src={search} alt="검색" />
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
