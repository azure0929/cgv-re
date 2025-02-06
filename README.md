## 'CGV 리뉴얼'

> 사용자 경험을 극대화하기 위해 인터랙티브한 요소와 재사용가능한 컴포넌트를 활용했습니다. <br> - Swiper를 사용하여 다양한 영화 정보를 제공했습니다. <br> - 각 영화의 재생 버튼을 클릭하여 모달 창을 통해 예고편을 바로 볼 수 있도록 구성했습니다. <br> - 극장 목록은 scroll-x animation을 적용하여 사용자가 다양한 극장을 한눈에 볼 수 있도록 구성했습니다. <br> - Flex와 transition을 활용하여 이벤트에 인터랙티브한 레이아웃을 구성했습니다.

<br>

### • 배포 주소: [https://cgv-re.netlify.app/](https://cgv-re.netlify.app/)

<br>

#### - 작업 기간: 2024.07

#### - 리팩토링: 2025.02

<br>

### 기술 스택

Development

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/SASS-CC6699?style=flat&logo=SASS&logoColor=white" />
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
    <img src="https://github.com/user-attachments/assets/397986c7-9759-4153-980c-b8d6e8abdce7" alt="before">
    <img src="https://github.com/user-attachments/assets/5ee614ce-81f2-4847-9cf7-a4a9c50c1c8c" alt="after">
  </details>

**2️⃣ useMemo를 활용하여 SwiperSlide를 동적으로 생성(코드의 반복성 줄임) & loading="lazy"로 초기 로딩 성능 개선**

- 성능 : 71 -> 73

  <details>
    <summary>페이지 콘텐츠가 표시되는 속도 : 2.2초 → 1.9초</summary>
    <img src="https://github.com/user-attachments/assets/5ee614ce-81f2-4847-9cf7-a4a9c50c1c8c" alt="before">
    <img src="https://github.com/user-attachments/assets/b1862918-1e9f-48a7-93ed-a719e8c3d2e9" alt="after">
  </details>

<br><br>

### 전체 페이지

<img src="https://github.com/user-attachments/assets/9a31494c-55f2-448a-b39b-6d3d928e2b81" />

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
      "https://h.vod.cgv.co.kr/vodCGVa/88267/88267_226464_1200_128_960_540.mp4"
    )
  }
>
  <img className="play" src={play} alt="play" loading="lazy" />
</div>
```

<br>

---

<br>

- Flex & animation

```html
{/* section : theater */}
<section className="theater">
  <div className="inner">
    <div className="list">
      <div className="list-group">
        <img src="{theater01}" alt="theater01" loading="lazy" />
        <img src="{theater02}" alt="theater02" loading="lazy" />
        <img src="{theater03}" alt="theater03" loading="lazy" />
        <img src="{theater04}" alt="theater04" loading="lazy" />
        <img src="{theater05}" alt="theater05" loading="lazy" />
      </div>
      <div aria-hidden="true" className="list-group">
        <img src="{theater01}" alt="theater01" loading="lazy" />
        <img src="{theater02}" alt="theater02" loading="lazy" />
        <img src="{theater03}" alt="theater03" loading="lazy" />
        <img src="{theater04}" alt="theater04" loading="lazy" />
        <img src="{theater05}" alt="theater05" loading="lazy" />
      </div>
    </div>
    <div className="list list-reverse">
      <div className="list-group">
        <img src="{theater06}" alt="theater06" loading="lazy" />
        <img src="{theater07}" alt="theater07" loading="lazy" />
        <img src="{theater08}" alt="theater08" loading="lazy" />
        <img src="{theater09}" alt="theater09" loading="lazy" />
        <img src="{theater10}" alt="theater10" loading="lazy" />
        <img src="{theater11}" alt="theater11" loading="lazy" />
      </div>
      <div aria-hidden="true" className="list-group">
        <img src="{theater06}" alt="theater06" loading="lazy" />
        <img src="{theater07}" alt="theater07" loading="lazy" />
        <img src="{theater08}" alt="theater08" loading="lazy" />
        <img src="{theater09}" alt="theater09" loading="lazy" />
        <img src="{theater10}" alt="theater10" loading="lazy" />
        <img src="{theater11}" alt="theater11" loading="lazy" />
      </div>
    </div>
  </div>
</section>
```

```scss
.theater {
  margin-top: 126px;
  overflow: hidden;
  .inner {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: auto;
    .list {
      display: flex;
      user-select: none;
      gap: 16px;
      .list-group {
        display: flex;
        justify-content: space-around;
        gap: 16px;
        animation: scroll-x var(--duration) linear infinite;
      }
    }
    .list-reverse {
      .list-group {
        animation-direction: reverse;
        animation-delay: -3s;
      }
    }
  }
  img {
    width: 382px;
    height: 212px;
    border-radius: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .list {
    animation-play-state: paused;
  }
}
@keyframes scroll-x {
  from {
    transform: translateX(var(--scroll-start));
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}
```

<br>

---

<br>

- tabBackgrounds 배열에서 현재 활성화된 탭('activeTab')의 배경 목록 표시

```javascript
<div className="lists" data-aos="fade-up" data-aos-duration="1500">
  <ul>
    {tabBackgrounds[activeTab].map((bg, index) => (
      <li key={index} className={`background-${bg}`}>
        <div>
          <button onClick={() => handleNavigation("/making")}>상세보기</button>
        </div>
      </li>
    ))}
  </ul>
</div>
```

<br>

- Flex를 활용하여 동적 리스트 항목 크기 조절 및 애니메이션 효과 구현

```scss
.event {
  .inner {
    .contents {
      .lists {
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 6px;
          overflow: hidden;
          li {
            border-radius: 12px;
            position: relative;
            width: calc(1200px / 7);
            height: 530px;
            flex: 1;
            filter: grayscale(1);
            transition: 0.3s;
            cursor: pointer;
            overflow: hidden;
            &:hover {
              flex: 5;
              filter: grayscale(0);
              div {
                opacity: 1;
                transition: 0.3s;
              }
            }
          }
        }
      }
    }
  }
}
```
