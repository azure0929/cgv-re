## 'CGV 리뉴얼'

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
<br>

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
