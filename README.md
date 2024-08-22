## 'CGV 리뉴얼'

> 사용자 경험을 극대화하기 위해 인터랙티브한 요소와 재사용가능한 컴포넌트를 활용했습니다. <br> - Swiper를 사용하여 다양한 영화 정보를 제공했습니다. <br> - 각 영화의 재생 버튼을 클릭하여 모달 창을 통해 예고편을 바로 볼 수 있도록 구성했습니다. <br> - 극장 목록은 scroll-x animation을 적용하여 사용자가 다양한 극장을 한눈에 볼 수 있도록 구성했습니다. <br> - Flex와 transition을 활용하여 이벤트에 인터랙티브한 레이아웃을 구성했습니다.

<br>

### • 배포 주소: [https://cgv-re.netlify.app/](https://cgv-re.netlify.app/)

<br>

#### - 작업 기간: 2024.07

<br>

### 기술 스택

Development

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white" />
</p>

Config

<p>
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/></a>
</p>

Environment

<p>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>
</p>
<br><br>

### 웹 성능 최적화 (Lighthouse 사용)

**1️⃣ 이미지 포맷을 jpg에서 webp로 변환**

- 성능 : 64 → 71

  <details>
    <summary>최대 텍스트 또는 이미지가 표시되는 시간 : 2.1초 → 0.8초</summary>
    <img src="https://github.com/user-attachments/assets/397986c7-9759-4153-980c-b8d6e8abdce7" alt="">
    <img src="https://github.com/user-attachments/assets/5ee614ce-81f2-4847-9cf7-a4a9c50c1c8c" alt="">
  </details>

<br><br>

### 전체 페이지

<img src="https://github.com/user-attachments/assets/589efdcf-757b-4eeb-bb6e-4ef05f30bf40" />

<br><br>

### 💻 주요 기능

---

- swiper

```javascript
/* Intro */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

<Swiper
  loop={true}
  navigation={true}
  modules={[EffectFade, Navigation, Autoplay]}
  autoplay={{ delay: 6000 }}
  effect={"fade"}
>
```

<br>

---

<br>

- modal

```javascript
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
```

```javascript
{
  /* 모달 */
}
{
  showModal && (
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
  );
}
```

```javascript
<div
  className="btn"
  onClick={() =>
    openModal(
      "https://h.vod.cgv.co.kr/vodCGVa/87864/87864_226866_1200_128_960_540.mp4"
    )
  }
>
  <img className="play" src={play} alt="play" />
</div>
```
