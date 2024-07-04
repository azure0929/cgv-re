import { useState } from "react";
import logo from "@/assets/logo.png";
import qr from "@/assets/qr.png";
import "@/css/Footer.css";
import "@/App.css";

function Footer() {
  const [selectedUrl, setSelectedUrl] = useState("");

  const handleSelectChange = (event) => {
    setSelectedUrl(event.target.value);
  };

  const handleClick = () => {
    if (selectedUrl) {
      window.open(selectedUrl, "_blank");
    }
  };

  return (
    <div>
      <footer>
        <div className="inner">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="link">
            <li>
              <a href="#none">회사소개</a>
            </li>
            <li>
              <a href="#none">지속가능한경영</a>
            </li>
            <li>
              <a href="#none">IR</a>
            </li>
            <li>
              <a href="#none">채용정보</a>
            </li>
            <li>
              <a href="#none">광고/제휴/출점문의</a>
            </li>
            <li>
              <a href="#none">이용약관</a>
            </li>
            <li>
              <a href="#none">편성기준</a>
            </li>
            <li>
              <a href="#none">개인정보처리방침</a>
            </li>
            <li>
              <a href="#none">법적고지</a>
            </li>
            <li>
              <a href="#none">이메일주소무단수집거부</a>
            </li>
            <li>
              <a href="#none">윤리경영</a>
            </li>
            <li>
              <a href="#none">사이버감사실</a>
            </li>
          </ul>
          <div className="company">
            <div className="left">
              <div className="info">
                <address>
                  (04377) 서울특별시 용산구 한강대로 23길 55, 아이파크몰
                  6층(한강로동)
                </address>
                <ul>
                  <li>대표이사 : 허민희</li>
                  <li>사업자등록번호 : 104-81-45680</li>
                  <li>통신판매업신고번호 : 2017-서울용산-0662</li>
                  <li>사업자정보확인</li>
                </ul>
                <ul>
                  <li>호스팅사업자 : CJ올리브네트웍스</li>
                  <li>개인정보보호 책임자 : 도형구</li>
                  <li>대표이메일 : cjcgvmaster@cj.net</li>
                </ul>
                <p className="copyright">© CJ CGV. All Rights Reserved</p>
              </div>
              <div className="site">
                <div>
                  <select onChange={handleSelectChange}>
                    <option value className="title">
                      계열사 바로가기
                    </option>
                    <optgroup label="CJ그룹">
                      <option value="http://www.cj.net">CJ주식회사</option>
                    </optgroup>
                    <optgroup label="식품 & 식품서비스">
                      <option value="https://www.cj.co.kr/kr/index">
                        CJ제일제당
                      </option>
                      <option value="https://www.cjfoodville.co.kr/main.asp">
                        CJ푸드빌
                      </option>
                      <option value="http://www.cjfreshway.com/index.jsp">
                        CJ프레시웨이
                      </option>
                    </optgroup>
                    <optgroup label="생명공학">
                      <option value="https://www.cj.co.kr/kr/about/business/bio">
                        CJ제일제당 BIO사업부문
                      </option>
                      <option value="https://www.cj.co.kr/kr/about/business/bio">
                        CJ Feed&Card
                      </option>
                    </optgroup>
                    <optgroup label="물류 & 신유통">
                      <option value="http://www.cjenc.co.kr/kr/Default.asp">
                        CJ대한통운
                      </option>
                      <option value="https://www.cj.co.kr/kr/about/business/bio">
                        CJ대한통운 건설부문
                      </option>
                      <option value="https://www.oliveyoung.co.kr/store/main/main.do?oy=0">
                        CJ올리브영
                      </option>
                      <option value="https://www.cjolivenetworks.co.kr:449/">
                        CJ올리브네트웍스
                      </option>
                      <option value="https://www.cjoshopping.com:9002/index.asp">
                        CJ ENM 커머스부문
                      </option>
                    </optgroup>
                    <optgroup label="엔터테인먼트 & 미디어">
                      <option value="https://www.cjenm.com/ko/">
                        CJ ENM 엔터테인먼트부문
                      </option>
                      <option value="http://corp.cgv.co.kr/">CJ CGV</option>
                    </optgroup>
                  </select>
                  <button onClick={handleClick} className="go">
                    GO
                  </button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="qr">
                <span>앱 다운로드</span>
                <div>
                  <img src={qr} alt="qrcode" />
                </div>
                <p>
                  QR코드를 스캔하고 <br />
                  앱설치 페이지로 바로 이동하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
