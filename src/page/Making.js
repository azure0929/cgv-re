import "@/css/Making.css";
import "@/App.css";

function Making() {
  return (
    <div>
      <header>
        <div className="inner">
          <div className="content">
            <div className="top">
              <div className="logo">
                <img src={logo} alt="로고" />
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
            </div>
          </div>
        </div>
      </header>
      <div>
        <h2>현재 페이지는 준비중에 있습니다.</h2>
        <span>이용에 불편을 드려 죄송합니다.</span>
      </div>
    </div>
  );
}

export default Making;
